import { Link, Navigate } from "solid-app-router";
import { Component } from "solid-js";

const App: Component = () => {
  return (
    <div>
      Home
      <Link href="/another">
        <button>Go Another</button>
      </Link>
    </div>
  );
};

export default App;
