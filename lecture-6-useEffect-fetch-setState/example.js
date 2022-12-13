function App() {
    const [dog, setDog] = React.useState(null)

    React.useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
            })
    }, [])

    return (
        <div>
            <h1>Random Dog</h1>
            <img src={dog} alt="A Random Dog" />
        </div>
    )
}
