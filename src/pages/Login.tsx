import TextField from "@suid/material/TextField"
import Box from "@suid/material/Box";
import { Petals } from "../utils/consts";

function login() {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
        textAlign: "center",
      }}
      noValidate
      autocomplete="off"
    >
    <TextField
        id="outlined-basic"
        label={Petals.userId}
        variant="outlined"
        fullWidth
      />
    <TextField
          id="filled-password-input"
          label={Petals.pass}
          type="password"
          autoComplete="current-password"
          variant="filled"
      />
      </Box>
);
};

export default login;
