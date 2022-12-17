function App_with_useState() {
    const [count, setCount] = useState(0) // 0 is the intial state

    return (
        <div>
            Count is {count}
            <button onClick={() => setCount(count => count + 1)}>Increment</button>
            <button onClick={() => setCount(state => state - 1)}>Decrement</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    ) // prettier-ignore
}

// Now we want to convert the "useState" version of the counter application to the "useReducer" to improve the clarity of our program

// See other file
