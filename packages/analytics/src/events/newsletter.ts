import { track } from "../track";

export const newsletterEvents = {
  signupStarted: "newsletter_signup_started",
  signupSubmitted: "newsletter_signup_submitted",
  signedup: "newsletter_subscribed",
} as const;

export function newsletterSignupStarted(data: { source?: string }) {
  track(newsletterEvents.signupStarted, data);
}

export function newsletterSignupSubmitted(data: { source?: string }) {
  track(newsletterEvents.signupSubmitted, data);
}

export function newsletterSignedup(data: { source?: string }) {
  track(newsletterEvents.signedup, data);
}
