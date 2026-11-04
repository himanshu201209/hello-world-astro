"use client";
import * as React from "react";
import { cj } from "../../utils";
import Link from "../../Basic/components/Link";
import type { LinkElement, LinkProps } from "../../types";
import { NavbarContext } from "../helpers/navbarContext";

type NavbarLinkProps = LinkProps;

export type { NavbarLinkProps };

const NavbarLink = React.forwardRef<LinkElement, NavbarLinkProps>(
  function NavbarLink({ className = "", ...props }, ref) {
    const { isOpen } = React.useContext(NavbarContext);

    return (
      <Link
        {...props}
        className={cj(className, "w-nav-link", isOpen && "w--nav-link-open")}
        ref={ref}
      />
    );
  }
);

export default NavbarLink;
