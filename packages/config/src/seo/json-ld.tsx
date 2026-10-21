import type { JsonLdSchema } from "./schemas";

interface JsonLdProps {
  data: JsonLdSchema;
}

const escapeJsonForHtml = (json: string): string =>
  json
    .replaceAll("<", "\\u003c")
    .replaceAll(">", "\\u003e")
    .replaceAll("&", "\\u0026")
    .replaceAll("\u2028", "\\u2028")
    .replaceAll("\u2029", "\\u2029");

export const JsonLd = ({ data }: JsonLdProps) => (
  <script
    // oxlint-disable-next-line react/no-danger
    dangerouslySetInnerHTML={{
      __html: escapeJsonForHtml(JSON.stringify(data)),
    }}
    type="application/ld+json"
  />
);
