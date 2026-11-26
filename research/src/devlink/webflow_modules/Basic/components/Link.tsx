"use client";
import * as React from "react";
import { DevLinkContext } from "../../../DevLinkProvider";
import type {
  LinkElement,
  LinkProps,
  ModalLinkOptions,
  PopoverLinkOptions,
} from "../../types";

export type { LinkProps };

// React 19 knows the Popover attributes by their camelCase names and warns on
// the lowercase ones; React 18 only passes the lowercase ones to the DOM.
const [majorVersion = 0, minorVersion = 0] = React.version
  .split(".")
  .map((part) => Number.parseInt(part, 10));
const usesCamelCasePopoverAttributes = majorVersion >= 19;
// Invoker Commands API support (camelCase `commandFor`) landed in React 19.2.
const usesCamelCaseCommandFor =
  majorVersion > 19 || (majorVersion === 19 && minorVersion >= 2);

const POPOVER_TARGET_ATTRIBUTE = usesCamelCasePopoverAttributes
  ? "popoverTarget"
  : "popovertarget";
const POPOVER_TARGET_ACTION_ATTRIBUTE = usesCamelCasePopoverAttributes
  ? "popoverTargetAction"
  : "popovertargetaction";
const COMMAND_FOR_ATTRIBUTE = usesCamelCaseCommandFor
  ? "commandFor"
  : "commandfor";

const isPopoverOptions = (
  options: LinkProps["options"]
): options is PopoverLinkOptions =>
  Boolean(options && "popoverTargetAction" in options);

const isModalOptions = (
  options: LinkProps["options"]
): options is ModalLinkOptions => Boolean(options && "modalAction" in options);

const Link = React.forwardRef<LinkElement, LinkProps>(function Link(
  {
    options = { href: "#" },
    className = "",
    button = false,
    children,
    block = "",
    ...props
  },
  ref
) {
  const { renderLink: UserLink } = React.useContext(DevLinkContext);

  if (button) className += " w-button";
  if (block === "inline") className += " w-inline-block";

  // `popovertarget`/`commandfor` only work on a real button, so overlay
  // triggers skip the custom link renderer and drop anchor-only attributes.
  if (isPopoverOptions(options) || isModalOptions(options)) {
    const {
      href: _href,
      target: _target,
      rel: _rel,
      download: _download,
      hrefLang: _hrefLang,
      ping: _ping,
      referrerPolicy: _referrerPolicy,
      "aria-current": _ariaCurrent,
      ...buttonProps
    } = props as typeof props & React.AnchorHTMLAttributes<HTMLAnchorElement>;

    const isPopover = isPopoverOptions(options);
    const overlayAttributes = isPopover
      ? {
          ...(options.popoverTarget
            ? { [POPOVER_TARGET_ATTRIBUTE]: options.popoverTarget }
            : {}),
          [POPOVER_TARGET_ACTION_ATTRIBUTE]: options.popoverTargetAction,
        }
      : {
          ...(options.modalTarget
            ? { [COMMAND_FOR_ATTRIBUTE]: options.modalTarget }
            : {}),
          command: options.modalAction === "hide" ? "close" : "show-modal",
        };

    return React.createElement(
      "button",
      {
        ...buttonProps,
        type: "button",
        className: `${className} ${
          isPopover ? "w-popover-trigger" : "w-modal-trigger"
        }`,
        ...overlayAttributes,
        ref,
      },
      children
    );
  }

  const anchorRef = ref as React.Ref<HTMLAnchorElement>;

  if (UserLink) {
    return (
      <UserLink className={className} {...options} {...props} ref={anchorRef}>
        {children}
      </UserLink>
    );
  }

  const { href, target, preload = "none" } = options;

  const shouldRenderResource =
    preload !== "none" && typeof href === "string" && !href.startsWith("#");

  return (
    <>
      <a
        href={href}
        target={target}
        className={className}
        {...props}
        ref={anchorRef}
      >
        {children}
      </a>
      {shouldRenderResource && <link rel={preload} href={href} />}
    </>
  );
});

export default Link;
