# Next.js with Apollo Example extended

[Apollo](https://www.apollographql.com/client/) is a GraphQL client that allows you to easily query the exact data you need from a GraphQL server. In addition to fetching and mutating data, Apollo analyzes your queries and their results to construct a client-side cache of your data, which is kept up to date as further queries and mutations are run.

This example is based on [offical example with-apollo](https://github.com/vercel/next.js/tree/canary/examples/with-apollo) from [Next.js](https://nextjs.org/).

In this simple example Apollo is seamlessly integrated with [Next.js data fetching methods](https://nextjs.org/docs/basic-features/data-fetching) to fetch queries in the server and hydrate them in the browser ([like in the original](https://github.com/vercel/next.js/tree/canary/examples/with-apollo)).

Additionally PostDetail pages are added including dynimac path rendering at build time. 

This example relies on [Prisma + Nexus](https://github.com/prisma-labs/nextjs-graphql-api-examples) for its GraphQL backend.

## Getting Started
### Prerequesites

#### Wordpress & wpgraphql
Please follow instructions [as described here](https://github.com/vercel/next.js/tree/canary/examples/cms-wordpress) to setup Wordpress to use with this Repo

#### Enpoint url
create `.env.local` file in root directory (copy & paste `.env-development`) and paste your endpoint url.
The endpoint url is used in `lib/apolloClient.js`
Warning: currently there is still a bug when using .env variables for client only version and load more feature. To avoid this place your endpoint url directly in `lib/apolloClient.js`

#### Note
Voting & creation mutation is not supported yet.

### Dev

```bash
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build
```bash
yarn build
yarn start
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


