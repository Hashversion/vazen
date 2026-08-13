import {
  newsletterSignedup,
  newsletterSignupStarted,
  newsletterSignupSubmitted,
} from "./events/newsletter";

export const analytics = {
  newsletter: {
    signupStarted: newsletterSignupStarted,
    signupSubmitted: newsletterSignupSubmitted,
    signedup: newsletterSignedup,
  },
};
