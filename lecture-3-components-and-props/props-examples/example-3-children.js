function App() {
    return (
        <div>
            <HelloGoodbyeContainer
                taco1="who is my favorite cat"
                taco2="white cat"
                taco3="gentle cat"
            >
                <div></div>
                <HelloWorld firstName="Bobby" lastName="Connolly" />
                <HelloWorld firstName="Bobby" lastName="Connolly" />
                <HelloWorld firstName="Bobby" lastName="Connolly" />
                <GoodbyeWorld firstName="Bobby" lastName="Connolly" />
                <GoodbyeWorld firstName="Bobby" lastName="Connolly" />
            </HelloGoodbyeContainer>
        </div>
    )
}

function HelloGoodbyeContainer(props) {
    console.log("hellogoodbye props", props)

    return (
        <div>
            <div>This is the hello goodbye container </div>
            {props.children}
        </div>
    )
}

function HelloWorld(props) {
    return (
        <div>
            Hello {props.firstName} {props.lastName}
        </div>
    )
}

function GoodbyeWorld(props) {
    return (
        <div>
            Goodbye {props.firstName} {props.lastName}
        </div>
    )
}
