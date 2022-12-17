import { useState, useEffect } from "react"
import dayjs from "dayjs"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { Box, TextField, Typography } from "@mui/material"
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker"
import Radio from "@mui/material/Radio"
import RadioGroup from "@mui/material/RadioGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import FormControl from "@mui/material/FormControl"
import FormLabel from "@mui/material/FormLabel"
import Button from "@mui/material/Button"
import Stack from "@mui/material/Stack"

function App() {
    const [medicareValue, setMedicareValue] = useState("")
    const [visitDateValue, setVisitDateValue] = useState(dayjs("2014-08-18T21:11:54")) // prettier-ignore
    const [visitTypeValue, setVisitTypeValue] = useState("principle-visit")

    function handleSubmitClicked() {
        console.log("data", {
            medicareValue,
            visitDateValue,
            visitTypeValue,
        })
    }

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack direction="column" spacing={2}>
                <Box>
                    <Typography>Dr. Smith #1-23456</Typography>
                    <Typography>Jewish General Hospital -- Ward</Typography>
                </Box>
                <Box>
                    <TextField
                        id="medicare-field"
                        label="Medicare"
                        variant="filled"
                        value={medicareValue}
                        onChange={(evt) => setMedicareValue(evt.target.value)}
                    />
                </Box>
                <Stack direction="row" spacing={2}>
                    <DesktopDatePicker
                        label="Date of visit"
                        inputFormat="MM/DD/YYYY"
                        value={visitDateValue}
                        onChange={(value) => setVisitDateValue(value)}
                        renderInput={(params) => <TextField {...params} />}
                    />
                    <FormControl>
                        <FormLabel id="visit-type">Type of visit</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            value={visitTypeValue}
                            onChange={(evt) => {
                                console.log(evt.target.value)
                                setVisitTypeValue(evt.target.value)
                            }}
                        >
                            <FormControlLabel
                                value="principle-visit"
                                control={<Radio />}
                                label="Principle"
                            />
                            <FormControlLabel
                                value="control-visit"
                                control={<Radio />}
                                label="Control"
                            />
                            <FormControlLabel
                                value="consultation"
                                control={<Radio />}
                                label="Consultation"
                            />
                        </RadioGroup>
                    </FormControl>
                </Stack>

                <Box>
                    <Button
                        variant="contained"
                        color="success"
                        onClick={handleSubmitClicked}
                    >
                        Success
                    </Button>
                </Box>
            </Stack>
        </LocalizationProvider>
    )
}

export default App
