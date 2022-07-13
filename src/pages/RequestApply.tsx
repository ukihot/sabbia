import Box from '@suid/material/Box'
import { PetalRequestApply } from '../utils/consts'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Button from '@suid/material/Button'
import { createSignal } from 'solid-js'
import TextField from '@suid/material/TextField'
import { tauri } from '@tauri-apps/api'
/*
商品コードと商品名と規格と分類コード
*/

function requestApply() {
    const [productCode, setProductCode] = createSignal('')
    const handleChange = e => {
        setProductCode(() => e.target.value)
    }
    return (
        <>
            <Header />
            <Box
                component='form'
                sx={{
                    '& > :not(style)': { m: 1, width: '40ch' },
                    textAlign: 'center',
                }}
                noValidate
                autocomplete='off'
            >
                <TextField
                    id='outlined-basic'
                    label={PetalRequestApply.productName}
                    variant='outlined'
                    fullWidth
                    value={productCode}
                    onChange={handleChange} />
                <Button type='submit' variant='contained'>登録申請</Button>
            </Box>
            <Footer />
        </>
    )
}

export default requestApply
