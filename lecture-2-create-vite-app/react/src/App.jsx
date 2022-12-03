import { useState } from "react"

import "./App.css"

export function App() {
    const [status, setStatus] = useState("hired") // <--- "hired" is the initial value

    return (
        <div className="profile">
            <div className="profile-avatar">
                <img src="/vite.svg" class="logo" alt="Vite logo" />
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
                <button
                    onClick={function () {
                        setStatus("hired")
                    }}
                >
                    Hire!
                </button>
                <button
                    onClick={function () {
                        setStatus("FIRED!!!!!!")
                    }}
                >
                    Fire!
                </button>
            </div>
        </div>
    )
}
