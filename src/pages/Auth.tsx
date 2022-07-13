import TextField from '@suid/material/TextField'
import { Link } from 'solid-app-router'
import Box from '@suid/material/Box'
import { PetalAuth } from '../utils/consts'
import Button from '@suid/material/Button'

const auth = () => {
    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
                textAlign: 'center',
            }}
            noValidate
            autocomplete="off"
        >
            <TextField
                id="outlined-basic"
                label={PetalAuth.userId}
                variant="outlined"
                fullWidth
            />
            <TextField
                id="filled-password-input"
                label={PetalAuth.pass}
                type="password"
                autoComplete="current-password"
                variant="filled"
            />
            <Link href="/RequestApply">
                <Button variant="contained">ログイン</Button>
            </Link>
        </Box>
    )
}

export default auth
