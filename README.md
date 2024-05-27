# Optimizely CMS Frontend Starter

This is a [Next.js](https://nextjs.org/) project for [Optimizely CMS](https://www.optimizely.com/cms) bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). It contains the minimum required code to start building your own frontend on top of Optimizely CMS.

## Install the starter
To install this example/starter, use the command: `yarn dlx create-next-app -e https://github.com/remkoj/optimizely-saas-starter my-great-project`. This will install this starter into the `my-great-project` folder within the current directory.

[`create-next-app` CLI Reference](https://nextjs.org/docs/pages/api-reference/create-next-app)

## Getting Started
⚠ The frontend includes an example page type and component (block) type, you most likely need to change/replace these to match your CMS instance. If the included queries don't match the content schema in the CMS the `yarn compile` step will fail.

### 1. Configure your CMS instance

### 2. Create your first GraphQL Queries and Components

### 3. Adjust and build your frontend
### 3.1. Configure the connection to Optimizely Graph

### 3.2. Test/build the frontend
```bash
# Generate the types and functions from GraphQL, based on the components inside your frontend. This needs to run successfully once before the dev-server can be started.
yarn compile

# Start the dev-server
yarn dev
```

## Debugging starter points
- The compilation of GraphQL queries should complete with errors, if not, running `yarn compile --verbose` typically yields more detailed information on the cause of the error.
- Content does not update after publishing in the CMS. In a deployed scenario, Optimizely Graph sends a webhook to notify the frontend of the change. Locally this does not work, so you need to publish manually by navigating to: `http://localhost:3000/api/content/publish?token=$OPTIMIZELY_PUBLISH_TOKEN` (replace `$OPTIMIZELY_PUBLISH_TOKEN` with the value from your .env / .env.local file). Run `yarn webhook:list` to see recipients of content updates.