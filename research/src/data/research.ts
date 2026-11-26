import { asset } from "../lib/asset";
import { withBase } from "../lib/paths";

export type PaperCategory =
  | "Reasoning"
  | "Robotics"
  | "Multi-model"
  | "Post-training"
  | "Agents"
  | "Enterprise"
  | "Safety";

export type ResearchPaper = {
  id: string;
  title: string;
  date: string;
  category: PaperCategory;
  href: string;
};

export type FlowModel = {
  id: string;
  title: string;
  description: string;
  tag: "flow qc" | "flow gen";
  tagTone: "qc" | "gen";
  image: string;
  /** Figma thumbnail crop preset for absolute image positioning. */
  thumbCrop: "contamination" | "rubric-draft" | "cover";
  input: string;
  method: string;
  output: string;
  details: string;
};

export type ResearchBlog = {
  id: string;
  title: string;
  date: string;
  image: string;
  href: string;
};

export const PAPER_FILTERS = [
  "ALL",
  "Reasoning",
  "Robotics",
  "Multi-model",
  "Post-training",
  "Agents",
  "Enterprise",
] as const;

export const PAPERS_PAGE_SIZE = 4;

export const researchPapers: ResearchPaper[] = [
  {
    id: "agents-getting-better",
    title: "Can a company tell whether its AI agent is getting better?",
    date: "October 2026",
    category: "Reasoning",
    href: withBase("/are-ai-agents-getting-better"),
  },
  {
    id: "safety-physical",
    title: "AI Models Now Introduce Safety Risks in the Physical World",
    date: "October 2026",
    category: "Robotics",
    href: "https://www.micro1.ai/research/ai-models-now-introduce-safety-risks-in-the-physical-world",
  },
  {
    id: "safe-and-helpful",
    title:
      "Safety Without Over-Refusal: Toward “Safe and Helpful” Model Behavior Through Competence Under Constraint",
    date: "October 2026",
    category: "Safety",
    href: "https://www.micro1.ai/research/safe-and-helpful-model-behavior-through-competence-under-constraint",
  },
  {
    id: "multi-modal-assessments",
    title: "Uncovering Candidate Potential with Multi-Modal AI Assessments",
    date: "October 2026",
    category: "Multi-model",
    href: "https://www.micro1.ai/research/uncovering-candidate-potential-with-multi-modal-ai-assessments",
  },
  {
    id: "pii-transformation",
    title: "PII Transformation for Enterprise Datasets",
    date: "September 2026",
    category: "Enterprise",
    href: withBase("/pii-transformation-for-enterprise-datasets"),
  },
  {
    id: "robotics-diversification",
    title: "Robotics is entering a phase of rapid diversification",
    date: "July 2026",
    category: "Robotics",
    href: "https://www.micro1.ai/research/robotics-is-entering-a-phase-of-rapid-diversification",
  },
  {
    id: "benchmark-ceiling",
    title:
      "The Benchmark Ceiling: Human Judgment, Evaluation Scarcity, and the Political Economy of AI Capability Measurement",
    date: "July 2026",
    category: "Post-training",
    href: "https://www.micro1.ai/research/the-benchmark-ceiling",
  },
  {
    id: "no-last-mile",
    title: "No Last Mile: A Theory of the Human Data Market",
    date: "March 2026",
    category: "Agents",
    href: "https://www.micro1.ai/research/no-last-mile",
  },
];

export const flowModels: FlowModel[] = [
  {
    id: "contamination",
    title: "Contamination",
    description: "Catches benchmark overlap before data ships",
    tag: "flow qc",
    tagTone: "qc",
    image: asset("/research/flow-contamination.png"),
    thumbCrop: "contamination",
    input: "Prompt, answer, images",
    method: "Retrieval + LLM judge",
    output: "Verdict + matched item",
    details:
      "Fingerprints every modality a task can carry and compares it against public benchmarks and other Flow tasks so leaked or duplicated items never reach training.",
  },
  {
    id: "rubric-draft",
    title: "Rubric draft",
    description: "Drafts weighted rubrics from a task and its golden answer",
    tag: "flow gen",
    tagTone: "gen",
    image: asset("/research/flow-rubric-draft.png"),
    thumbCrop: "rubric-draft",
    input: "Task + golden answer",
    method: "LLM draft + checks",
    output: "Weighted pass/fail criteria",
    details:
      "Builds a first-pass weighted rubric from the task prompt and golden answer, then runs structural checks so graders start from a coherent scoring shape.",
  },
  {
    id: "rubric-quality",
    title: "Rubric quality",
    description: "Flags vague, compound or unverifiable criteria",
    tag: "flow qc",
    tagTone: "qc",
    image: asset("/research/flow-rubric-quality.png"),
    thumbCrop: "cover",
    input: "Task + rubric",
    method: "LLM review",
    output: "Per-criterion findings",
    details:
      "Reviews each rubric item for vagueness, compound scoring, and unverifiable claims, returning per-criterion findings with evidence and proposed fixes.",
  },
  {
    id: "prompt-quality",
    title: "Prompt quality",
    description: "Catches benchmark overlap before data ships",
    tag: "flow qc",
    tagTone: "qc",
    image: asset("/research/flow-prompt-quality.png"),
    thumbCrop: "cover",
    input: "Task prompt",
    method: "LLM review",
    output: "Findings + verdict",
    details:
      "Checks whether the prompt is complete, unambiguous, and solvable with the attached materials before a model ever attempts the task.",
  },
];

export const researchBlogs: ResearchBlog[] = [
  {
    id: "relevant-authoritative",
    title: "Relevant is not authoritative: the retrieval gap in financial AI",
    date: "October 2026",
    image: asset("/research/blog-relevant.png"),
    href: "https://www.micro1.ai/blog/relevant-and-authoritative",
  },
  {
    id: "flow-qc",
    title: "Teaching the reviewer: Introducing flow QC",
    date: "October 2026",
    image: asset("/research/blog-flow-qc.png"),
    href: "https://www.micro1.ai/blog/flow-qc",
  },
  {
    id: "transition-problem",
    title:
      "The transition problem: collaboration, diffusion, and what AI is doing to our metrics",
    date: "October 2026",
    image: asset("/research/blog-transition.png"),
    href: "https://www.micro1.ai/blog/the-transition-problem",
  },
  {
    id: "transition-problem-2",
    title:
      "The transition problem: collaboration, diffusion, and what AI is doing to our metrics",
    date: "October 2026",
    image: asset("/research/blog-transition.png"),
    href: "https://www.micro1.ai/blog/the-transition-problem",
  },
  {
    id: "relevant-authoritative-2",
    title: "Relevant is not authoritative: the retrieval gap in financial AI",
    date: "October 2026",
    image: asset("/research/blog-relevant.png"),
    href: "https://www.micro1.ai/blog/relevant-and-authoritative",
  },
  {
    id: "flow-qc-2",
    title: "Teaching the reviewer: Introducing flow QC",
    date: "October 2026",
    image: asset("/research/blog-flow-qc.png"),
    href: "https://www.micro1.ai/blog/flow-qc",
  },
];
