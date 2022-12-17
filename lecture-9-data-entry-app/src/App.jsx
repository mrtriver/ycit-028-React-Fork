import { useState, useEffect, useRef } from "react"
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
import Alert from "@mui/material/Alert"
import { getFormErrorText } from "./App.helpers.js"

function App() {
    const [alert, setAlert] = useState({ severity: null, text: "" }) // prettier-ignore

    const [medicareValue, setMedicareValue] = useState("")
    const [visitDateValue, setVisitDateValue] = useState(dayjs("2014-08-18T21:11:54")) // prettier-ignore
    const [visitTypeValue, setVisitTypeValue] = useState("principle-visit")
    const [referralIdValue, setReferralIdValue] = useState("")

    function handleSubmitClicked() {
        const params = {
            medicareValue,
            visitDateValue,
            visitTypeValue,
            referralIdValue,
        }

        const errorText = getFormErrorText(params)

        if (errorText) {
            setAlert({ severity: "warning", text: errorText })
        } else {
            setAlert({ severity: "success", text: "Claim saved." })
        }
    }

    const doctorsFeeLabel = `Doctor's fee: $${getDoctorsFee(visitTypeValue)}`

    const textRef = useRef()

    let referralField = null
    if (visitTypeValue === "consultation") {
        referralField = (
            <Box>
                <TextField
                    id="referral-id-field"
                    inputRef={textRef}
                    label="Referral ID"
                    value={referralIdValue}
                    onChange={(evt) => setReferralIdValue(evt.target.value)}
                />
            </Box>
        )
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
                        value={medicareValue}
                        onChange={(evt) => setMedicareValue(evt.target.value)}
                    />
                </Box>
                <Stack direction="column" spacing={2}>
                    <Box>
                        <DesktopDatePicker
                            label="Date of visit"
                            inputFormat="MM/DD/YYYY"
                            value={visitDateValue}
                            onChange={(value) => setVisitDateValue(value)}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </Box>
                    <FormControl>
                        <FormLabel id="visit-type">Type of visit</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            value={visitTypeValue}
                            onChange={(evt) => {
                                const value = evt.target.value
                                console.log(value)
                                setVisitTypeValue(value)
                                setReferralIdValue("")

                                if (value === "consultation") {
                                    // Bit of a janky solution, but it works
                                    setTimeout(() => {
                                        // We should use "useRef" instead. It's the "proper" React way of doing this
                                        // const input = document.getElementById("referral-id-field") // prettier-ignore
                                        // input.focus()

                                        textRef.current.focus()
                                    }, 0)
                                }
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
                {referralField}
                <Box>
                    <Typography>{doctorsFeeLabel}</Typography>
                </Box>
                <Box>
                    <Button
                        variant="contained"
                        color="success"
                        onClick={handleSubmitClicked}
                    >
                        Success
                    </Button>
                </Box>
                {alert.text && (
                    <Alert severity={alert.severity}>{alert.text}</Alert>
                )}
            </Stack>
        </LocalizationProvider>
    )
}

function getDoctorsFee(visitType) {
    switch (visitType) {
        case "principle-visit":
            return 100

        case "control-visit":
            return 50

        case "consultation":
            return 150

        default:
            return 0
    }
}

export default App
