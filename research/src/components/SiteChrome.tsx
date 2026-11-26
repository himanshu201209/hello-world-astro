import { DevLinkProvider } from "../devlink/DevLinkProvider";
import { GlobalCss } from "../devlink/core/GlobalCss";
import { Nav } from "../devlink/core/Nav";
import { Footer } from "../devlink/core/Footer";
import "../devlink/css/nav-button-icon.css";

/**
 * DevLink IX2 still fires PLUGIN_LOTTIE for the old hamburger Animation.
 * Without Webflow's Lottie runtime that throws (`Webflow.require` on undefined).
 * Stub missing plugins so Nav can open/close normally.
 */
function ensureWebflowPluginStub() {
  if (typeof window === "undefined") return;
  const win = window as Window & {
    Webflow?: { require?: (name: string) => unknown };
  };
  if (!win.Webflow) {
    win.Webflow = { require: () => null };
    return;
  }
  if (typeof win.Webflow.require !== "function") {
    win.Webflow.require = () => null;
  }
}

ensureWebflowPluginStub();

/** Mounts the existing DevLink Nav without modifying it. */
export function SiteNav() {
  ensureWebflowPluginStub();
  return (
    <DevLinkProvider>
      <GlobalCss />
      <Nav />
    </DevLinkProvider>
  );
}

/** Mounts the existing DevLink Footer without modifying it. */
export function SiteFooter() {
  return (
    <DevLinkProvider>
      <Footer />
    </DevLinkProvider>
  );
}
