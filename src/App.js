import React from "react";
import SayHi from "./sayHi";
const RemoteSlides = React.lazy(() => import("app1/Slides"));
// const RemoteSlides = await import("app1/Slides");
// const RemoteNewsList = React.lazy(() => import("app2/NewsList"));

const App = () => (
  <div>
    <h2 style={{ textAlign: "center" }}>
      App 3, Remote Slides, Remote NewsList
    </h2>
    <SayHi />
    <React.Suspense fallback="Loading Slides">
      <RemoteSlides />
      {/* <RemoteNewsList /> */}
    </React.Suspense>
  </div>
);

export default App;
