// When using React state, don't modify the state value directly.
// Instead, use the setState function to update the state value.
// For example, if you have a state value called count, you can update it using the following code:

function App() {
    const [count, setCount] = useState(0)

    // this is wrong because it directly modifies the state value (the "reader")
    // function handleClick() {
    //     count = count + 1
    // }

    function handleClick() {
        // this is correct because it uses the setState function to update the state value (the "writer" or "updater function")
        setCount(count + 1)
    }

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={handleClick}>Increment</button>
        </div>
    )
}
