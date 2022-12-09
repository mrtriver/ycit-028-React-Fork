import { useState } from "react"

import "./App.css"

import { myVariable } from "./myOtherFiles.jsx"

console.log("thumbelina", myVariable)

export function App() {
    const [status, setStatus] = useState("hired") // <--- "hired" is the initial value

    return <UserProfile status={status} setStatus={setStatus} />
}

function UserProfile(props) {
    console.log("user-profile-props", props)

    // const status = props.status
    // const setStatus = props.setStatus

    // This is the exact same thing as the lines above (known as object destructuring)
    const { status, setStatus } = props

    const myReactElement = (
        <div className="profile">
            <div className="profile-avatar">
                <img src="/vite.svg" className="logo" alt="Vite logo" />
            </div>

            <div className="profile-details">
                <div className="profile-details-item">
                    <div>Name</div>
                    <div>John Smith</div>
                </div>
                <div className="profile-details-item">
                    <div>Age</div>
                    <div>38</div>
                </div>
                <div className="profile-details-item">
                    <div>Skills</div>
                    <div>React, Snowboarding, Accounting</div>
                </div>
                <div className="profile-details-item">
                    <div>Status</div>
                    <div>{status}</div>
                </div>
            </div>

            <div className="profile-actions">
                <button onClick={() => setStatus("hired")}>Hire!</button>
                <button onClick={() => setStatus("FIRED!!!!!!")}>Fire!</button>
            </div>
        </div>
    )

    console.log("myReactElement", myReactElement)

    return myReactElement
}
