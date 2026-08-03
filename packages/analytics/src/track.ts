import posthog from "posthog-js";

export function track(event: string, properties?: Record<string, unknown>) {
  posthog.capture(event, properties);
}
