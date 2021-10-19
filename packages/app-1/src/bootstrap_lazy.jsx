import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";

const AppTwoComponent = React.lazy(() => import("app_2/AppTwoComponent"));

ReactDOM.render(
  <>
    <App />
    <Suspense fallback={<div>Loading..</div>}>
      <AppTwoComponent />
    </Suspense>
  </>,
  document.getElementById("root")
);
