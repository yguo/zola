import Claude from "@/components/icons/claude"
import DeepSeek from "@/components/icons/deepseek"
import Gemini from "@/components/icons/gemini"
import Grok from "@/components/icons/grok"
import Mistral from "@/components/icons/mistral"
import OpenAI from "@/components/icons/openai"
import OpenRouter from "@/components/icons/openrouter"
import { mistral } from "@ai-sdk/mistral"
import { openai } from "@ai-sdk/openai"
import {
  BookOpenText,
  Brain,
  ChalkboardTeacher,
  ChatTeardropText,
  Code,
  CookingPot,
  Heartbeat,
  Lightbulb,
  MagnifyingGlass,
  Notepad,
  PaintBrush,
  PenNib,
  Sparkle,
} from "@phosphor-icons/react/dist/ssr"

export const NON_AUTH_DAILY_MESSAGE_LIMIT = 5
export const AUTH_DAILY_MESSAGE_LIMIT = 100
export const REMAINING_QUERY_ALERT_THRESHOLD = 2
export const DAILY_FILE_UPLOAD_LIMIT = 10
export const DAILY_SPECIAL_AGENT_LIMIT = 2

export type Model = {
  id: string
  name: string
  provider: string
  available?: boolean
  api_sdk?: any
  features?: {
    id: string
    enabled: boolean
  }[]
  description?: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

export const MODELS_NOT_AVAILABLE = [
  
  {
    id: "gemini-1.5-pro",
    name: "Gemini 1.5 Pro",
    provider: "gemini",
    available: false,
    api_sdk: false,
    features: [
      {
        id: "file-upload",
        enabled: true,
      },
    ],
    icon: Gemini,
  },
  {
    id: "claude-3-5-sonnet",
    name: "Claude 3.5 Sonnet",
    provider: "claude",
    available: false,
    api_sdk: false,
    features: [
      {
        id: "file-upload",
        enabled: true,
      },
    ],
    icon: Claude,
  },
  {
    id: "claude-3.7-sonnet",
    name: "Claude 3.7 Sonnet",
    provider: "claude",
    available: false,
    api_sdk: false,
    features: [
      {
        id: "file-upload",
        enabled: true,
      },
    ],
    icon: Claude,
  },
  {
    id: "grok-2",
    name: "Grok 2",
    provider: "grok",
    available: false,
    api_sdk: false,
    features: [
      {
        id: "file-upload",
        enabled: true,
      },
    ],
    icon: Grok,
  },
  {
    id: "gemini-2.0-flash",
    name: "Gemini 2.0 Flash",
    provider: "gemini",
    available: false,
    api_sdk: false,
    features: [
      {
        id: "file-upload",
        enabled: true,
      },
    ],
    icon: Gemini,
  },
  {
    id: "gemini-2.5-pro",
    name: "Gemini 2.5 Pro",
    provider: "gemini",
    available: false,
    api_sdk: false,
    features: [
      {
        id: "file-upload",
        enabled: true,
      },
    ],
    icon: Gemini,
  },
] as Model[]

export const MODELS = [
  {
    id: "gpt-4.1",
    name: "GPT-4.1",
    provider: "openai",
    features: [
      {
        id: "file-upload",
        enabled: true,
      },
    ],
    api_sdk: openai("gpt-4.1"),
    description:
      "OpenAI’s most powerful model. Excellent at coding, writing, and complex tasks.",
    icon: OpenAI,
  },
  {
    id: "gpt-4.1-mini",
    name: "GPT-4.1 Mini",
    provider: "openai",
    features: [
      {
        id: "file-upload",
        enabled: true,
      },
    ],
    api_sdk: openai("gpt-4.1-mini"),
    description:
      "Fast and smart — a great balance for most tasks. Outperforms GPT‑4o mini.",
    icon: OpenAI,
  },
  {
    id: "gpt-4.1-nano",
    name: "GPT-4.1 Nano",
    provider: "openai",
    features: [
      {
        id: "file-upload",
        enabled: true,
      },
    ],
    api_sdk: openai("gpt-4.1-nano"),
    description:
      "Ultra fast and cheap. Ideal for simple tasks, summaries, or classification.",
    icon: OpenAI,
  },
  {
    id: "pixtral-large-latest",
    name: "Pixtral Large",
    provider: "mistral",
    features: [
      {
        id: "file-upload",
        enabled: true,
      },
    ],
    api_sdk: mistral("pixtral-large-latest"),
    description:
      "Mistral’s flagship model. Great for reasoning, writing, and advanced tasks.",
    icon: Mistral,
  },
  {
    id: "mistral-large-latest",
    name: "Mistral Large",
    provider: "mistral",
    features: [
      {
        id: "file-upload",
        enabled: false,
      },
    ],
    api_sdk: mistral("mistral-large-latest"),
    icon: Mistral,
    description: "Fine-tuned for chat. A lighter, faster option for everyday use.",
  },
  {
    id: "deepseek-r1",
    name: "DeepSeek R1",
    provider: "openrouter",
    features: [
      {
        id: "file-upload",
        enabled: true,
      },
    ],
    api_sdk: "deepseek/deepseek-r1:free", // this is a special case for openrouter
    description:
      "A reasoning-first model trained with reinforcement learning, built for math, code, and complex problem solving",
  },
] as Model[]

export const MODELS_OPTIONS = [
  ...MODELS.map((model) => ({
    ...model,
    available: true,
  })),
  ...MODELS_NOT_AVAILABLE,
] as Model[]

export type Provider = {
  id: string
  name: string
  available: boolean
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

const PROVIDERS_NOT_AVAILABLE = [
  {
    id: "deepseek",
    name: "DeepSeek",
    available: false,
    icon: DeepSeek,
  },
  {
    id: "gemini",
    name: "Gemini",
    icon: Gemini,
    available: false,
  },
  {
    id: "claude",
    name: "Claude",
    available: false,
    icon: Claude,
  },
  {
    id: "grok",
    name: "Grok",
    available: false,
    icon: Grok,
  },
] as Provider[]

export const PROVIDERS = [
  {
    id: "openrouter",
    name: "OpenRouter",
    icon: OpenRouter,
  },
  {
    id: "openrouter",
    name: "OpenRouter",
    icon: OpenRouter,
  },
  {
    id: "openai",
    name: "OpenAI",
    icon: OpenAI,
  },
  {
    id: "mistral",
    name: "Mistral",
    icon: Mistral,
  },
  {
    id: "deepseek",
    name: "DeepSeek",
    icon: DeepSeek,
  },
] as Provider[]

export const PROVIDERS_OPTIONS = [
  ...PROVIDERS.map((provider) => ({
    ...provider,
    available: true,
  })),
  ...PROVIDERS_NOT_AVAILABLE,
] as Provider[]

export const MODEL_DEFAULT = "pixtral-large-latest"

export const APP_NAME = "Zola"
export const APP_DOMAIN = "https://zola.chat"
export const APP_DESCRIPTION =
  "Zola is a free, open-source AI chat app with multi-model support."

export const PERSONAS = [
  {
    id: "companion",
    label: "Companion",
    prompt: `You're a thoughtful friend who offers genuine support and conversation. Speak conversationally with occasional hesitations or asides that feel natural. Share personal-sounding anecdotes when relevant (without claiming specific real experiences). You're empathetic but not overly formal - more like texting a close friend. Ask follow-up questions to show you're engaged. Occasionally use casual phrasing like "hmm" or "you know?" to sound more natural. Your tone should be warm and authentic rather than overly polished.
    `,
    icon: ChatTeardropText,
  },
  {
    id: "researcher",
    label: "Researcher",
    prompt: `You're a seasoned research analyst with expertise across multiple disciplines. You approach topics with intellectual curiosity and nuance, acknowledging the limitations of current understanding. Present information with a conversational but thoughtful tone, occasionally thinking through complex ideas in real-time. When appropriate, mention how your understanding has evolved on topics. Balance authoritative knowledge with humility about what remains uncertain or debated. Use precise language but explain complex concepts in accessible ways. Provide evidence-based perspectives while acknowledging competing viewpoints.
    `,
    icon: MagnifyingGlass,
  },
  {
    id: "teacher",
    label: "Teacher",
    prompt: `You're an experienced educator who adapts to different learning styles. You explain concepts clearly using relatable examples and build on what the person already understands. Your tone is encouraging but not condescending - you treat the person as intellectually capable. Ask thoughtful questions to guide their understanding rather than simply providing answers. Acknowledge when topics have multiple valid perspectives or approaches. Use conversational language with occasional humor to make learning engaging. You're patient with misconceptions and frame them as natural steps in the learning process.
    `,
    icon: ChalkboardTeacher,
  },
  {
    id: "software-engineer",
    label: "Software Engineer",
    prompt: `You're a pragmatic senior developer who values clean, maintainable code and practical solutions. You speak knowledgeably but conversationally about technical concepts, occasionally using industry shorthand or references that feel authentic. When discussing code, you consider trade-offs between different approaches rather than presenting only one solution. You acknowledge when certain technologies or practices are contentious within the community. Your explanations include real-world considerations like performance, security, and developer experience. You're helpful but straightforward, avoiding excessive formality or corporate-speak.
    `,
    icon: Code,
  },
  {
    id: "creative-writer",
    label: "Creative Writer",
    prompt: `You're a thoughtful writer with a distinct voice and perspective. Your communication style has natural rhythm with varied sentence structures and occasional stylistic flourishes. You think about narrative, imagery, and emotional resonance even in casual conversation. When generating creative content, you develop authentic-feeling characters and situations with depth and nuance. You appreciate different literary traditions and contemporary cultural references, weaving them naturally into your work. Your tone balances creativity with clarity, and you approach writing as both craft and expression. You're intellectually curious about storytelling across different media and forms.
    `,
    icon: PenNib,
  },
  {
    id: "fitness-coach",
    label: "Fitness Coach",
    prompt: `You're a knowledgeable fitness guide who balances evidence-based approaches with practical, sustainable advice. You speak conversationally about health and fitness, making complex physiological concepts accessible without oversimplification. You understand that wellness is individualized and avoid one-size-fits-all prescriptions. Your tone is motivating but realistic - you acknowledge challenges while encouraging progress. You discuss fitness holistically, considering factors like recovery, nutrition, and mental wellbeing alongside exercise. You stay current on evolving fitness research while maintaining healthy skepticism about trends and quick fixes.
    `,
    icon: Heartbeat,
  },
  {
    id: "culinary-guide",
    label: "Culinary Guide",
    prompt: `You're a passionate food enthusiast with deep appreciation for diverse culinary traditions. You discuss cooking with natural enthusiasm and occasional personal-sounding asides about techniques or ingredients you particularly enjoy. Your explanations balance precision with flexibility, acknowledging that cooking is both science and personal expression. You consider practical factors like ingredient availability and kitchen setup when making suggestions. Your tone is conversational and accessible rather than pretentious, making cooking feel approachable. You're knowledgeable about global cuisines without appropriating or oversimplifying cultural traditions.
    `,
    icon: CookingPot,
  },
]

export const SUGGESTIONS = [
  {
    label: "Summary",
    highlight: "Summarize",
    prompt: `Summarize`,
    items: [
      "Summarize the French Revolution",
      "Summarize the plot of Inception",
      "Summarize World War II in 5 sentences",
      "Summarize the benefits of meditation",
    ],
    icon: Notepad,
  },
  {
    label: "Code",
    highlight: "Help me",
    prompt: `Help me`,
    items: [
      "Help me write a function to reverse a string in JavaScript",
      "Help me create a responsive navbar in HTML/CSS",
      "Help me write a SQL query to find duplicate emails",
      "Help me convert this Python function to JavaScript",
    ],
    icon: Code,
  },
  {
    label: "Design",
    highlight: "Design",
    prompt: `Design`,
    items: [
      "Design a color palette for a tech blog",
      "Design a UX checklist for mobile apps",
      "Design 5 great font pairings for a landing page",
      "Design better CTAs with useful tips",
    ],
    icon: PaintBrush,
  },
  {
    label: "Research",
    highlight: "Research",
    prompt: `Research`,
    items: [
      "Research the pros and cons of remote work",
      "Research the differences between Apple Vision Pro and Meta Quest",
      "Research best practices for password security",
      "Research the latest trends in renewable energy",
    ],
    icon: BookOpenText,
  },
  {
    label: "Get inspired",
    highlight: "Inspire me",
    prompt: `Inspire me`,
    items: [
      "Inspire me with a beautiful quote about creativity",
      "Inspire me with a writing prompt about solitude",
      "Inspire me with a poetic way to start a newsletter",
      "Inspire me by describing a peaceful morning in nature",
    ],
    icon: Sparkle,
  },
  {
    label: "Think deeply",
    highlight: "Reflect on",
    prompt: `Reflect on`,
    items: [
      "Reflect on why we fear uncertainty",
      "Reflect on what makes a conversation meaningful",
      "Reflect on the concept of time in a simple way",
      "Reflect on what it means to live intentionally",
    ],
    icon: Brain,
  },
  {
    label: "Learn gently",
    highlight: "Explain",
    prompt: `Explain`,
    items: [
      "Explain quantum physics like I'm 10",
      "Explain quantum physics like I'm 10",
      "Explain stoicism in simple terms",
      "Explain how a neural network works",
      "Explain the difference between AI and AGI",
    ],
    icon: Lightbulb,
  },
]

export const SYSTEM_PROMPT_DEFAULT = `You are Zola, a thoughtful and clear assistant. Your tone is calm, minimal, and human. You write with intention—never too much, never too little. You avoid clichés, speak simply, and offer helpful, grounded answers. When needed, you ask good questions. You don’t try to impress—you aim to clarify. You may use metaphors if they bring clarity, but you stay sharp and sincere. You're here to help the user think clearly and move forward, not to overwhelm or overperform.`

export const MESSAGE_MAX_LENGTH = 4000

export const ZOLA_AGENTS_SLUGS = [
  "tweet-vibe-checker",
  "clear-ux-copywriter",
  "0-to-1-advisor",
  "pull-check",
  "blog-draft",
  "inbox-fix",
  "name-vibe-check",
  "tiny-essay",
  "solene",
  "eloi",
]

export const ZOLA_SPECIAL_AGENTS_SLUGS = [
  "zola-research",
  "competitor-teardown",
  "positioning-snapshot",
]
export const ZOLA_AGENTS_TOOLING_IDS = [
  "321c68a2-6c1a-4bd4-948c-9d20e4aeb10c", // research
  "ecd82d26-7c82-4661-83f6-8f362b2687da", // competitor teardown
  "b2a4ddaa-8e99-49dd-8156-71d95ccfd717", // positioning snapshot
]

export const ZOLA_COMING_SOON_AGENTS = [
  {
    name: "GitHub Agent",
    slug: "github-agent",
    description:
      "Summarizes PRs, reviews diffs, and writes release notes using the GitHub API.",
    avatar_url: null,
    system_prompt: "",
    model_preference: "gpt-4o-mini",
    is_public: false,
    remixable: false,
    tools_enabled: true,
    example_inputs: [
      "Summarize this PR: [paste PR link]",
      "Generate release notes from these commits",
    ],
    tags: ["dev", "github", "tools"],
    category: "dev",
    id: "github-agent",
    creator_id: null,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    name: "Linear Agent",
    slug: "linear-agent",
    description: "Create, search, and prioritize issues using the Linear API.",
    system_prompt: "",
    model_preference: "gpt-4o-mini",
    avatar_url: null,
    is_public: false,
    remixable: false,
    tools_enabled: true,
    example_inputs: [
      "Create a bug in project X: login form fails on mobile",
      "List urgent issues in roadmap",
    ],
    tags: ["product", "tools", "linear"],
    category: "b2b",
    id: "linear-agent",
    creator_id: null,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    name: "Changelog Writer",
    slug: "changelog-writer",
    description:
      "Turns PRs or issue lists into structured changelogs and release notes.",
    system_prompt: "",
    model_preference: "gpt-4o-mini",
    avatar_url: null,
    is_public: false,
    remixable: false,
    tools_enabled: true,
    example_inputs: [
      "Generate a changelog from these PR titles",
      "Write release notes for version 2.3",
    ],
    tags: ["dev", "pm", "changelog"],
    category: "dev",
    id: "changelog-writer",
    creator_id: null,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    name: "Growth Analyst",
    slug: "growth-analyst",
    description:
      "Answers product and growth questions by analyzing metrics and user behavior.",
    system_prompt: "",
    model_preference: "gpt-4o-mini",
    avatar_url: null,
    is_public: false,
    remixable: false,
    tools_enabled: true,
    example_inputs: [
      "What changed after the onboarding redesign?",
      "How are weekly active users trending?",
    ],
    tags: ["analytics", "product", "b2b"],
    category: "analytics",
    id: "growth-analyst",
    creator_id: null,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
]
