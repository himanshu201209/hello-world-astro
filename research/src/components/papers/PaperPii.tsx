import ResearchArticle from "../ResearchArticle";

type PaperPiiProps = {
  homeHref: string;
};

export default function PaperPii({ homeHref }: PaperPiiProps) {
  return (
    <ResearchArticle
      backHref={homeHref}
      date="September 24, 2026"
      title="PII Transformation for Enterprise Datasets"
      authors={[
        { name: "Aruj Mahajan", role: "AI Lead Engineer, micro1" },
        { name: "Andrew Maas", role: "VP of AI at micro1" },
        { name: "Yongchao Zhou", role: "Director of Research, micro1" },
        { name: "Rajeev Joshi", role: "Member of Technical Staff, micro1" },
      ]}
      image="https://cdn.prod.website-files.com/6a04bd23eb9d40f76dac1242/6ab54b8f411538e83b82764d_Post%20(3)%20(1).jpg"
      imageAlt="PII Transformation for Enterprise Datasets"
      lede="Enterprises have data that captures decision making, communications, tools, and the execution of projects and processes. This data is valuable for training AI systems because it contains long-running workflows and relationships that are hard to find in public datasets. The challenge is transforming real identities into consistent synthetic ones without destroying that value."
      sections={[
        {
          heading: "Abstract",
          paragraphs: [
            "We introduce flow-transform 1.0, a framework for transforming real identities into consistent synthetic identities while preserving the information value of the dataset. The problem is broader than detection or masking: the final corpus must remain private, complete, structurally intact, coherent, and useful.",
            "This problem deserves benchmarks that measure the transformed dataset itself, not only whether a detector found individual PII spans. We therefore introduce an enterprise de-identification bench with referential integrity checks across records.",
          ],
        },
        {
          heading: "Full-dataset PII transformation",
          paragraphs: [
            "Traditional PII systems mainly optimize removal or masking. Our task is broader: protect identities while preserving the source corpus, its relationships, and its usefulness for downstream training and evaluation.",
            "The transformation should keep non-sensitive information unchanged, replace sensitive spans with type-appropriate synthetic values, and keep the same real identity mapped to the same synthetic identity wherever it appears.",
          ],
        },
        {
          heading: "Why evaluation has to look at the whole dataset",
          paragraphs: [
            "A detector score does not tell you whether aliases stayed linked, whether decoys were over-transformed, or whether entity relationships survived. Measuring the final dataset is what makes the transformation task operational for enterprise AI.",
          ],
        },
      ]}
    />
  );
}
