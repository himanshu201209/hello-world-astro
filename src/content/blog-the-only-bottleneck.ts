export const blogTheOnlyBottleneck = {
  slug: "blog-the-only-bottleneck-should-be-the-model",
  date: "October 28, 2026",
  title: "The only bottleneck should be the model",
  subtitle:
    "How micro1 reduces the delays and coordination around model attempts while preserving trustworthy evaluation results",
  hero: {
    src: "https://cdn.prod.website-files.com/6a04bd23eb9d40f76dac1242/6ae3b265ce5e2b28e8369a6c_image%20(7)%20(1).jpg",
    alt: "The only bottleneck should be the model",
  },
  authors: [
    {
      name: "Rumi Elias Calles",
      role: "Director of Research Eng, micro1",
      photo:
        "https://cdn.prod.website-files.com/6a04bd23eb9d40f76dac1242/6ab2a3be701854046b364b8a_frame_2147226919%20(3).webp",
    },
    {
      name: "Jacky Guan",
      role: "Member of Technical Staff, micro1",
      photo:
        "https://cdn.prod.website-files.com/6a04bd23eb9d40f76dac1242/6ae2f4f9211d3310825741a2_6ae2f48c86f9639b27c4ef75_jacky-guan-headshot.jpeg",
    },
    {
      name: "Nick Waytowich",
      role: "Member of Technical Staff, micro1",
      photo:
        "https://cdn.prod.website-files.com/6a04bd23eb9d40f76dac1242/6a6f3580c809e1923a9f12e8_frame_2147226920.webp",
    },
  ],
  related: [
    {
      href: "https://micro1-stage.webflow.io/blog/micro1-x-datasnipper-testing-ai-agents-without-client-data",
      date: "October 2026",
      title: "micro1 x DataSnipper: Testing AI Agents without Client Data",
      image:
        "https://cdn.prod.website-files.com/6a04bd23eb9d40f76dac1242/6aeb4a33e1d59473ba36ccbe_icro1%20x%20DataSnipper.png",
    },
    {
      href: "https://micro1-stage.webflow.io/blog/where-personal-ai-agents-struggle",
      date: "October 2026",
      title: "Permission Isn’t Enough: Where Personal AI Agents Struggle With Judgment",
      image:
        "https://cdn.prod.website-files.com/6a04bd23eb9d40f76dac1242/6ae3a31b1b1d86898c71c182_Thumbnail%20(5).png",
    },
    {
      href: "https://micro1-stage.webflow.io/blog/retrieval-gap-in-financial-ai",
      date: "October 2026",
      title: "Relevant is not authoritative: the retrieval gap in financial AI",
      image:
        "https://cdn.prod.website-files.com/6a04bd23eb9d40f76dac1242/6ae09dd17c50b0795c5e2d43_Thumbnail%20(10)%20(1).jpg",
    },
  ],
  bodyHtml: `
<h2>TL;DR</h2>
<p>A rollout is one model attempting one task, usually as an agent in its own sandbox, followed by grading. Evaluations and reinforcement learning both depend on these attempts, so we reduced the overhead around them to spend more rollout time on the task itself.</p>
<ul>
<li>Monthly token volume is up 12 times since May, and we run three times as many environments.</li>
<li>Workers start in seconds, 14 times faster than in the spring.</li>
<li>Modal and Daytona use the same contract, so moving an environment between them takes one configuration line.</li>
<li>Once you set a target, the service manages evaluations and benchmarks through completion and reports any gaps with their reasons.</li>
<li>When an agent dies in its sandbox, the run is recorded as a failure and retried instead of being graded as a zero.</li>
<li>A newly released model runs on our benchmarks on release day, with the harness set to the model's own output and reasoning limits.</li>
</ul>
<!--CHART:1-->
<h2>Introduction</h2>
<p>Every model attempt needs preparation, execution, and grading, and delays or repeated work around those stages add up at scale.</p>
<p>Evaluations and reinforcement learning repeat these attempts across tasks and models. A lab can request five attempts per task, while a difficulty filter needs ten attempts from each of four models. Each attempt can take hours, and training can require the same work tomorrow.</p>
<p>micro1 builds each environment with a task, files, an image, a verifier, and often a rubric. Our rollout service runs dozens of environments across design, research, legal analysis, and software development.</p>
<p>We reduced the overhead around each attempt so that the service can handle more work without constant supervision.</p>
<h3>One system feeds every environment at once, around the clock.</h3>
<!--CHART:2-->
<p>In the spring, a large evaluation needed a laptop script and a person to watch it. Today, one request starts the evaluation and the service tracks it through completion.</p>
<h2>01. Rollout as a unit</h2>
<p>Each rollout uses a frozen task snapshot, so later edits cannot change an active attempt. Once capacity is available, the service packages the task and launches a worker to create the sandbox and install the agent.</p>
<p>Model calls pass through a broker outside the sandbox. After execution, the verifier runs tests and a judge scores tasks that use a rubric. The worker removes the sandbox, uploads the record of agent actions, and sends one result report.</p>
<p>Workers report through the service without database access, and the service saves each report as one transaction to prevent partial writes from leaving incomplete results.</p>
<h3>The agent accounts for 88% of elapsed time in a median rollout.</h3>
<!--CHART:3-->
<h2>02. Minimum viable product</h2>
<p>The first version, on April 29, checked the database for tasks and started the trial runner. May load tests ran 20 and 30 rollouts concurrently across two sandbox providers. By July, volume reached dozens of times the May level, exposing limits in launch and result tracking.</p>
<h3>Over five months, monthly token volume grew 12 times as we expanded to three times as many environments and four sandbox backends.</h3>
<!--CHART:4-->
<p>Each script tracked its own results, and two once planned more than twice the requested runs. We moved counting, recovery, and task preparation into the service to remove that coordination.</p>
<!--CHART:5-->
<h2>03. Orthogonal failure modes</h2>
<p>Scheduling, execution, and storage have separate responsibilities so that each can recover from a failure. The scheduler reads rollout state from the database, while queue messages trigger work, so losing a message cannot erase that state.</p>
<p>Each rollout uses a fresh worker and sandbox, while durable storage retains results after both stop.</p>
<p>The service accepts a state change only when the stored state matches expectations and uses attempt identifiers to reject older reports. It records a claim before launch so that a crash cannot start a second worker.</p>
<h3>When a component fails, the run recovers or stops with a recorded reason, without starting duplicate workers.</h3>
<!--CHART:6-->
<p>The agent timeout expires before the worker timeout, with a later pass to clean up remaining sandboxes. Separate guards stop silent model streams and agents that loop or stall. Progress depends on completed steps, since CPU activity alone proves little.</p>
<p>The service records why it stopped an attempt and keeps that error separate from benchmark scores.</p>
<h2>04. Maximizing velocity</h2>
<p>To reduce the wait before execution, we group scheduler wake-ups from events that free capacity into time slots, so a burst triggers one pass. Each pass admits work at the cloud's container start rate, avoiding another queue at the provider.</p>
<p>Triggering the first scheduling pass sooner cut the median wait from queued to dispatched by more than two thirds.</p>
<h3>The scheduler groups dozens of wake-ups into one pass.</h3>
<!--CHART:7-->
<h2>05. Cold starts and fast optimizations</h2>
<p>The worker host and sandbox provider have separate configuration, so either can change without changing the task, while both remain fixed for existing rollouts. One configuration line moves an environment, and one switch redirects new work during an outage.</p>
<p>In October, we moved workers to a host that keeps single-use containers warm without preemption. The service uses the alternate host only when it can prove that launch failed before a worker existed; if the outcome is unclear, it holds the rollout to prevent duplicate work.</p>
<h3>Workers now start in about twelve seconds, down from about three minutes.</h3>
<!--CHART:8-->
<p>Agents spend much of a rollout waiting for model responses, with brief compute bursts for builds, tests, or file conversions. We reserve a small CPU baseline and let each sandbox reach its declared task limit, avoiding peak reservations throughout the rollout.</p>
<h3>Because agents spend much of a rollout waiting, reserving a small CPU baseline and allowing bursts lowers sandbox costs.</h3>
<!--CHART:9-->
<p>Reducing sandbox costs left tokens as the main rollout expense.</p>
<h2>06. Concurrency and caching</h2>
<p>Concurrent requests also repeated task preparation: eight requests for an uncached task could trigger eight identical builds. This happened in two places, including repeated extraction of packages of hundreds of megabytes.</p>
<p>Requests for the same task now share one build and reuse it until the task content changes. Content-based keys identify reusable results, while a database lock prevents duplicate scans. Prebuilt images use hashes of their build inputs as tags, so the image registry also serves as a cache.</p>
<h3>Eight readers share one build, and changing one byte triggers exactly one new build.</h3>
<!--CHART:10-->
<h2>07. Durable jobs</h2>
<p>Faster attempts still left people responsible for tracking evaluations, so the service now manages that work against a coverage target.</p>
<p>One request specifies tasks, models, clean results per task-model pair, and a budget. Each pair forms a cell in the coverage matrix, starting with one rollout.</p>
<h3>From one request, the service manages the work needed to reach the coverage target and reports anything it could not measure.</h3>
<!--CHART:11-->
<p>The controller recalculates coverage from the database on each pass, avoiding separate counters that can drift. A clean result must succeed, receive a score, and have no failure class.</p>
<p>The controller chooses how to recover based on the error: rate limits and lost sandboxes slow retries without adding strikes, while agent deaths add strikes. Repeated strikes quarantine the cell, and broken tasks cause immediate quarantine.</p>
<p>The service excludes quarantined cells from results and reports each one with its reason. Unknown errors add strikes so that quarantine exposes the problem before repeated retries spend more money on it.</p>
<h3>The controller finishes the job by reaching the coverage target for each cell or quarantining it with a reason.</h3>
<!--CHART:12-->
<h2>08. Silent failures</h2>
<p>A clean result depends on the service knowing when a run has failed, and the hardest failures to see are the ones that end with a score.</p>
<p>An agent can work in its sandbox for hours. If its connection drops, a time limit expires, or the sandbox kills its process, the trial can end without raising an error. No answer file exists, but the verifier still runs, the judge scores the missing answer zero, and the worker reports a successful run.</p>
<p>That record looks exactly like a wrong answer, so the benchmark counts a dead agent against the model. In one maximum-effort campaign, stalled connections left 75 of 89 zero scores on one benchmark with nothing on the record to explain them. Once the cause was fixed, the same model's maximum-effort score on another benchmark rose from 0.18 to 0.43, level with its default setting.</p>
<p>The worker now checks how the agent ended before it accepts a grade. A nonzero exit, a harness session that died, a stall, a timeout without progress, or a lost answer file makes the attempt a failure with its reason and no score, and the controller retries it. A run that earned any credit keeps its score.</p>
<h3>A dead agent and a wrong answer used to leave the same record.</h3>
<!--CHART:13-->
<p>A September audit of 2,085 benchmark runs across twelve model and benchmark pairs found no false zeros left in the scores.</p>
<p>Other agents stall without dying. Our earlier guards watched for activity, such as file changes, output, and bytes on the wire. An agent stuck retrying a failing request refreshed all of them about every 40 seconds, so it kept running until its two-hour limit and then scored zero.</p>
<p>A watchdog inside the sandbox now measures progress instead: a completed model response or a step the harness saves. An open stream, a running tool, or CPU use shows that the agent is alive but never counts as progress. The watchdog stops an agent that keeps failing for 15 minutes without completing a step, or one that shows neither progress nor a sign of life for 40 minutes. It saves the transcript and records the run as stalled, and the controller retries it up to twice.</p>
<h3>The watchdog stops an agent that has stopped making progress, even while it still looks busy.</h3>
<!--CHART:14-->
<p>In its canary, all 14 maximum-effort runs finished without a false stop, and the longest healthy gap between progress signals was six minutes. One task that had never finished at that effort completed for the first time.</p>
<p>The watchdog also streams the agent's transcript, task list, and vitals out of the sandbox while the run is in progress, so a stall can be diagnosed before the run ends.</p>
<h2>09. Benchmark campaigns</h2>
<p>Benchmark campaigns freeze the task set, task versions, and judge before execution. The service publishes scores with bootstrap intervals only after every cell has a measurement or an explanation.</p>
<p>The results ledger retains earlier entries, with corrections in new rows that supersede the originals.</p>
<p>For a new model, one command starts a smoke test and then the full benchmark matrix. An agent checks for infrastructure errors recorded as zero scores and unintended task-version changes, then drafts the results for review.</p>
<h3>The ledger stays locked until the matrix is complete.</h3>
<!--CHART:15-->
<h2>10. Continuous optimization</h2>
<p>We have reduced much of the overhead in admission, worker startup, and sandbox setup. As workloads grow, we continue to optimize that path and coordinate each job with the capacity available to it.</p>
<p>When we launched a large batch of maximum-effort runs of a newly released frontier model, our service admitted and started every run within minutes. Requests above the model's rate limit had to wait, showing why fast starts also need pacing.</p>
<p>The controller caps each job and slows requests as rate-limit refusals increase. Capacity planning is now an early part of our release-day discussions with labs.</p>
<h3>Faster starts need pacing so each job makes use of available capacity without building up waiting requests.</h3>
<!--CHART:16-->
<p>Each environment bills to its own provider account. Agents use short-lived, scoped tokens, while an external broker sends requests under the environment's provider identity. Provider keys never enter the sandbox, and no shared fallback key obscures attribution.</p>
<h2>11. Release-day harness</h2>
<p>Release day also tests the agent harness. We run every model through the same open-source harness, OpenCode, so benchmark scores compare models rather than agent frameworks. Each harness build ships with a catalog of the models it knows, and a model released this morning is not in it.</p>
<p>For a model it does not know, the harness falls back to defaults. It capped each response at 32,000 output tokens, so a model reasoning at maximum effort could reach the cap mid-thought and end its session without writing an answer. It could also drop a reasoning setting it did not recognize, so a run requested at maximum effort ran at a lower one. Neither raised an error, and both looked like a weaker model.</p>
<p>Rerunning the 38 of 150 runs that one frontier model had lost to the cap raised its benchmark score from 0.33 to 0.48.</p>
<p>Our first fixes were per model: proxies that rewrote the cap and lists of models to lift, which took 30 changes between July and October and still drifted. An adapter in the service now applies one rule to every run. Each run receives the model's documented output maximum, or 128,000 tokens when the provider has not published one, and the sandbox refuses to start the harness without it. Reasoning settings use the key each provider's SDK forwards, and a new model's limits can travel with the launch request, frozen into each run, without waiting for a deploy.</p>
<h3>An adapter gives the harness a new model's real limits before the first run.</h3>
<!--CHART:17-->
<p>Before the full launch, a two-task smoke run reads the request back from the wire: the effort that reached the provider, the declared output limit, the presence of reasoning, and the absence of a length stop. The last three models we benchmarked at release had results within about a day, and each still needed a same-day code change for its limits. The next one will not.</p>
<h2>12. Enhanced logging</h2>
<p>We record stage timings for each attempt to distinguish service delays from agent execution and provider limits, rejecting older evidence. Unknown durations remain null so that missing data cannot lower a reported median.</p>
<p>Missing cost receipts likewise leave costs unknown rather than zero.</p>
<p>Our telemetry platform shows live rollout stages and groups durations by environment and errors by cause, giving a model the evidence to draft the initial triage.</p>
<!--CHART:18-->
<h2>13. Accelerating iteration</h2>
<p>Next, agents will come installed in task images, and prebuilt images pinned by digest will serve multiple sandbox providers. Admission will respond directly to provider pressure, so the controller can determine how much work each model can accept.</p>
<p>We’ll share more soon as we continue to optimize, with a larger improvement already on the roadmap.</p>
<h2>References</h2>
<p><a href="https://github.com/laude-institute/harbor" target="_blank" rel="noopener noreferrer">Harbor</a> · the task format and trial runner our environments build on.</p>
<p><a href="https://modal.com/docs/guide/sandbox" target="_blank" rel="noopener noreferrer">Modal Sandboxes</a> · sandbox and function documentation.</p>
<p><a href="https://www.daytona.io/docs" target="_blank" rel="noopener noreferrer">Daytona</a> · sandbox documentation.</p>
<p><a href="https://opencode.ai/docs" target="_blank" rel="noopener noreferrer">OpenCode</a> · the open-source agent harness our benchmark runs use.</p>
`,
} as const;
