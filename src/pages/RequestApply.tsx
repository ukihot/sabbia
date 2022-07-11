import { Link, useIsRouting } from "solid-app-router";
import { tauri } from "@tauri-apps/api";
import SendIcon from '@suid/icons-material/Send'
import Button from "@suid/material/Button";
let t = await tauri.invoke("fetch_messages") as HTMLInputElement;

function Another() {
  return (
    <div>
      <Link href="/">
        <Button
              variant="contained"
              type="submit"
              aria-live="polite"
              endIcon={<SendIcon />}
            >
              メールを送信
            </Button>
      </Link>
      <p>{t}</p>
    </div>
  );
};

export default Another;