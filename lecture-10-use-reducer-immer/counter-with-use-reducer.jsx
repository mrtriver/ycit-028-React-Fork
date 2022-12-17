function App() {
    const [count, dispatch] = useReducer(reducer, 0) // 2 argumemts, a reducer function and the intial state

    return (
        <div>
            Count is {count}
            <button onClick={() => dispatch("increment")}>Increment</button>
            <button onClick={() => dispatch("decrement")}>Decrement</button>
            <button onClick={() => dispatch("reset")}>Reset</button>
        </div>
    )
}

function reducer(state, action) {
    switch (action) {
        case "increment":
            return state + 1

        case "decrement":
            return state - 1

        case "reset":
            return 0
    }
}
