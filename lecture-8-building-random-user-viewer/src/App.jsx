import { useState, useEffect } from "react"
import "./App.css"

// "Mrs","first":"Begüm","last":"Babacan"},"location":{"street":{"number":377,"name":"Talak Göktepe Cd"},"city":"Tokat","state":"Van","country":"Turkey","postcode":95906,"coordinates":{"latitude":"64.6534","longitude":"112.7319"},"timezone":{"offset":"+4:30","description":"Kabul"}},"email":"begum.babacan@example.com","login":

// const MOCK_DATA = {
//     title: "Mrs",
//     firstName: "Begüm",
//     lastName: "Babacan",
//     address1: "377 Talak Göktepe Cd",
//     address2: "Tokat, Van, Turkey, 95906",
//     email: "begum.babacan@example.com",
//     username: "brownfrog111",
//     pictureUrl: "https://randomuser.me/api/portraits/thumb/women/21.jpg",
// }

function App() {
    // const {title, firstName, lastName, address1, address2, email, username, pictureUrl} = MOCK_DATA // prettier-ignore

    console.log("app rendered...")

    const [serverData, setServerData] = useState(null)

    function fetchRandomUser() {
        fetch("https://randomuser.me/api/?results=1")
            .then((response) => response.json())
            .then((data) => {
                console.log("data", data)

                setServerData(data)
            })
    }

    useEffect(() => {
        fetchRandomUser()
    }, [])

    // Destructure only the data we need out of the first element of serverData.results

    if (serverData === null) {
        return null
    }

    const firstUser = serverData.results[0]
    console.log("firstUser", firstUser)

    const title = firstUser.name.title
    const firstName = firstUser.name.first
    const lastName = firstUser.name.last
    const address1 = firstUser.location.street.number + " " + firstUser.location.street.name // prettier-ignore
    const address2 = firstUser.location.city + " " + firstUser.location.state + " " + firstUser.location.country + " " + firstUser.location.postcode // prettier-ignore
    const email = firstUser.email
    const username = firstUser.login.username
    const pictureUrl = firstUser.picture.large

    return (
        <div>
            <header>
                <h2>Random User Profile Viewer</h2>
            </header>

            <main>
                <div id="main-data-fetcher">
                    <label htmlFor="get-user-btn">
                        Click the button to obtain a random user
                    </label>
                    <input
                        type="button"
                        name="get-user-btn"
                        value="Get Random User"
                        onClick={() => fetchRandomUser()}
                    />
                </div>

                <section id="user-data-section">
                    <span>
                        <div>{title + " " + firstName + " " + lastName}</div>
                        <div>{address1}</div>
                        <div>{address2}</div>
                        <div>{email}</div>
                        <div>{username}</div>
                    </span>

                    <span>
                        <img src={pictureUrl} alt="User's profile picture" />
                    </span>
                </section>
            </main>
        </div>
    )
}

export default App
