import {
  Boxes,
  Bot,
  Cloud,
  Code2,
  FileCheck2,
  KeyRound,
  Network,
  PackageCheck,
  ScanSearch,
  ShieldAlert,
  type LucideIcon,
} from "lucide-react";

export type Module = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  features: string[];
};

export const modules: Module[] = [
  {
    slug: "aisentinel",
    name: "AISentinel",
    tagline: "Runtime guardrails for LLMs and agents",
    description:
      "Inspect every prompt and response flowing through your AI stack. Detect prompt injection, leaked secrets and personal data, then monitor, redact or block in real time.",
    icon: Bot,
    features: [
      "Prompt-injection and jailbreak detection",
      "PII and secret redaction on input and output",
      "Policy modes: monitor, redact or block",
      "Agent-to-agent and tool-call inspection",
    ],
  },
  {
    slug: "cloudposture",
    name: "CloudPosture",
    tagline: "AI service posture across every cloud",
    description:
      "Continuously assess AI workloads in AWS, Azure and GCP for misconfigurations, open endpoints and over-privileged identities.",
    icon: Cloud,
    features: [
      "Agentless, read-only cloud connectors",
      "Coverage for managed model and ML services",
      "Prioritised findings with fix guidance",
      "Drift detection between scans",
    ],
  },
  {
    slug: "assetgraph",
    name: "AssetGraph",
    tagline: "A live inventory of every AI asset",
    description:
      "Discover models, datasets, vector stores, notebooks and agents across your estate and map how they connect.",
    icon: Network,
    features: [
      "Automatic AI asset discovery",
      "Relationship graph across clouds and SaaS",
      "Shadow-AI detection",
      "Ownership and data-lineage tagging",
    ],
  },
  {
    slug: "accessgraph",
    name: "AccessGraph",
    tagline: "Who and what can reach your models",
    description:
      "Visualise identities, roles and API keys with access to AI resources and spot toxic permission combinations.",
    icon: KeyRound,
    features: [
      "Effective-permission analysis",
      "Stale and unused key detection",
      "Least-privilege recommendations",
      "Human and machine identity coverage",
    ],
  },
  {
    slug: "codeshield",
    name: "CodeShield",
    tagline: "Secure AI code before it ships",
    description:
      "Scan repositories for unsafe model usage, hard-coded keys and risky prompt construction directly in pull requests.",
    icon: Code2,
    features: [
      "Pull-request annotations",
      "Hard-coded secret detection",
      "Unsafe deserialisation checks for model files",
      "Works with GitHub, GitLab and Bitbucket",
    ],
  },
  {
    slug: "kubeposture",
    name: "KubePosture",
    tagline: "Hardening for AI workloads on Kubernetes",
    description:
      "Benchmark clusters running inference and training jobs, including GPU node configuration and network exposure.",
    icon: Boxes,
    features: [
      "Workload and namespace risk scoring",
      "GPU node posture checks",
      "Network-policy gap analysis",
      "Admission-control recommendations",
    ],
  },
  {
    slug: "saasposture",
    name: "SaaSPosture",
    tagline: "Governance for AI inside SaaS tools",
    description:
      "Review organisation-level settings for AI assistants and copilots across your SaaS tools.",
    icon: ScanSearch,
    features: [
      "Org-level AI settings review",
      "Data-sharing and retention checks",
      "Seat and usage visibility",
      "Policy baselines per tool",
    ],
  },
  {
    slug: "vulsense",
    name: "VulSense",
    tagline: "Adversarial testing for AI applications",
    description:
      "Run an automated red-team against your models and agents using a growing bank of attack strategies.",
    icon: ShieldAlert,
    features: [
      "Automated adversarial campaigns",
      "Bypassed / resisted / needs-review verdicts",
      "Refusal-quality scoring",
      "Regression testing between releases",
    ],
  },
  {
    slug: "supplytrust",
    name: "SupplyTrust",
    tagline: "Trust in models and packages you import",
    description:
      "Verify third-party models, datasets and libraries before they enter your environment.",
    icon: PackageCheck,
    features: [
      "Model provenance checks",
      "Dependency risk scoring",
      "Licence and usage-terms flags",
      "Software and AI bill of materials export",
    ],
  },
  {
    slug: "complysense",
    name: "ComplySense",
    tagline: "Continuous AI compliance evidence",
    description:
      "Map findings to major AI frameworks automatically and export audit-ready evidence on demand.",
    icon: FileCheck2,
    features: [
      "Framework control mapping",
      "Pass / fail / manual control states",
      "One-click evidence packs",
      "Trend reporting for leadership",
    ],
  },
];

