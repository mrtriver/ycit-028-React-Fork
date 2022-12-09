// conditional rendering

const initialUser = {
    name: "Sarah",
    role: "employee",
}

function ExampleApp() {
    const [user, setUser] = React.useState(initialUser)

    if (user === null) {
        return <div>Please sign in</div>
    }

    if (user.role === "CEO") {
        return <div>Good evening, CEO</div>
    }

    console.log("user", user)

    return (
        <div>
            <div>
                {`Good evening ${user.name}, get to work early tomorrow!`}
            </div>

            <button
                onClick={() => {
                    // user.role = "CEO" // Don't do this. You must use the "reader/updater" i.e.: setUser and you must pass to it an entirely new object (new reference/"pointer")

                    const newUser = {
                        name: user.name,
                        role: "CEO",
                    }

                    // This is the same as the code above... the point is that we need to pass a new pointer to setUser so that react knows it needs to re-render
                    // const newUser = new Object()
                    // newUser.name = user.name
                    // newUser.role = "CEO"

                    setUser(newUser)
                }}
            >
                Secret button to promote to CEO
            </button>
        </div>
    )
}
