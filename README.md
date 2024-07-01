# Optimizely CMS Frontend Starter

This is a [Next.js](https://nextjs.org/) project for [Optimizely CMS](https://www.optimizely.com/cms) bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). It contains the minimum required code to start building your own frontend on top of Optimizely CMS.

## Preconditions
This starter assumes that your environment matches these criteria:
- You have the latest LTS version of Node.JS installed.
- You've configured your system to use the latest stable version of yarn, if not, you can use these commands to enable the latest version of yarn.
  - `corepack enable`
  - `corepack install -g yarn@latest`

If you're unsure about whether yarn has been installed, or you're using the latest stable version (e.g. yarn 4.3 or newer), run `yarn --version`. If installed it provides the running version of Yarn.

## Install the starter
To install this example/starter, use the command: `yarn create next-app -e https://github.com/remkoj/optimizely-saas-starter my-great-project`. This will install this starter into the `my-great-project` folder within the current directory.

[`create-next-app` CLI Reference](https://nextjs.org/docs/pages/api-reference/create-next-app)

## Getting Started

### 1. Create the connection between your frontend and CMS
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

### 2. Reflect the CMS structure in the frontend
Now, with the connection defined, create the default components to reflect the structure.

```bash
# Create the data structure for the components bound to Optimizely CMS
yarn opti-cms nextjs:create
```

### 3. Test/build the frontend
```bash
# Generate the types and functions from GraphQL, based on the components
# inside your frontend. This needs to run successfully once before the
# dev-server can be started.
yarn compile

# Start the dev-server
yarn dev
```

### 4. Customize the components
By default all components are created in `src/components/cms`, you can now start modifying these components to build your site. The commands from step 2 are non-destructive, so you can re-run them as you define more content types within the CMS.

The Optimizely CMS CLI contains a growing number of utilities to work directly with the content and models stored within the CMS from within your development environment. Run `yarn opti-cms --help` to get an overview and description of all currently available commands

## Debugging starter points
- _GraphQL Compilation errors:_ The compilation of GraphQL queries should complete with errors, if not, running `yarn compile --verbose` typically yields more detailed information on the cause of the error.
- _No updates:_ Content does not update after publishing in the CMS. In a deployed scenario, Optimizely Graph sends a webhook to notify the frontend of the change. 
  - Locally this does not work, so you need to publish manually by navigating to: `http://localhost:3000/api/content/publish?token=$OPTIMIZELY_PUBLISH_TOKEN` (replace `$OPTIMIZELY_PUBLISH_TOKEN` with the value from your .env / .env.local file).
  - On a hosted environment, the domain used to register the webhook recipient is defined by the `SITE_DOMAIN` environment variable. This defaults to `$VERCEL_BRANCH_URL` to make the registration successful on Vercel.
  - Run `yarn webhook:list` to see recipients of content updates and verify that your webhook as been registered correctly.