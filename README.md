# [Vazen](https://vazen.dev)

[![VAZEN](./github.svg)](https://github.com/hashversion/vazen)

> [!note]
>
> - this setup is done for quickly spinning up an MVP with a waitlist
> - more features will be added soon :: including payments, feature flags, rate limiting, captchas, i18n, testing, and etc
> - documentation is yet to be developed

## what is vazen?

- [**vazen**](https://vazen.dev) :: velocity + (minimal & simplicity)

### Dev Toolkit

- [**pnpm**](https://pnpm.io) :: package manager
- [**commitlint**](https://commitlint.js.org/) :: enforces conventional commits
- [**lefthook**](https://lefthook.dev/) :: handles pre-commit hooks
- [**knip**](https://knip.dev) :: removes dead code and declutters your project
- [**prettier**](https://prettier.io/) :: code formatting
- [**eslint**](https://eslint.org/) :: code linting
- [**docker**](https://www.docker.com/) :: docker compose for local dev setup
- [**t3-oss/env-nextjs**](https://env.t3.gg/) :: never build your apps with invalid environment variables again
- [**nosecone**](https://docs.arcjet.com/nosecone/quick-start) :: arcjet nosecone is an open source library that helps set security headers

### Tech Stack

- [**next.js v16**](https://nextjs.org/) :: react framework with app router
- [**react.js v19**](https://react.dev/) :: latest react with react compiler enabled
- [**typescript**](https://www.typescriptlang.org/) :: type-safe development
- [**tailwind CSS v4**](https://tailwindcss.com/) :: utility-first CSS framework
- [**oRPC**](https://orpc.unnoq.com/) :: alternative to tRPC with openapi support out of the box
- [**tanstack query**](https://tanstack.com/query/latest) :: for efficient query & api handling
- [**supabase**](https://supabase.com/) :: postgresql on supabase
- [**drizzle ORM**](https://orm.drizzle.team/) :: database interactions & cloudflare hyperdrive integration (turning regional database to distributed database by cashing reads)
- [**better-auth**](https://better-auth.com/) :: the most comprehensive authentication framework
- [**react-email**](https://react.email/) :: library for building email templates in react
- [**posthog**](https://posthog.com/) :: web analytics
- [**sentry**](https://sentry.io/) :: error monitoring & logging
- [**c15t**](https://c15t.com/) :: developer-first consent management (cookie compliance)

### CI/CD

- gihtub actions (CI) :: a stage deployment setup for the next.js app

### Deployment

- [**cloudflare**](https://cloudflare.com/): ideal for quick prototypes, MVPs, and fast startups. cloudflare is cost-efficient and eliminates the overhead of more complex cloud setups.

### License

- this project is licensed under the MIT license :: see the [LICENSE](LICENSE) file for details.

### Acknowledgments

- built by [Hashversion](https://hashversion.com) & [Powenel](https://powenel.com) (design-system)
- inspired by modern web development best practices
