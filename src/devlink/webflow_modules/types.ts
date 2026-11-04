"use client";
/* eslint-disable @typescript-eslint/no-namespace */

import * as React from "react";

// ============================================================================
// Component Prop Types
// ============================================================================

/**
 * Standard React HTML attributes for the given element type.
 *
 * @template T - HTML element tag name
 */
export type ElementProps<T extends keyof HTMLElementTagNameMap> =
  React.HTMLAttributes<HTMLElementTagNameMap[T]>;

/**
 * Props type that combines element props with additional custom props.
 *
 * @template T - HTML element tag name
 * @template U - Additional custom props (default: unknown)
 */
export type Props<
  T extends keyof HTMLElementTagNameMap,
  U = unknown
> = ElementProps<T> & React.PropsWithChildren<U>;

/**
 * Tag props type for components that support custom tags
 */
export type TagProps = Props<
  keyof HTMLElementTagNameMap,
  { tag?: React.ElementType; grid?: unknown }
>;

/**
 * Options for a Link that navigates
 */
export type AnchorLinkOptions = {
  href: string;
  target?: "_self" | "_blank";
  preload?: "none" | "prefetch" | "prerender";
};

/**
 * Options for a Link that controls a Popover. Without a `popoverTarget` the
 * Link renders as a button that controls nothing.
 */
export type PopoverLinkOptions = {
  popoverTarget?: string;
  popoverTargetAction: "toggle" | "show" | "hide";
};

/**
 * Options for a Link that controls a Modal. Without a `modalTarget` the Link
 * renders as a button that controls nothing.
 */
export type ModalLinkOptions = {
  modalTarget?: string;
  modalAction: "show" | "hide";
};

/**
 * Element a Link renders: a Popover/Modal trigger renders a `<button>`.
 */
export type LinkElement = HTMLAnchorElement | HTMLButtonElement;

/**
 * Link props type for Link component
 */
export type LinkProps = React.HTMLAttributes<LinkElement> &
  React.PropsWithChildren<{
    options?: AnchorLinkOptions | PopoverLinkOptions | ModalLinkOptions;
    className?: string;
    button?: boolean;
    block?: string;
  }>;

// ============================================================================
// Value Type Namespaces
// ============================================================================

export type CSSModules = { [sel: string]: string };

export namespace Basic {
  type PreloadedLink = {
    preload?: "prerender" | "prefetch" | "none";
  };

  type TargetedLink = {
    target?: "_self" | "_blank";
  };

  type PreloadedAndTargetedLink = PreloadedLink & TargetedLink;

  type PopoverLink = {
    popoverTarget?: string;
    popoverTargetAction: "toggle" | "show" | "hide";
  };

  type ModalLink = {
    modalTarget?: string;
    modalAction: "show" | "hide";
  };

  export type Link =
    | ({ href: string } & PreloadedAndTargetedLink)
    | PopoverLink
    | ModalLink;

  export type RichTextChildren = React.ReactNode;
}

export namespace Asset {
  export type Image = string;
}

export namespace Embed {
  export type Video = {
    height?: number;
    width?: number;
    title?: string;
    url?: string;
  };
}

export namespace Boolean {
  export type Boolean = boolean;
}

export namespace Visibility {
  export type VisibilityConditions = boolean;
}

export namespace Devlink {
  export type Slot = React.ReactNode;
  export type RuntimeProps = Record<string, unknown>;
}

export type FontsManifest = {
  google?: string[];
  typekit?: {
    kitId: string;
  };
};

export namespace Basic {
  export type Attributes = Record<string, unknown>;
}
