// There are a few values that React will render as nothing (i.e. not render anything at all)

// Here are the most common and important ones:

function App() {
    return (
        <div>
            {undefined}
            {null}
            {false}
            {[]}
        </div>
    )
}

// But be careful, because 0 is not one of those values

function App2() {
    const count = 0

    return <div>{count && <div>Count is {count}</div>}</div>
}

// This will not render nothing (or even ` <div>Count is 0</div> ` for that matter)

// This will render <div>0</div> since 0 is falsy. It will look like a random `0` floating around on the page

// What you should do instead is this:

function App2_fixed() {
    const count = 0

    return <div>{count > 0 && <div>Count is {count}</div>}</div>
}

// With `count > 0`, now the expression with short-circuiting will evaluate to false, and nothing will be rendered

// You could also do this:

function App2_fixed() {
    const count = 0

    return <div>{!!count && <div>Count is {count}</div>}</div>
}

// Since `!!count` will evaluate to `false` if count is 0, and `true` otherwise
