import ResearchArticle from "../ResearchArticle";

type PaperAiAgentsProps = {
  homeHref: string;
};

export default function PaperAiAgents({ homeHref }: PaperAiAgentsProps) {
  return (
    <ResearchArticle
      backHref={homeHref}
      date="October 14, 2026"
      title="Can a company tell whether its AI agent is getting better?"
      authors={[
        { name: "Liu Zhang", role: "Harvard University" },
        { name: "Mark Esposito", role: "Chief Economist at micro1" },
      ]}
      image="https://cdn.prod.website-files.com/6a04bd23eb9d40f76dac1242/6acf94df813272270f788d25_thumbnail%20(6).jpg"
      imageAlt="Five months of human evaluation of a deployed AI agent"
      lede="Companies that deploy AI agents evaluate them with human ratings. But a rating contains the rater, the agent changes between releases, and nobody knows how long an evaluation stays informative. We followed Zara, micro1's AI interviewing agent, for five months of production evaluations to ask whether a firm can tell if its agent is actually improving."
      sections={[
        {
          heading: "How an interview becomes a number",
          paragraphs: [
            "A candidate joins a call with Zara; the session is recorded. A trainer watches the recording and works through nine short checklists covering conversation structure, interruption handling, latency, speech pacing, and related technical families.",
            "Those nine family scores become one stability index on a standard-deviation scale, so movements can be compared over time. Critical failures are also flagged separately from the continuous index.",
          ],
        },
        {
          heading: "A new reviewer looked like a worse agent",
          paragraphs: [
            "The raw average can be trusted only if the people doing the scoring stayed the same. They did not. When a second reviewer joined in May, the same interviews were scored about 0.79 standard deviations apart.",
            "After putting both reviewers on one scale, the adjusted path shows the agent kept improving. The rule is simple: overlap your raters, and never read a raw average across a changing roster.",
          ],
        },
        {
          heading: "What this suggests for evaluation programs",
          paragraphs: [
            "Report families, not only an index. Measure your own drift rate between releases. And decide how the program's effect will be identified before it starts—afterwards there is no comparison arm.",
          ],
        },
      ]}
    />
  );
}
