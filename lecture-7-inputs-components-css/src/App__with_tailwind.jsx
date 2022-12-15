import { useState, useEffect } from "react"

export default function App() {
    const [borderColor, setBorderColor] = useState(false)

    let borderColorClassName
    if (borderColor) {
        borderColorClassName = "border-red-600"
    } else {
        borderColorClassName = "border-green-600"
    }
    // console.log(borderColorClassName)

    useEffect(() => {
        console.log("set interval begins")
        setInterval(() => {
            setBorderColor((state) => !state)
        }, 1000)
    }, [])

    return (
        <div className="flex flex-col">
            <span
                className={`w-4 h-4 border-2 rounded ${borderColorClassName}`}
            />
            <span
                className={`w-4 h-4 border-2 rounded ${borderColorClassName}`}
            />
            <span
                className={`w-4 h-4 border-2 rounded ${borderColorClassName}`}
            />
        </div>
    )
}
