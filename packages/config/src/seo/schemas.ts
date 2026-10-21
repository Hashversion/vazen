// What :: typed schema.org builders for JSON-LD; `JsonLd` renders any `JsonLdSchema`.
// Why :: absent keys beat null/empty keys for validators; optional fields assign only when present.
import { site } from "../site/identity";
import { urls } from "../site/urls";

export const ORGANIZATION_ID = `${urls.base}/#organization`;
export const WEBSITE_ID = `${urls.base}/#website`;

export interface WebSiteSchema {
  "@context": "https://schema.org";
  "@type": "WebSite";
  "@id": string;
  name: string;
  url: string;
  description?: string;
  inLanguage: string;
}

export interface OrganizationSchema {
  "@context": "https://schema.org";
  "@type": "Organization";
  "@id": string;
  name: string;
  url: string;
  logo: string;
  sameAs?: readonly string[];
}

export type JsonLdSchema = OrganizationSchema | WebSiteSchema;

export function websiteSchema(): WebSiteSchema {
  const schema: WebSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: site.name,
    url: urls.base,
    inLanguage: "en",
  };

  if (site.description) {
    schema.description = site.description;
  }

  return schema;
}

export function organizationSchema(): OrganizationSchema {
  const schema: OrganizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: site.name,
    url: site.url,
    logo: site.logo,
  };

  if (site.sameAs.length) {
    schema.sameAs = site.sameAs;
  }

  return schema;
}
