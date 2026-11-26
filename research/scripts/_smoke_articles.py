import urllib.request

base = "http://127.0.0.1:4321/CLOUD_MOUNT_PATH"
slugs = [
    "quantifying-the-benefits-of-ai-assisted-recruitment",
    "evaluating-speech-to-text-vs-llm-vs-text-to-speech-combinations-for-ai-interview-systems",
    "no-last-mile",
    "safe-and-helpful-model-behavior-through-competence-under-constraint",
    "the-next-productivity-engine-humanoid-robots-and-beyond",
    "uncovering-candidate-potential-with-multi-modal-ai-assessments",
    "zara-an-llm-based-candidate-interview-feedback-system",
    "the-benchmark-ceiling",
    "robotics-is-entering-a-phase-of-rapid-diversification",
    "ai-models-now-introduce-safety-risks-in-the-physical-world",
    "pii-transformation-for-enterprise-datasets",
    "are-ai-agents-getting-better",
    "post-training-a-748b-model-on-stem-reasoning",
]

print("HOME", urllib.request.urlopen(f"{base}/").status)
for slug in slugs:
    url = f"{base}/research/{slug}/"
    try:
        with urllib.request.urlopen(url) as res:
            body = res.read()
            print(f"{res.status} {len(body):7d} {slug}")
    except Exception as exc:
        print(f"FAIL {slug}: {exc}")
