// In the previous example, when we did setCount(count + 1), we were updating the state value based on itself.
// Whenever you encounter this situation (updating state based on itself), you should use the callback form of setState.

function App() {
    const [count, setCount] = useState(0)

    // this is incorrect because it updates the state value based on itself and we aren't using the callback form of setState
    // function handleClick() {
    //     setCount(count + 1)  <--- `count` is "baked in" to the function, so it could potentially be stale (the wrong value)
    // }

    // this is correct because it updates the state value based on itself and we are using the callback form of setState
    function handleClick() {
        setCount((prevCount) => prevCount + 1) // <--- prevCount will always be fresh (the correct value)... notice we aren't closing over `count` anymore
    }

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={handleClick}>Increment</button>
        </div>
    )
}
