"use client";

import React, { forwardRef } from "react";

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
}

const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ href, children, ...props }, ref) => {
    const [NextLink, setNextLink] = React.useState<any>(null);

    React.useEffect(() => {
      import("next/link")
        .then((mod) => setNextLink(() => mod.default))
        .catch(() => setNextLink(null)); // Next.js is not available
    }, []);

    if (NextLink) {
      return (
        <NextLink href={href} {...props} ref={ref}>
          {children}
        </NextLink>
      );
    }

    return (
      <a href={href} {...props} ref={ref}>
        {children}
      </a>
    );
  }
);

Link.displayName = "Link";

export { Link };
