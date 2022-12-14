// In this example, let's examine the lifecycle of a component (this time using useEffect)

function App() {
    const [isDogVisible, setIsDogVisible] = useState(false)

    useEffect(() => {
        console.log("App mounted")

        setTimeout(() => {
            setIsDogVisible(true)
        }, 3000)
        setTimeout(() => {
            setIsDogVisible(false)
        }, 5000)
    }, [])

    return (
        <div>
            {isDogVisible && (
                <>
                    <h1>Random Dogs!!!!</h1>
                    <Dog />
                </>
            )}
        </div>
    )
}

function Dog() {
    // useEffect(() => {
    //     console.log("Dog mounted")
    // }, [])

    return (
        <img
            src="https://images.dog.ceo/breeds/terrier-norwich/n02094258_1003.jpg"
            alt="A Random Dog"
        />
    )
}

// Repeat what we did in 3-component-mounting-and-unmounting.js but this time using useEffect

// Make it so that the component mounts after 3 seconds and unmounts after 5 seconds
