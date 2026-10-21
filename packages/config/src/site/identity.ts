import { urls, socials } from "./urls";

export interface SiteIdentity {
  name: string;
  url: string;
  logo: string;
  description: string;
  sameAs: readonly string[];
  slug: string;
  domain: string;
  handle: string;
  tagline: string;
}

export const site: SiteIdentity = {
  name: "Vazen",
  url: urls.base,
  logo: urls.logo,
  description: "",
  // Why :: empty social slots are absent from sameAs rather than emitted "".
  sameAs: Object.values(socials).filter(Boolean),
  slug: "vazen",
  domain: "vazen.dev",
  handle: "@stackfound",
  tagline:
    "The production-grade starter kit for modern full-stack applications",
};
