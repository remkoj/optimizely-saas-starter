# Optimizely SaaS CMS Frontend Starter <!-- omit in toc -->

This is a [Next.js](https://nextjs.org/) project for [Optimizely CMS](https://www.optimizely.com/cms) bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). It contains the minimum required code to start building your own frontend on top of Optimizely CMS. Though it includes [tailwindcss](https://tailwindcss.com/), this can easily be swapped with the CSS Framework of choice.

This README is written for **both humans and AI coding agents**. If you're an AI agent working in this repository, also read [AGENTS.md](./AGENTS.md) — it links to the detailed usage docs of every `@remkoj` package installed in this project (component patterns, types, APIs).

- [1. How this project works](#1-how-this-project-works)
- [2. Preconditions](#2-preconditions)
- [3. Install the starter](#3-install-the-starter)
- [4. Getting Started](#4-getting-started)
  - [4.1. Create the connection between your frontend and CMS](#41-create-the-connection-between-your-frontend-and-cms)
  - [4.2. Reflect the CMS structure in the frontend](#42-reflect-the-cms-structure-in-the-frontend)
  - [4.3. Test/build the frontend](#43-testbuild-the-frontend)
  - [4.4. Integrate with Visual Studio Code](#44-integrate-with-visual-studio-code)
  - [4.5. Build and customize the components](#45-build-and-customize-the-components)
  - [4.6. Maintain the project](#46-maintain-the-project)
  - [4.7. Preview deployments](#47-preview-deployments)
- [5. Working with AI coding agents](#5-working-with-ai-coding-agents)
- [6. Debugging starter points](#6-debugging-starter-points)
- [7. Usage with Optimizely CMS 12](#7-usage-with-optimizely-cms-12)

## 1. How this project works
The content types you define in Optimizely CMS are the source of truth for this frontend. The workflow is always the same cycle:

1. **Define/change content types** in Optimizely CMS (blocks, pages, sections, experiences).
2. **Pull the structure into the frontend** with `yarn opti-cms nextjs:create` (or `nextjs:components`), which scaffolds a matching folder + GraphQL fragment under `src/components/cms/**` for every content type.
3. **Generate typed GraphQL code** with `yarn compile` (a wrapper around `graphql-codegen`), which turns those fragments into typed queries/fragments in `src/gql`.
4. **Implement the React component** for each generated folder (this is the only manual step) and register it in the component factory ([src/components/factory.ts](./src/components/factory.ts)).
5. Content is fetched from **Optimizely Graph** (not the CMS REST API directly) and rendered through `@remkoj/optimizely-cms-react`/`@remkoj/optimizely-cms-nextjs`, which handle routing, metadata, Visual Builder composition and On-Page Editing.

Re-running steps 2/3 is non-destructive: existing component implementations are preserved, only new/changed content types add or update files.

## 2. Preconditions
This starter assumes that your environment matches these criteria:
- You have the latest LTS version of Node.JS installed.
- You've configured your system to use the latest stable version of yarn, if not, you can use these commands to enable the latest version of yarn.
  - `corepack enable`
  - `corepack install -g yarn@latest`

If you're unsure about whether yarn has been installed, or you're using the latest stable version (e.g. yarn 4.3 or newer), run `yarn --version`. If installed it provides the running version of Yarn.

## 3. Install the starter
To install this example/starter, use the command: `yarn create next-app -e https://github.com/remkoj/optimizely-saas-starter my-great-project`. This will install this starter into the `my-great-project` folder within the current directory.

[`create-next-app` CLI Reference](https://nextjs.org/docs/pages/api-reference/create-next-app)

## 4. Getting Started

### 4.1. Create the connection between your frontend and CMS
Within the root folder of this project create a `.env.local`, which will hold the keys to your CMS instance. The default `.gitignore` file will make sure that the keys in this file will not be commited into the repository.

First, start by adding the URL at which the CMS has been installed. This is typically something like https://[your instance].cms.optimizely.com/
```bash
OPTIMIZELY_CMS_URL=https://example.cms.optimizely.com/
```

Second, within your CMS, go to the dashboard and define the connection to Optimizely Graph using the variables shown below.
```bash
OPTIMIZELY_GRAPH_GATEWAY=
OPTIMIZELY_GRAPH_SINGLE_KEY=
OPTIMIZELY_GRAPH_APP_KEY=
OPTIMIZELY_GRAPH_SECRET=
```

Third, within your CMS, go to "Settings" > "API Clients" and create a new API Client. Define the credentials with the variables below.
```bash
OPTIMIZELY_CMS_CLIENT_ID=
OPTIMIZELY_CMS_CLIENT_SECRET=
```

You can find the default configuration, and more configuration options within the `.env` file

### 4.2. Reflect the CMS structure in the frontend
Now, with the connection defined, create the default components to reflect the structure.

```bash
# Create the data structure for the components bound to Optimizely CMS
yarn opti-cms nextjs:create
```

This scaffolds one folder per content type under `src/components/cms/<category>/<content-type-name>/`, each containing a GraphQL fragment for the fields of that type and a stub React component. It never overwrites a component you've already implemented, so it's safe to re-run every time you add or change content types in the CMS.

The `opti-cms` command has many more utility functions to support common tasks within the development lifecycle. The documentation of this command can be found on GitHub: [`opti-cms` reference](https://github.com/remkoj/optimizely-dxp-clients/blob/main/packages/optimizely-cms-cli/README.md)

### 4.3. Test/build the frontend
```bash
# Generate the types and functions from GraphQL, based on the components
# inside your frontend. This needs to run successfully once before the
# dev-server can be started.
yarn compile

# Start the dev-server
yarn dev
```

### 4.4. Integrate with Visual Studio Code
The included configuration already has the needed folder settings for Visual Studio code to validate *.schema.json; *.opti-type.json and *.opti-style.json files. You can update/reset this configuration, including the [Yarn PnP](https://yarnpkg.com/features/pnp) configuration by running the following command: `yarn sdk:update`, which is a wrapper for the `yarn sdks vscode` and `yarn opti-cms schema:vscode` commands.

### 4.5. Build and customize the components
All components live in `src/components/cms/<category>/<content-type-name>/`, grouped by category (`component`, `page`, `section`, `experience`, `image`, `media`, `nodes`). After running `nextjs:create`/`nextjs:components` and `yarn compile`, each folder contains a generated GraphQL fragment (in `src/gql`) and a component stub — implement the stub to render that content type, then re-run `yarn compile` if you changed the fragment's fields.

Every component receives `data` (the typed GraphQL fragment result), `contentLink`, `inEditMode` and `ctx` ([`ServerContext`](./node_modules/@remkoj/optimizely-cms-react/AGENTS.md)). Wrap editable output in `CmsEditable` so On-Page Editing keeps working. The shape depends on the category:

```tsx
// component/*: a regular content Block, e.g. src/components/cms/component/hero-block/index.tsx
import { type CmsComponent } from '@remkoj/optimizely-cms-react'
import { CmsEditable } from '@remkoj/optimizely-cms-react/rsc'
import { HeroBlockDataFragmentDoc, type HeroBlockDataFragment } from '@/gql/graphql'

export const HeroBlock: CmsComponent<HeroBlockDataFragment> = ({ data, contentLink, ctx }) => (
  <CmsEditable as="section" cmsId={contentLink.key} ctx={ctx}>
    <CmsEditable as="h1" cmsFieldName="Heading" ctx={ctx}>{data.Heading}</CmsEditable>
  </CmsEditable>
)
HeroBlock.displayName = 'Hero Block (Component/HeroBlock)'
HeroBlock.getDataFragment = () => ['HeroBlockData', HeroBlockDataFragmentDoc]

export default HeroBlock
```

```tsx
// page/*: a routable Page, e.g. src/components/cms/page/landing-page/index.tsx
import { type OptimizelyNextPage } from '@remkoj/optimizely-cms-nextjs'
import { LandingPageDataFragmentDoc, type LandingPageDataFragment } from '@/gql/graphql'

export const LandingPage: OptimizelyNextPage<LandingPageDataFragment> = ({ data, ctx }) => { /* render the page */ }
LandingPage.getDataFragment = () => ['LandingPageData', LandingPageDataFragmentDoc]
LandingPage.getMetaData = async (contentLink, locale, client) => ({ title: 'My landing page' })

export default LandingPage
```

```tsx
// section/*: a Visual Builder layout node, receives rendered `children`
export const MySection: CmsComponent<MySectionDataFragment, MyLayoutProps> = ({ contentLink, layoutProps, children, ctx }) => (
  <CmsEditable as="div" cmsId={contentLink.key} ctx={ctx}>{children}</CmsEditable>
)
MySection.getDataFragment = () => ['MySectionData', MySectionDataFragmentDoc]
```

After implementing a component, make sure its category's `index.ts` (e.g. [src/components/cms/index.ts](./src/components/cms/index.ts)) exports it in the `ComponentTypeDictionary` array — this is what [src/components/factory.ts](./src/components/factory.ts) registers so the content type resolves to your component at render time.

The Optimizely CMS CLI contains a growing number of utilities to work directly with the content and models stored within the CMS from within your development environment. Run `yarn opti-cms --help` to get an overview and description of all currently available commands. For the full API (types, `ServerContext`, `CmsContentArea`, experiences, styling), read [`@remkoj/optimizely-cms-react`'s AGENTS.md](./node_modules/@remkoj/optimizely-cms-react/AGENTS.md) and [`@remkoj/optimizely-cms-nextjs`'s AGENTS.md](./node_modules/@remkoj/optimizely-cms-nextjs/AGENTS.md).

### 4.6. Maintain the project
The release-notes for the Optimizely SaaS CMS packages that power this template are available as [GitHub Release Notes](https://github.com/remkoj/optimizely-dxp-clients).

To update the patch for GraphQL Codegen, use the following command: `yarn opti-graph patches:apply`

### 4.7. Preview deployments
The included code in [`src/app/[[...path]]/page.tsx`](./src/app/[[...path]]/page.tsx) checks the Next.JS draftMode and uses that to switch into preview mode (which requires the Optimizely Graph AppKey and AppSecret to be configured). This works by default with the Vercel Toolbar. If you're not running on Vercel, these are your options:
- Implement an API that will authorize the visitor and then enables draftMode, per the [Next.JS documentation](https://nextjs.org/docs/app/guides/draft-mode).
- Adjust the logic in this file to match your requirements. However, make sure that you're not using [dynamic functions](https://nextjs.org/docs/14/app/building-your-application/rendering/server-components#dynamic-functions), as this will switch all pages from Static Site Generation to Server Side Rendering.

## 5. Working with AI coding agents
This project maintains [AGENTS.md](./AGENTS.md) (mirrored by [CLAUDE.md](./CLAUDE.md)), which is regenerated by `yarn opti-cms project:ai` after installing/upgrading `@remkoj` packages. It links to each package's own `AGENTS.md` under `node_modules/@remkoj/*/AGENTS.md`, which document the exact types, subpath exports and component patterns shown in [4.5](#45-build-and-customize-the-components) in more detail. When asking an agent to build or fix a CMS component, point it at those files rather than having it guess the API from source code.

## 6. Debugging starter points
- _GraphQL Compilation errors:_ The compilation of GraphQL queries should complete with errors, if not, running `yarn compile --verbose` typically yields more detailed information on the cause of the error.
- _No updates:_ Content does not update after publishing in the CMS. In a deployed scenario, Optimizely Graph sends a webhook to notify the frontend of the change. 
  - Locally this does not work, so you need to publish manually by navigating to: `http://localhost:3000/api/content/publish?token=$OPTIMIZELY_PUBLISH_TOKEN` (replace `$OPTIMIZELY_PUBLISH_TOKEN` with the value from your .env / .env.local file).
  - On a hosted environment, the domain used to register the webhook recipient is defined by the `SITE_DOMAIN` environment variable. This defaults to `$VERCEL_BRANCH_URL` to make the registration successful on Vercel.
  - Run `yarn webhook:list` to see recipients of content updates and verify that your webhook as been registered correctly.

## 7. Usage with Optimizely CMS 12

> [!WARNING] 
> **Not supported:** These SDKs and starter have been designed to work closely with Optimizely SaaS CMS & CMS 13. Usage with CMS 12 is no longer supported, remnants of CMS12 support will be removed over time.