export const stats = [
  { value: "70%", label: "of organisations run AI workloads with no dedicated security owner" },
  { value: "3×", label: "growth in AI services deployed year on year" },
  { value: "48h", label: "average time before a leaked API key is abused" },
];

export const differentiators = [
  {
    title: "Agentless by default",
    body: "Read-only connectors mean you see value in minutes without deploying anything into production.",
  },
  {
    title: "AI-native, not bolted on",
    body: "Every check is designed for models, prompts and agents rather than retrofitted from legacy tooling.",
  },
  {
    title: "One graph, every signal",
    body: "Posture, runtime and compliance findings share a single data model so context is never lost.",
  },
  {
    title: "Built for auditors too",
    body: "Evidence is captured continuously, so audits become an export rather than a project.",
  },
];

export const industries = [
  { name: "Financial services", body: "Protect customer data in AI-driven fraud, credit and support workflows." },
  { name: "Healthcare", body: "Keep patient information out of prompts and logs." },
  { name: "Technology & SaaS", body: "Ship AI features quickly without opening new attack paths." },
  { name: "Public sector", body: "Meet strict governance requirements for citizen-facing AI." },
  { name: "Retail & e-commerce", body: "Secure recommendation engines and shopping assistants." },
  { name: "Manufacturing", body: "Safeguard industrial AI and connected operations." },
];

export const steps = [
  { title: "Connect", body: "Link cloud accounts, SaaS organisations, repositories and AI services with read-only access." },
  { title: "Discover", body: "Build a live inventory and relationship graph of every AI asset." },
  { title: "Assess", body: "Run posture checks and adversarial tests, then prioritise what matters." },
  { title: "Protect", body: "Enforce runtime policies and track compliance continuously." },
];

export const integrations = [
  "AWS", "Azure", "GCP", "Kubernetes", "OpenAI", "Anthropic", "Gemini",
  "GitHub Copilot", "LangChain", "CrewAI", "Splunk HEC", "Wazuh", "IBM QRadar", "MCP",
];

export const frameworks = [
  { name: "EU AI Act", detail: "Risk classification and transparency obligations" },
  { name: "NIST AI RMF 1.0", detail: "Govern, map, measure and manage" },
  { name: "ISO/IEC 42001", detail: "AI management system controls" },
  { name: "OWASP LLM Top 10", detail: "Most critical LLM application risks" },
  { name: "MITRE ATLAS", detail: "Adversary tactics for AI systems" },
];

export const plans = [
  {
    name: "Startup",
    price: "$0",
    period: "for 30 days",
    description: "For small teams taking their first AI product to market.",
    features: ["Up to 2 cloud accounts", "AssetGraph & CloudPosture", "Community support"],
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$1,499",
    period: "per month",
    description: "For scaling teams that need runtime protection and compliance.",
    features: ["Up to 20 cloud accounts", "All posture modules", "AISentinel runtime guardrails", "Email & chat support"],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "annual",
    description: "For organisations with complex, regulated AI estates.",
    features: ["Unlimited accounts", "Full platform incl. VulSense", "SSO, SIEM export & private deployment", "Dedicated success manager"],
    highlighted: false,
  },
];

export const navLinks = [
  { href: "/platform", label: "Platform" },
  { href: "/#industries", label: "Use cases" },
  { href: "/#integrations", label: "Integrations" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
];
