import { Link, Navigate } from "solid-app-router";
import { Component } from "solid-js";
import TextField from "@suid/material/TextField"
import Box from "@suid/material/Box";
import Button from "@suid/material/Button";

const App: Component = () => {
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
        label="Outlined"
        variant="outlined"
        fullWidth
      />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
      <Link href="/another">
        <Button
              variant="contained"
              type="submit"
              aria-live="polite"
            >
              Confirm
            </Button>
      </Link>
    </Box>
  );
};

export default App;
