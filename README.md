# MDX POC

Proof of concept for creating pages with MDX that can be displayed in a React app.
Constraints are that:

- the MDX pages should be loaded from an external source
- stretch goal: the pages can be previewed

## Solution

![schema](https://raw.githubusercontent.com/anaiel/poc-mdx/main/poc_mdx.png)

NB: The `mdx` is intended to live on an outside repository, which would have a CI that uploads a file to a server. In this POC, this is materialized through creating a file in the /public folder of the react app

## Start

Build mdx components:

```
cd mdx
npm i
npm run mdx:compile
```

Move the output file in the public folder:

```
cd ..
mv mdx/ouput/* react-app/public/mdx
```

Run the react app (build with Vite):

```
npm i
npm run dev
```

## Troubleshoot

Make sure the url for the script in the App.tsx file matches the port that Vite serves the app on

## Resources

https://github.com/kentcdodds/mdx-bundler?tab=readme-ov-file#component-substitution
