import { useState } from "react"
import reactLogo from "./assets/react.svg"
import "./App.css"

function App() {
    const handleSubmit = function (evt) {
        evt.preventDefault()

        const data = new FormData(evt.target)

        console.log("form was submitted", data)

        for (let [key, value] of data.entries()) {
            console.log(key, value)
        }
    }

    return (
        <form className="app" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="favourite-colour">Favourite colour</label>
                <input name="favourite-colour" type="text" />
            </div>
            <div>
                <label htmlFor="favourite-pet">Favourite pet</label>
                <input name="favourite-pet" type="text" />
            </div>
            <div>
                <label htmlFor="favourite-food">Favourite food</label>
                <input name="favourite-food" type="text" />
            </div>
            <input type="submit" />
        </form>
    )
}

export default App
