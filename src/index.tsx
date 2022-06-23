import { Route, Router, Routes } from "solid-app-router";
import { lazy, Suspense } from "solid-js";
import { render } from "solid-js/web";

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const Another = lazy(() => sleep(1000).then(() => import("./Another")));
const App = lazy(() => import("./App"));

render(
  () => (
    <Router>
      <Suspense fallback="Loading...">
        <Routes>
          <Route path="/" component={App} />
          <Route path="/another" component={Another} />
        </Routes>
      </Suspense>
    </Router>
  ),
  document.getElementById("root") as HTMLElement
);
