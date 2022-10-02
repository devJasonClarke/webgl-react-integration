import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
function App() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "build/platformer.loader.js",
    dataUrl: "build/platformer.data",
    frameworkUrl: "build/platformer.framework.js",
    codeUrl: "build/platformer.wasm",
  });
  return <div className="container"><Unity className="container" unityProvider={unityProvider} /></div>;
}
export default App;


