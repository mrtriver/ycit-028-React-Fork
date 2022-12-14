// Don't use state immediately after setting it

function App() {
    const [count, setCount] = useState(0)

    // this is wrong because it uses the count value immediately after setting it
    function handleClick() {
        setCount((prevCount) => prevCount + 1)
        console.log(count) // <--- this will log the old value of count !!! (that's bad)
    }

    // this is correct because it uses the count value after it has been updated
    useEffect(() => {
        console.log(count) // <--- this will log the new value of count !!! (that's good)
    }, [count]) // <--- this is the dependency array, which tells React to only run this effect when the count value changes

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={handleClick}>Increment</button>
        </div>
    )
}
