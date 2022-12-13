// In this example, we are going to make a request to an API and render the data

function App() {
    return (
        <div>
            <h1>Random Dogs</h1>
            <Dog />
        </div>
    )
}

function Dog() {
    return (
        <img
            src="https://images.dog.ceo/breeds/terrier-norwich/n02094258_1003.jpg"
            alt="A Random Dog"
        />
    )
}
