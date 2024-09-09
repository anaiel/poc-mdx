import fs from "node:fs/promises";
import { bundleMDX } from "mdx-bundler";

// Prepare components for bundleMDX (in files variable)
const COMPONENT_FOLDER = "components/";
const components = await fs.readdir(COMPONENT_FOLDER);
const files = {};
for (const componentFilename of components) {
  if (!componentFilename.endsWith(".jsx")) {
    continue;
  }
  files[`../components/${componentFilename}`] = (
    await fs.readFile(COMPONENT_FOLDER + componentFilename)
  ).toString();
}

// Bundle all .mdx files in pages folder (with files variable for components)
const PAGES_FOLDER = "pages/";
const pagesFilenames = await fs.readdir(PAGES_FOLDER);
const OUTPUT_DIR = "output";
await fs.mkdir(OUTPUT_DIR);
for (const pageFilename of pagesFilenames) {
  if (!pageFilename.endsWith(".mdx")) {
    continue;
  }

  const content = await fs.readFile(PAGES_FOLDER + pageFilename);
  const result = await bundleMDX({
    source: content.toString(),
    files,
  });
  fs.writeFile(
    `${OUTPUT_DIR}/${pageFilename.replace(".mdx", ".js")}`,
    result.code
  );
}
