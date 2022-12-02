import { useState } from "react"

export function App() {
    const [count, setCount] = useState(0)

    function handleClick() {
        const newCount = count + 1
        setCount(newCount)
    }

    return (
        <div>
            Hello World
            <div>
                <button onClick={handleClick}>Click to increase</button>
                <div>{count}</div>
            </div>
        </div>
    )
}
