import { useEffect, useMemo, useState } from "react";
import { getMDXComponent } from "mdx-bundler/client";

import "./App.css";

function App() {
  const [code, setCode] = useState<string>();
  const Component = useMemo(
    () => (code ? getMDXComponent(code) : undefined),
    [code]
  );

  useEffect(() => {
    let stop = false;

    (async () => {
      const source = await fetch("http://localhost:5173/mdx/example.js");
      const code = await source.text();
      if (!stop) {
        setCode(code);
      }
    })();

    return () => {
      stop = true;
    };
  }, []);

  if (Component) {
    return <Component />;
  }

  return <>Didn't work :(</>;
}

export default App;
