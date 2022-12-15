import { useState } from "react"
import reactLogo from "./assets/react.svg"
import "./App.css"

const COLOURS = ["red", "blue", "green"]

function App() {
    const [favouriteColour, setFavouriteColour] = useState("")
    const [favouritePet, setFavouritePet] = useState("")
    const [favouriteFood, setFavouriteFood] = useState("")

    const handleSubmit = function (evt) {
        evt.preventDefault()

        console.log("favouriteColour", favouriteColour)
        console.log("favouritePet", favouritePet)
        console.log("favouriteFood", favouriteFood)
    }

    return (
        <form className="app" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="favourite-colour">Favourite colour</label>
                <input
                    style={{
                        color: COLOURS.includes(favouriteColour)
                            ? favouriteColour
                            : "black",
                    }}
                    name="favourite-colour"
                    type="text"
                    value={favouriteColour}
                    onChange={(evt) => setFavouriteColour(evt.target.value)}
                />
            </div>
            <div>
                <label htmlFor="favourite-pet">Favourite pet</label>
                <input
                    name="favourite-pet"
                    type="text"
                    value={favouritePet}
                    onChange={(evt) => setFavouritePet(evt.target.value)}
                />
            </div>
            <div>
                <label htmlFor="favourite-food">Favourite food</label>
                <input
                    name="favourite-food"
                    type="text"
                    value={favouriteFood}
                    onChange={(evt) => setFavouriteFood(evt.target.value)}
                />
            </div>
            <input type="submit" />
        </form>
    )
}

export default App
