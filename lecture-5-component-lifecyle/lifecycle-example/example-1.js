function App() {
    const [isUserSignedIn, setIsUserSignedIn] = React.useState(false)
    const [currentPage, setCurrentPage] = React.useState("dashboard-page") // "blog-manager" // "profile-page"

    let pageToRender = null
    if (currentPage === "dashboard-page") {
        pageToRender = <DashboardPage />
    } else if (currentPage === "blog-manager") {
        pageToRender = <BlogManager />
    } else {
        pageToRender = <ProfilePage />
    }

    if (!isUserSignedIn) {
        pageToRender = <div>You have to sign in</div>
    }

    const signInSignOutLabel = isUserSignedIn ? "Sign Out" : "Sign In"
    const signInSignOutAction = () => setIsUserSignedIn((state) => !state)

    let navBarItems = null
    if (isUserSignedIn) {
        navBarItems = (
            <>
                <NavBarMenuItem label="Dashboard" action={() => setCurrentPage("dashboard-page")} />
                <NavBarMenuItem label="Blog Manager" action={() => setCurrentPage("blog-manager")} />
                <NavBarMenuItem label="Profile" action={() => setCurrentPage("profile-page")} />
            </>
        ) // prettier-ignore
    }

    return (
        <div className="app">
            <NavBar>
                {navBarItems}
                <NavBarMenuItem
                    label={signInSignOutLabel}
                    action={signInSignOutAction}
                />
            </NavBar>
            <MainContent>{pageToRender}</MainContent>
        </div>
    )
}

function NavBar(props) {
    return <div>{props.children}</div>
}

function NavBarMenuItem(props) {
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
            <div>Have fun!</div>
        </div>
    )
}

function BlogManager() {
    return <div>Welcome to the blog manager</div>
}

function ProfilePage() {
    return <div>Here's your profile</div>
}
