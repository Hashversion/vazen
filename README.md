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
- **Varlock** :: Schema-driven environment validation with generated types (`.env.schema` → `env.ts`)
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

- Uses [**portless**](https://portless.sh/) :: apps run on clean hostnames instead of raw ports.
- Local hosts: `https://local.web.vazen.id` and `https://local.docs.vazen.id`
- We use `.id` instead of `.localhost` because auth clients and OAuth providers such as Google can reject `.localhost` redirect URLs during local development.
- Dev scripts in [`apps/web/package.json`](apps/web/package.json) and [`apps/docs/package.json`](apps/docs/package.json) are wired to portless.

**Local hosts:**

- `https://local.web.vazen.id`
- `https://local.docs.vazen.id`

### Environment variables

> [!IMPORTANT] **Agentic coding and secrets.** AI-assisted workflows can index or include workspace files in context. A `.env` with real keys may show up in model output, logs, or a shared thread. Assume secrets on disk near source are visible to tooling. Use Infisical for credentials, not long-lived env files in the repo.
>
> Extra steps around secrets (CLI, login, skipping local `.env` dumps) are intentional. It is always okay to overengineer security.

#### What

- [**Infisical**](https://infisical.com/) stores secret values per environment (`dev`, `staging`, `production`).
- Setting `USE_INFISICAL=true` lets Varlock fetch the selected environment (via `INFISICAL_ENV`, remapped from `APP_ENV`) from secrets under the `/vazen-web` path before Next/portless starts. Otherwise already-set variables and local `.env*` files win.
- Machine-identity credentials for the fetch (`INFISICAL_PROJECT_ID`, `INFISICAL_CLIENT_ID`, `INFISICAL_CLIENT_SECRET`) come from `apps/web/.env.local` locally and from CI secrets in pipelines — never bundled. See [Infisical machine identities](https://infisical.com/docs/documentation/platform/identities/machine-identities).
- Each package declares its variables in `.env.schema`; typed `env.ts` clients are generated with `pnpm env:codegen` to validate env names and types at build/runtime.
- In git: `.env.schema` files declare keys with local defaults and placeholders only. `.env` and `.env.local` are gitignored.

#### Why

- One source of truth: change a key in Infisical, restart dev, the team gets the same value on the next run.
- Keeps real credentials out of the clone so search and agentic coding are less likely to expose them (see callout above).

#### How

1. **Setup (once):** run [mise](https://mise.jdx.dev/) in the repo root · start web with `pnpm web:dev` (root) or `pnpm dev` in [`apps/web`](apps/web) · to pull secrets from Infisical instead of local files, create a machine identity ([docs](https://infisical.com/docs/documentation/platform/identities/machine-identities)), put its project ID + client ID/secret in [`apps/web/.env.local`](apps/web/.env.local), and set `USE_INFISICAL=true`
2. **Daily:** use those scripts · use Infisical environment **`dev`** locally (selected via `APP_ENV`/`INFISICAL_ENV` when `USE_INFISICAL=true`)
3. **Change a secret:** Infisical dashboard · pick `dev`, `staging`, or `production` · edit the key · restart the dev server
4. **Add a variable:** set the value in Infisical for each env that needs it · declare it in the owning package's `.env.schema` · run `pnpm env:codegen` and commit the generated `env.ts`
5. **Avoid:** committing `.env*` files that contain real secrets · pasting live values into issues or AI threads

### License

- MIT License :: See the [LICENSE](LICENSE) file for details.
