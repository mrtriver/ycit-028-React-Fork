const initialState = [
    { id: 123, activityName: "feed cat" },
    { id: 456, activityName: "walk dog" },
    { id: 789, activityName: "go to pottery class" },
]

function App() {
    const [todos, dispatch] = useReducer(reducer, initialState)

    const listItems = todos.map((todo) => (
        <li key={todo.id}>{todo.activityName}</li>
    ))

    function handleClick() {
        const inputValue = document.getElementById("todo-input").value
        dispatch({ type: "add", payload: inputValue })
    }

    return (
        <div>
            <ol>{listItems}</ol>
            <input id="todo-input" />
            <button onClick={handleClick}>Add todo</button>
        </div>
    )
}

function reducer(state, action) {
    console.log("action", action)

    // console.log("immer producer", immer.produce)

    switch (action.type) {
        case "add":
            // Writing this kind of code sucks
            // return [...state, { id: 33000, activityName: action.payload }]

            // With immer, we no longer have to worry about accidentally mutating the array
            const newState = immer.produce(state, (draft) => {
                draft.push({ id: 33000, activityName: action.payload })
            })

            return newState
    }
}
