# Next.js with Apollo Example extended

[Apollo](https://www.apollographql.com/client/) is a GraphQL client that allows you to easily query the exact data you need from a GraphQL server. In addition to fetching and mutating data, Apollo analyzes your queries and their results to construct a client-side cache of your data, which is kept up to date as further queries and mutations are run.

This example is based on [offical example with-apollo](https://github.com/vercel/next.js/tree/canary/examples/with-apollo) from [Next.js](https://nextjs.org/).

In this simple example Apollo is seamlessly integrated with [Next.js data fetching methods](https://nextjs.org/docs/basic-features/data-fetching) to fetch queries in the server and hydrate them in the browser ([like in the original](https://github.com/vercel/next.js/tree/canary/examples/with-apollo)).

Additionally PostDetail pages are added including dynimac path rendering at build time. 

This example relies on [Prisma + Nexus](https://github.com/prisma-labs/nextjs-graphql-api-examples) for its GraphQL backend.

## Getting Started
### For next.js app:

```bash
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Build
### For Next.js app:
```bash
yarn build
yarn start
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


