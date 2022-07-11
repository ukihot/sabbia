import { Route, Router, Routes } from "solid-app-router";
import { lazy, Suspense } from "solid-js";
import { render } from "solid-js/web";

const requestApply = lazy(() => import("./pages/RequestApply"));
const login = lazy(() => import("./pages/Login"));

render(
  () => (
    <Router>
      <Suspense fallback="Loading...">
        <Routes>
          <Route path="/" component={login} />
          <Route path="/requestApply" component={requestApply} />
        </Routes>
      </Suspense>
    </Router>
  ),
  document.getElementById("root") as HTMLElement
);
