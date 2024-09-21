# nx-demo

## Collocation Version

There are two projects in this repository.

The first one is **my-vue-app**.  This is a Vue project that shows a quote from office space.  It does this by using a `quote.ts` file.

The second one is **my-express-app**.  This is an Express project that provides an endpoint to get a quote from office space.  It does this by using a `quote.ts` file.

The `quote.ts` file is duplicated in both projects.  This is not ideal because if the quote changes, it needs to be updated in both projects.

These are both "normal" projects.  They work by using npm scripts to install dependencies and run the project.
