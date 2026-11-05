import { useEffect, useRef } from "react";

type BlogChartMountProps = {
  html: string;
};

function findHost(script: HTMLScriptElement): HTMLElement | null {
  const prev = script.previousElementSibling as HTMLElement | null;
  if (prev?.tagName === "DIV") return prev;
  return script.parentElement?.querySelector<HTMLElement>("[data-cellwork]") || null;
}

function patchAndRun(source: string, host: HTMLElement) {
  const patched = source
    .replace(
      /const\s+(\w+)\s*=\s*window\.document\.currentScript\.previousElementSibling\s*;/,
      "const $1 = hostEl;",
    )
    .replace(
      /const\s+(\w+)\s*=\s*document\.currentScript\.previousElementSibling\s*;/,
      "const $1 = hostEl;",
    )
    .replace(
      /(\w+)\.attachShadow\(\{mode:"open"\}\)/g,
      "($1.shadowRoot||$1.attachShadow({mode:\"open\"}))",
    );
  const runner = new Function("hostEl", patched);
  runner(host);
}

/** Mounts a Webflow/Cellwork w-embed fragment and re-runs its inline script. */
export default function BlogChartMount({ html }: BlogChartMountProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    root.innerHTML = html;
    const scripts = [...root.querySelectorAll("script")];

    for (const old of scripts) {
      const source = old.textContent || "";
      const host = findHost(old);
      old.remove();

      if (!source.includes("attachShadow")) continue;
      if (!host) {
        console.error("Blog chart host missing");
        continue;
      }

      try {
        patchAndRun(source, host);
      } catch (error) {
        console.error("Failed to mount blog chart", error);
      }
    }

    return () => {
      root.innerHTML = "";
    };
  }, [html]);

  return <div className="blog__chart" ref={ref} />;
}
