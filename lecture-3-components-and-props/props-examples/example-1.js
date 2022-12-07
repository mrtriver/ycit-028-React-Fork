console.log("HELLO?", ReactDOM);

function App() {
  const someJsx = <div>Today we are Tuesday, Dec 6</div>;

  return (
    <div>
      <HelloWorld firstName="Bobby" lastName="Connolly" />
      {someJsx}
    </div>
  );
}

console.log(window.App);

function HelloWorld(props) {
  //   console.log("props", props);

  const firstName = props.firstName;
  const lastName = props.lastName;

  return (
    <div>
      Hello {firstName} {lastName}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
