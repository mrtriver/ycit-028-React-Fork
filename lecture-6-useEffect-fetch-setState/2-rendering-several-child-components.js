// In this example, we are going to render several child components

function App() {
    // if-else
    // switch-case
    // ternery ? :
    // short-circuiting (&& ||)

    const isFirstDogVisible = false

    let firstDog = (
        <Dog src="https://images.dog.ceo/breeds/terrier-norwich/n02094258_1003.jpg" />
    )

    if (isFirstDogVisible === false) {
        firstDog = null
    }

    return (
        <div>
            <h1>Random Dogs</h1>

            {firstDog}

            <Dog
                hidden
                src="https://images.dog.ceo/breeds/spaniel-brittany/n02101388_3280.jpg"
            />
            <Dog src="https://images.dog.ceo/breeds/hound-walker/n02089867_146.jpg" />
        </div>
    )
}

function Dog(props) {
    console.log("hidden", props.hidden, typeof props.hidden)

    if (props.hidden) {
        return null
    }

    return <img src={props.src} alt="A Random Dog" />
}

// Q: Why is this code not working? (HINT: we are missing some syntax)

// Q: How many components are there?  2 (App & Dog)
// Q: How many component instances are there? 4 .... 3 Dog + 1 App

// Q: How many times is the Dog component rendered?  3

// Q: What if I want to render these?
// https://images.dog.ceo/breeds/spaniel-brittany/n02101388_3280.jpg
// https://images.dog.ceo/breeds/hound-walker/n02089867_146.jpg

// Q: Can you make it so that the middle dog is rendered conditionally?
