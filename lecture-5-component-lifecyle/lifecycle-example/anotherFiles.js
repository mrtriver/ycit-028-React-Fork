function NavBar(props) {
    return <div>{props.children}</div>
}

function NavBarMenuItem(props) {
    React.useEffect(() => {
        console.log(props.label, "I was born")

        return () => console.log(props.label, "I passed away")
    }, [])

    return (
        <div>
            <button onClick={props.action}>{props.label}</button>
        </div>
    )
}

function MainContent(props) {
    return <div>{props.children}</div>
}

function DashboardPage() {
    return (
        <div>
            <div>You are at the dashboard</div>
            <div>Have fun!!!</div>
        </div>
    )
}

function BlogManager() {
    return <div>Welcome to the blog manager</div>
}

function ProfilePage() {
    return <div>Here's your profile</div>
}
