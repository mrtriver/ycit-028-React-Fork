function App() {
    const [letter, setLetter] = useState("B")

    const [isDiscountShown, setIsDiscountShown] = useState(false)

    const handleClickA = () => {
        setLetter("A")
    }
    const handleClickB = () => {
        setLetter("B")
    }
    const handleClickC = () => {
        setLetter("C")
    }

    useEffect(() => {
        if (letter === "B") {
            return
        }

        setIsDiscountShown(true)
        console.log("current letter: " + letter)
    }, [letter])

    return (
        <div>
            <button onClick={handleClickA}>A</button>
            <button onClick={handleClickB}>B</button>
            <button onClick={handleClickC}>C</button>
            <div>You've chosen the letter {letter}</div>
            {isDiscountShown && <div>You get a 10% discount!!!</div>}
        </div>
    )
}
