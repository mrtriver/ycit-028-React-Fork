import { useState } from "react"
import dayjs from "dayjs"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { Box, TextField, Typography } from "@mui/material"
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker"

function App() {
    const [value, setValue] = useState(dayjs("2014-08-18T21:11:54"))

    const handleChange = (newValue) => {
        setValue(newValue)
    }

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box>
                <Box>
                    <Typography>Dr. Smith #1-23456</Typography>
                    <Typography>Jewish General Hospital -- Ward</Typography>
                </Box>
                <Box>
                    <TextField
                        id="medicare-field"
                        label="Medicare"
                        variant="filled"
                    />
                </Box>
                <Box>
                    <DesktopDatePicker
                        label="Date desktop"
                        inputFormat="MM/DD/YYYY"
                        value={value}
                        onChange={handleChange}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </Box>
            </Box>
        </LocalizationProvider>
    )
}

export default App
