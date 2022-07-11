import { Link, Navigate } from "solid-app-router";
import { Component , createSignal} from "solid-js";
import { render } from "solid-js/web";
import TextField from "@suid/material/TextField"
import Box from "@suid/material/Box";
import Button from "@suid/material/Button";
import { PETALS } from "../utils/consts";
const [getValue, setValue] = createSignal();

const PRODUCT_NAME = PETALS.PRODUCT_NAME;

function App() {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "50ch" },
        textAlign: "center",
      }}
      noValidate
      autocomplete="off"
    >
      <TextField
        id="outlined-basic"
        label={PRODUCT_NAME}
        variant="outlined"
        fullWidth />
    </Box>
  );
}

export default App;
