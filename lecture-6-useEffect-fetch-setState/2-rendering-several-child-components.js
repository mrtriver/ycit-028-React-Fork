// In this example, we are going to render several child components

function App() {
    return (
        <div>
            <h1>Random Dogs</h1>
            <Dog />
            <Dog />
            <Dog />
        </div>
    )

 
function Dog() {
    return (
        <img
            src="https://images.dog.ceo/breeds/terrier-norwich/n02094258_1003.jpg"
            alt="A Random Dog"
        />
    )
}

// Q: Why is this code not working? (HINT: we are missing some syntax)

// Q: How many components are there?

// Q: How many component instances are there?
// Q: How many times is the Dog component rendered?

// Q: What if I want to render these?
// https://images.dog.ceo/breeds/spaniel-brittany/n02101388_3280.jpg
// https://images.dog.ceo/breeds/hound-walker/n02089867_146.jpg

// Q: Can you make it so that the middle dog is rendered conditionally?