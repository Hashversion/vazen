# vazen

[![VAZEN](./media/images/cover.svg)](https://github.com/hashversion/vazen)

> - Demo site :: [web.vazen.dev](https://web.vazen.dev)

## What is vazen?

- [**Vazen**](https://vazen.dev) :: velocity + (minimal & simplicity)

### Dev Toolkit

- [**pnpm**](https://pnpm.io) :: Fast, disk-efficient package manager
- [**portless**](https://portless.sh) :: Clean local hostnames for app development
- [**commitlint**](https://commitlint.js.org/) :: Enforces Conventional Commits
- [**lefthook**](https://lefthook.dev/) :: Fast Git hooks (pre-commit, pre-push, etc.)
- [**fallow**](https://fallow.tools) :: Dead-code analysis and project cleanup
- [**oxfmt**](https://oxc.rs/docs/guide/usage/formatter.html) :: Opinionated code formatter
- [**oxlint**](https://oxc.rs/docs/guide/usage/linter.html) :: Static analysis and linting
- [**Playwright**](https://playwright.dev/) :: End-to-end testing for browser workflows
- [**Docker**](https://www.docker.com/) :: Local development via Docker Compose
- [**Varlock**](https://varlock.dev/) :: Schema-driven environment validation with generated types (`.env.schema` → `env.ts`)
- [**Nosecone**](https://docs.arcjet.com/nosecone/quick-start) :: Security headers made simple (Arcjet’s OSS library)

### Tech Stack

- [**Next.js v16**](https://nextjs.org/) :: React framework with app router
- [**React.js v19**](https://react.dev/) :: Latest React with React compiler enabled
- [**Typescript**](https://www.typescriptlang.org/) :: Type-safe development
- [**Tailwind CSS v4**](https://tailwindcss.com/) :: Utility-first CSS framework
- [**oRPC**](https://orpc.dev/) :: tRPC alternative with built-in OpenAPI support
- [**Tanstack Query**](https://tanstack.com/query/latest) :: Data fetching and caching
- [**PostgreSQL**](https://postgresql.org/) :: Primary database
- [**Upstash**](https://upstash.com) :: Severless redis
- [**Cloudflare R2**](https://www.cloudflare.com/developer-platform/r2/) :: S3-compatible object storage via `files-sdk`
- [**Drizzle ORM**](https://orm.drizzle.team/) :: Sequel (SQL) Statement Builder
- [**Better-Auth**](https://better-auth.com/) :: Comprehensive authentication framework
- [**React Email**](https://react.email/) :: React-based email templates
- [**Statsig**](https://www.statsig.com/) :: Feature flags
- [**PostHog**](https://posthog.com/) :: Web analytics
- [**Sentry**](https://sentry.io/) :: Error monitoring & logging
- [**Evlog**](https://evlog.dev) :: Simple logs, wide events, and structured logging
- [**Infisical**](https://infisical.com/) :: Centralized secrets and env injection for dev, staging, and production

## Local Development

- [**portless**](https://portless.sh/) :: apps run on hostnames, no ports to remember
- Local hosts :: `https://local.web.vazen.id`, `https://local.docs.vazen.id`
- `.id` over `.localhost` :: OAuth providers like Google reject `.localhost` redirect URLs
- Dev scripts :: wired to portless in [`apps/web/package.json`](apps/web/package.json) and [`apps/docs/package.json`](apps/docs/package.json)

### Environment variables

> [!IMPORTANT]
> AI context can pick up workspace files. A `.env` with real keys can surface in output, logs, or a shared thread. Keep credentials in Infisical, not in long-lived files in the repo.

#### What

- [**Infisical**](https://infisical.com/) :: secret values per environment (`dev`, `staging`, `production`)
- `USE_INFISICAL=true` :: Varlock fetches the selected env (via `INFISICAL_ENV`, from `APP_ENV`) under `/vazen-web` before Next/portless starts, otherwise local `.env*` wins
- Machine identity :: `INFISICAL_PROJECT_ID`, `INFISICAL_CLIENT_ID`, `INFISICAL_CLIENT_SECRET` live in `apps/web/.env.local` locally, in CI secrets in pipelines, never committed ([docs](https://infisical.com/docs/documentation/platform/identities/machine-identities))
- `.env.schema` :: declares expected keys, `pnpm env:codegen` generates the typed `env.ts` for build/runtime checks
- In git :: `.env.schema` with placeholders and local defaults only, `.env` and `.env.local` stay ignored

#### Why

- One place to change :: edit in Infisical, restart, the team gets the same value
- Nothing real in the clone :: search and AI context stay clean

#### How

1. Setup :: run [mise](https://mise.jdx.dev/) from the root, `pnpm web:dev` from the root or `pnpm dev` in [`apps/web`](apps/web), for Infisical pulls create a machine identity ([docs](https://infisical.com/docs/documentation/platform/identities/machine-identities)), put its IDs in [`apps/web/.env.local`](apps/web/.env.local), set `USE_INFISICAL=true`
2. Daily :: same scripts, Infisical env `dev` locally
3. Change a secret :: Infisical dashboard, pick env, edit key, restart the dev server
4. Add a variable :: set in Infisical for each env that needs it, declare in the owning `.env.schema`, run `pnpm env:codegen`, commit `env.ts`
5. Avoid :: committing `.env*` with real secrets, pasting live values into issues or AI threads

### License

- MIT License :: See the [LICENSE](LICENSE) file for details.
