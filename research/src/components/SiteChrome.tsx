import { DevLinkProvider } from "../devlink/DevLinkProvider";
import { GlobalCss } from "../devlink/core/GlobalCss";
import { Nav } from "../devlink/core/Nav";
import { Footer } from "../devlink/core/Footer";

/** Mounts the existing DevLink Nav without modifying it. */
export function SiteNav() {
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
