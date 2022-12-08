// how to map over an array of objects and render a list of components

const people = [
    { name: "John", age: 20, job: "developer" },
    { name: "Bob", age: 30, job: "designer" },
    { name: "Peter", age: 40, job: "artist" },
]

function ExampleApp() {
    return (
        <div>
            <ul>
                {people.map((elem) => {
                    console.log("inside-map-cb", elem)

                    return <div>{elem.name}</div>
                })}
            </ul>
        </div>
    )
}
