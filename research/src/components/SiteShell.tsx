import { DevLinkProvider } from "../devlink/DevLinkProvider";
import { GlobalCss } from "../devlink/core/GlobalCss";
import { Nav } from "../devlink/core/Nav";
import { Footer } from "../devlink/core/Footer";

type SiteShellProps = {
  children: React.ReactNode;
};

export default function SiteShell({ children }: SiteShellProps) {
  return (
    <DevLinkProvider>
      <GlobalCss />
      <Nav />
      {children}
      <Footer />
    </DevLinkProvider>
  );
}
