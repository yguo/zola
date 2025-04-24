import { openai } from "@ai-sdk/openai"
import { generateObject } from "ai"
import { z } from "zod"
import { ResearchFinding, SufficiencyAnalysis } from "../types"

/**
 * Generate a short report title based on prompt
 */
export async function generateReportTitle(prompt: string): Promise<string> {
  const { object: titleObj } = await generateObject({
    model: openai("gpt-4.1-nano", { structuredOutputs: true }),
    schema: z.object({ title: z.string() }),
    prompt: `Write a short report title (max 12 words) for:
    "${prompt}". Only capitalize the first word; no trailing punctuation; avoid the word "report".`,
  })

  return titleObj.title
}

/**
 * Generate search queries for a given prompt
 */
export async function generateSearchQueries(prompt: string): Promise<string[]> {
  const { object: queries } = await generateObject({
    model: openai("gpt-4.1-nano", { structuredOutputs: true }),
    schema: z.object({ queries: z.array(z.string()) }),
    prompt: `Generate exactly 3 search queries for "${prompt}" that would make good H2 sections.`,
  })

  return queries.queries
}

/**
 * Summarize search results into findings
 */
export async function summarizeSources(
  searchResults: {
    query: string
    sources: { title: string; url: string; snippet: string }[]
  }[]
): Promise<ResearchFinding[]> {
  const summaries = await Promise.all(
    searchResults.map(async ({ query, sources }) => {
      const bulletedSources = sources
        .map((s, i) => `${i + 1}. "${s.title}": ${s.snippet}`)
        .join("\n")

      const { object } = await generateObject({
        model: openai("gpt-4.1-mini"),
        prompt: `Summarize the key insights about "${query}" as **exactly 2-6 bullets**.
    • Each bullet **must start with "-" "** (hyphen + space) – no other bullet symbols.
    • One concise sentence per bullet; no intro, no conclusion, no extra paragraphs.
    • Base the bullets only on the information below, do not include links.
    • Focus on specific ideas, patterns, or tactics, not general claims.
    • Do not sound AI-generated, sound like a human writing a report.
    
    ${bulletedSources}`,
        system: `You are a senior research writer.
  
  Your job is to extract only the most useful and practical insights from a given source.
  
  Write in a clear, direct tone. Avoid filler. No introductions or conclusions.
  
  Always return 3–6 markdown bullet points starting with "- ".
  
  Be specific. If nothing useful is in the snippet, say: "- No relevant insight found."
  `,
        schema: z.object({
          summary: z.string(),
        }),
      })

      return {
        query,
        summary: object.summary.trim(),
        citations: sources,
      }
    })
  )

  return summaries
}

/**
 * Analyze if findings are sufficient for the research topic
 */
export async function analyzeSufficiency(
  findings: ResearchFinding[],
  topic: string
): Promise<SufficiencyAnalysis> {
  const content = findings
    .map((f) => f.summary)
    .join("\n\n")
    .slice(0, 8000) // limit tokens

  const { object } = await generateObject({
    model: openai("gpt-4.1-mini"),
    prompt: `You are reviewing the following findings for the research topic: "${topic}".
  
      <findings>
      ${content}
      </findings>
      
      Answer:
      - Is this content sufficient to write a useful and specific report?
      - If not, what important information is still missing?
      - Suggest up to 3 follow-up search queries to complete the missing parts.
      
      Respond clearly as JSON. Be pragmatic, not perfectionist.`,
    system: `
  You are a senior research analyst.
  
  Your job is to assess whether the findings are **enough to produce a helpful report**.
  
  Be practical: assume the user wants to move fast. If the findings include specific, diverse, and actionable content—even if imperfect—mark it as sufficient.
  
  If something important is missing, suggest targeted queries to close the gap.
  
  Only return structured JSON. No filler.
  `,
    schema: z.object({
      sufficient: z.boolean(),
      missing: z.array(z.string()).optional(),
      followupQueries: z.array(z.string()).optional(),
    }),
  })

  return {
    sufficient: object.sufficient,
    missing: object.missing ?? [],
    followupQueries: object.followupQueries ?? [],
  }
}

/**
 * Generate a final markdown report from findings
 */
export async function generateReport(
  findings: ResearchFinding[],
  title: string
): Promise<string> {
  const content = findings
    .map((f) => f.summary)
    .join("\n\n")
    .slice(0, 8000)

  const { object } = await generateObject({
    model: openai("gpt-4.1-mini"),
    prompt: `Write a concise, well-structured markdown report titled "${title}".
    Use the research notes below. If anything is missing, fill the gaps with your knowledge.
    
    <research>
    ${content}
    </research>
    
    Return only markdown content. No intro or explanation outside the report.`,
    system: `
    You are a senior technical writer with deep domain knowledge.
    
    Write a report in markdown. Keep it:
    - Structured (H1, H2, H3)
    - Only capitalize the first word of each sentence
    - Clear and direct
    - Based on the provided findings
    - Filled with real, practical insights
    - Not AI-generic, sound sharp and human
    
    Use:
    # Title
    ## Section
    ### Subsection
    - Bullet points when useful
    - Code blocks if relevant
    
    Do not explain the task. Just return the markdown. Start immediately with "#".
    `,
    schema: z.object({ markdown: z.string() }),
  })

  return object.markdown.trim()
}
