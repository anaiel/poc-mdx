# MDX POC

Proof of concept for creating pages with MDX that can be displayed in a React app.
Constraints are that:

- the MDX pages should be loaded from an external source
- stretch goal: the pages can be previewed

## Solution

NB: The `mdx` is intended to live on an outside repository, which would have a CI that uploads a file to a server. In this POC, this is materialized through creating a file in the /public folder of the react app

## Start

```
npm i
npm run mdx:compile
npm run dev
```

## Resources

https://github.com/kentcdodds/mdx-bundler?tab=readme-ov-file#component-substitution
