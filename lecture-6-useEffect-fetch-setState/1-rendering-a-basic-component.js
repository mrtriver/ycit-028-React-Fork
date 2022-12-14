// In this example, we are going to render a basic component

function App() {
    React.useEffect(() => {
        console.log("App mounted")

        return () => {
            console.log("App UNmounted")
        }
    }, [])

    return (
        <div>
            <h1>Random Dog</h1>
            <img
                src="https://images.dog.ceo/breeds/terrier-norwich/n02094258_1003.jpg"
                alt="A Random Dog"
            />
        </div>
    )
}

// console.log("taco", App)
