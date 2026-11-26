/** Join a site path with Astro's configured base URL. */
export function withBase(path = "/"): string {
  const base = (import.meta.env.BASE_URL || "/").replace(/\/$/, "");
  if (!path || path === "/") {
    return `${base}/` || "/";
  }
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}
