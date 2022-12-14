// how to map over an array of objects and render a list of components

const people = [
    { id: "sdiubsqwmo", name: "John", age: 20, job: "developer" },
    { id: "xmcbvxoiew", name: "Peter", age: 40, job: "artist" },
    { id: "cdksjbvkss", name: "Sophia", age: 40, job: "artist" },
]

function ExampleApp() {
    return (
        <div>
            <ul>
                {people.map((elem) => {
                    // console.log("inside-map-cb", elem)

                    return <Person name={elem.name} job={elem.job} />
                })}
            </ul>
        </div>
    )
}

function Person(props) {
    return (
        <div className="person">
            <span>{props.name}</span>
            <span>{props.job}</span>
        </div>
    )
}
