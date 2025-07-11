# Optimizely SaaS CMS Frontend Starter <!-- omit in toc -->

This is a [Next.js](https://nextjs.org/) project for [Optimizely CMS](https://www.optimizely.com/cms) bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). It contains the minimum required code to start building your own frontend on top of Optimizely CMS. Though it includes [tailwindcss](https://tailwindcss.com/), this can easily be swapped with the CSS Framework of choice.

- [1. Preconditions](#1-preconditions)
- [2. Install the starter](#2-install-the-starter)
- [3. Getting Started](#3-getting-started)
  - [3.1. Create the connection between your frontend and CMS](#31-create-the-connection-between-your-frontend-and-cms)
  - [3.2. Reflect the CMS structure in the frontend](#32-reflect-the-cms-structure-in-the-frontend)
  - [3.3. Test/build the frontend](#33-testbuild-the-frontend)
  - [3.4. Integrate with Visual Studio Code](#34-integrate-with-visual-studio-code)
  - [3.5. Customize the components](#35-customize-the-components)
  - [3.6. Maintain the project](#36-maintain-the-project)
  - [3.7. Preview deployments](#37-preview-deployments)
- [4. Debugging starter points](#4-debugging-starter-points)
- [5. Usage with Optimizely CMS 12](#5-usage-with-optimizely-cms-12)
  - [5.1. Adjusting the configuration](#51-adjusting-the-configuration)
    - [5.1.1. Environment variables](#511-environment-variables)
    - [5.1.2. GraphQL Codegen](#512-graphql-codegen)
    - [5.1.3. Add Compatibility script](#513-add-compatibility-script)
    - [5.1.4. Use the content loading / transformation functions](#514-use-the-content-loading--transformation-functions)
  - [5.2. Known limitations](#52-known-limitations)

## 1. Preconditions
This starter assumes that your environment matches these criteria:
- You have the latest LTS version of Node.JS installed.
- You've configured your system to use the latest stable version of yarn, if not, you can use these commands to enable the latest version of yarn.
  - `corepack enable`
  - `corepack install -g yarn@latest`

If you're unsure about whether yarn has been installed, or you're using the latest stable version (e.g. yarn 4.3 or newer), run `yarn --version`. If installed it provides the running version of Yarn.

## 2. Install the starter
To install this example/starter, use the command: `yarn create next-app -e https://github.com/remkoj/optimizely-saas-starter my-great-project`. This will install this starter into the `my-great-project` folder within the current directory.

[`create-next-app` CLI Reference](https://nextjs.org/docs/pages/api-reference/create-next-app)

## 3. Getting Started

### 3.1. Create the connection between your frontend and CMS
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

### 3.2. Reflect the CMS structure in the frontend
Now, with the connection defined, create the default components to reflect the structure.

```bash
# Create the data structure for the components bound to Optimizely CMS
yarn opti-cms nextjs:create
```

The `opti-cms` command has many more utility functions to support common tasks within the development lifecycle. The documentation of this command can be found on GitHub: [`opti-cms` reference](https://github.com/remkoj/optimizely-dxp-clients/blob/main/packages/optimizely-cms-cli/README.md)

### 3.3. Test/build the frontend
```bash
# Generate the types and functions from GraphQL, based on the components
# inside your frontend. This needs to run successfully once before the
# dev-server can be started.
yarn compile

# Start the dev-server
yarn dev
```

### 3.4. Integrate with Visual Studio Code
The included configuration already has the needed folder settings for Visual Studio code to validate *.schema.json; *.opti-type.json and *.opti-style.json files. You can update/reset this configuration, including the [Yarn PnP](https://yarnpkg.com/features/pnp) configuration by running the following command: `yarn sdk:update`, which is a wrapper for the `yarn sdks vscode` and `yarn opti-cms schema:vscode` commands.

### 3.5. Customize the components
By default all components are created in `src/components/cms`, you can now start modifying these components to build your site. The commands from step 2 are non-destructive, so you can re-run them as you define more content types within the CMS.

The Optimizely CMS CLI contains a growing number of utilities to work directly with the content and models stored within the CMS from within your development environment. Run `yarn opti-cms --help` to get an overview and description of all currently available commands

### 3.6. Maintain the project
The release-notes for the Optimizely SaaS CMS packages that power this template are available as [GitHub Release Notes](https://github.com/remkoj/optimizely-dxp-clients).

To update the patch for GraphQL Codegen, use the following command: `yarn opti-graph patches:apply`

### 3.7. Preview deployments
The included code in [`src/app/[[...path]]/page.tsx`](./src/app/[[...path]]/page.tsx) checks the Next.JS draftMode and uses that to switch into preview mode (which requires the Optimizely Graph AppKey and AppSecret to be configured). This works by default with the Vercel Toolbar. If you're not running on Vercel, these are your options:
- Implement an API that will authorize the visitor and then enables draftMode, per the [Next.JS documentation](https://nextjs.org/docs/app/guides/draft-mode).
- Adjust the logic in this file to match your requirements. However, make sure that you're not using [dynamic functions](https://nextjs.org/docs/14/app/building-your-application/rendering/server-components#dynamic-functions), as this will switch all pages from Static Site Generation to Server Side Rendering.

## 4. Debugging starter points
- _GraphQL Compilation errors:_ The compilation of GraphQL queries should complete with errors, if not, running `yarn compile --verbose` typically yields more detailed information on the cause of the error.
- _No updates:_ Content does not update after publishing in the CMS. In a deployed scenario, Optimizely Graph sends a webhook to notify the frontend of the change. 
  - Locally this does not work, so you need to publish manually by navigating to: `http://localhost:3000/api/content/publish?token=$OPTIMIZELY_PUBLISH_TOKEN` (replace `$OPTIMIZELY_PUBLISH_TOKEN` with the value from your .env / .env.local file).
  - On a hosted environment, the domain used to register the webhook recipient is defined by the `SITE_DOMAIN` environment variable. This defaults to `$VERCEL_BRANCH_URL` to make the registration successful on Vercel.
  - Run `yarn webhook:list` to see recipients of content updates and verify that your webhook as been registered correctly.

## 5. Usage with Optimizely CMS 12

> [!WARNING] 
> **Usage beyond designed purpose:** These SDKs and starter have been designed to work closely with Optimizely SaaS CMS. By popular request, and due to the ability to create a CMS 12 build that is similar enough to Optimizely SaaS CMS, the steps to use CMS 12 are included here.<br/><br/>You are however outside the intended use-case of the SDKs and starter and will need to bring the knowledge and needed skill-set to bridge the gap.

This starter can be made to work with Optimizely CMS 12, however it assumes the following about the build of Optimizely CMS 12:

 * A Standard installation of Optimizely Graph, configured to:
   * Synchronize all versions
   * Use editor tokens
 * No modifications to the Content Delivery API
 * A configured and working installation of Optimizely CMS API - Preview 1

> [!WARNING] 
> **CMS 12 Build dependency:** These instrunctions are created based upon a build of CMS 12, as all builds are unique, there is no guarantee that it will work with your build.
>
### 5.1. Adjusting the configuration
On the frontend side, configure the Graph Endpoint and CMS endpoints as per the documentation above. Then, make the following additional configuration changes. When done, the CLI commands, like `yarn opti-cms nextjs:create` and `yarn compile` should work as expected.

#### 5.1.1. Environment variables
Add the environment variable `OPTIMIZELY_CMS_SCHEMA` with the value `OPTI-CMS-12` for all environments.

```bash
#Within .env, so it's shared across environments
OPTIMIZELY_CMS_SCHEMA=OPTI-CMS-12
```

#### 5.1.2. GraphQL Codegen
Due to the schema change from Optimizely CMS 12 to Optimizely SaaS CMS, the configuration of GraphQL Codegen needs to be adjusted.

Within the `generates` section, add a new entry `documents`, with the value `['opti-cms:/queries/12','opti-cms:/fragments/12']`, this will change the base queries and fragments from SaaS CMS to CMS 12.

Within the `presetConfig`, make sure that `recursion` has been set to `true`, so content from Inline Blocks can be fetched correctly.

```json
// Partial view of the GraphQL Codegen preset, with the changes applied
generates: {
  './src/gql/': {
    documents: ['opti-cms:/queries/12','opti-cms:/fragments/12'],
    preset: OptimizelyGraphPreset,
    presetConfig: {
      recursion: true,
      gqlTagName: 'gql',
      injections: [
```

#### 5.1.3. Add Compatibility script
Add a `cms12compat.ts` file, within the `/src/` folder. The contents for this file are available here: [https://gist.github.com/remkoj/5ec971481c4f24bc6be15101ece6b776](https://gist.github.com/remkoj/5ec971481c4f24bc6be15101ece6b776)

#### 5.1.4. Use the content loading / transformation functions
For both the On Page Edit as well as regular routes, update the `page.tsx` to use the correct method fetch the data in the format expected by the frontend code:

| File | Instruction |
| --- | --- |
| `src/app/[[...path]]/page.tsx` | Use the `getContentByPath` method as exposed by the `cms12compat.ts` file, instead of the one generated by GraphQL Codegen. | 
| `src/app/preview/page.tsx` | Use the `getContentById` method as exposed by the `cms12compat.ts` file, instead of the one generated by GraphQL Codegen, also update the path from `/preview`, to the path generated by the CMS for preview. | 

The third export from `cms12compat.ts`, the function `transformContentAreaItem` is needed to transform the data received for an content-area property from the CMS 12 fromat to the format expected by the SDK.

### 5.2. Known limitations
At this time, the following cases are neither tested, nor supported
- On-page editing has not been tested/verified
