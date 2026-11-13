import * as Axiom from "@alchemy.run/axiom";

export const Logs = Axiom.Dataset("Logs", {
  name: "application-logs",
  kind: "axiom:events:v1",
});

export const Ingest = Axiom.ApiToken("Ingest", {
  name: "evlog-ingestion",
  datasetCapabilities: {
    "application-logs": { ingest: ["create"] },
  },
});
