import { createSignal } from 'solid-js'
import TextField from '@suid/material/TextField'
import Box from '@suid/material/Box'
const [getValue, setValue] = createSignal()
import { Petals } from '../utils/consts'
import Header from '../components/Header'
const requestApply = () => {
  return (
    <div>
      <Header />
          <Box
              component="form"
              sx={{
                  '& > :not(style)': { m: 1, width: '50ch' },
                  textAlign: 'center',
              }}
              noValidate
              autocomplete="off"
          >
              <TextField
                  id="outlined-basic"
                  label={Petals.productName}
                  variant="outlined"
                  fullWidth
              />
          </Box>
      </div>
  )
}

export default requestApply
