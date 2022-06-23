import { Link, useIsRouting } from "solid-app-router";
import { Component, createEffect } from "solid-js";

const Another: Component = () => {
  return (
    <div>
      <h1>another</h1>
      <Link href="/">
        <button>Back</button>
      </Link>
    </div>
  );
};

export default Another;
