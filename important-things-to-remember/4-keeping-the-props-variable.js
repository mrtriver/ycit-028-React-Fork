// When passing props, it's tempting to do object destructuring in the function signature
// This is a bad idea, because it makes it harder to see what props are being used
// It also makes it harder to see what props are being passed to the component
// It's better to do object destructuring in the function body

function App() {
    return <Person name="John" age={30} />
}

function Person(props) {
    // Now, I can throw in a console.log(props) and see what props are being passed to the component

    console.log("person props", props)

    const { name, age } = props // If you want to do object destructuring, do it here

    return (
        <div>
            {name} is {age} years old
        </div>
    )
}

// This is bad because we don't keep the props variable
// function Person({ name, age }) { // This makes it harder to see what props are being used and to debug
//     return (
//         <div>
//             {name} is {age} years old
//         </div>
//     )
// }
