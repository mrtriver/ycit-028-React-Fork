// In this example, let's examine the lifecycle of a component

function App() {
    React.useEffect(() => console.log("App mounted"), [])

    const [isDogAlive, setIsDogAlive] = React.useState(false)

    return (
        <div>
            <h1>Random Dogs</h1>
            {isDogAlive && <Dog />}
            <button onClick={() => setIsDogAlive((state) => !state)}>
                Click me
            </button>
        </div>
    )
}

function Dog() {
    React.useEffect(() => {
        console.log("Dog mounted")

        return () => console.log("Dog unmounted")
    }, [])

    return (
        <img
            src="https://images.dog.ceo/breeds/terrier-norwich/n02094258_1003.jpg"
            alt="A Random Dog"
        />
    )
}

// Q: When does the Dog component mount?

// Q: When does the Dog component unmount?

// Q: How can I make it so that the Dog component mounts and unmounts when I click a button?
