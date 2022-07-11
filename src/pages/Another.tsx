import { Link, useIsRouting } from "solid-app-router";
import { Component, createEffect } from "solid-js";
import { tauri } from "@tauri-apps/api";
let t = await tauri.invoke("fetch_messages") as HTMLInputElement;

const Another: Component = () => {
  return (
    <div>
      <h1>another</h1>
      <Link href="/">
        <button>Back</button>
      </Link>
      <p>{t}</p>
    </div>
  );
};

export default Another;
