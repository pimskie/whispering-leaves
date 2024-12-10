"use client";

import React, { forwardRef, useMemo } from "react";

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  countryLocaleCode?: string;
  href: string;
  children: React.ReactNode;
}

const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ countryLocaleCode, href, children, ...props }, ref) => {
    const [NextLink, setNextLink] = React.useState<any>(null);

    React.useEffect(() => {
      // @ts-ignore: cannot find import
      import("next/link")
        .then((mod) => setNextLink(() => mod.default))
        .catch(() => setNextLink(null));
    }, []);

    const hrefWithLocale = useMemo(() => {
      if (countryLocaleCode) {
        return `/${countryLocaleCode}${href}`;
      }

      return href;
    }, [countryLocaleCode, href]);

    if (NextLink) {
      return (
        <NextLink href={hrefWithLocale} {...props} ref={ref}>
          {children}
        </NextLink>
      );
    }

    return (
      <a href={hrefWithLocale} {...props} ref={ref}>
        {children}
      </a>
    );
  }
);

Link.displayName = "Link";

export { Link };
