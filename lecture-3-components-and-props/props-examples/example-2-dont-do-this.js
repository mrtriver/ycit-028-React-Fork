function App() {
  return (
    <div>
      <HelloWorld firstName="Bobby" lastName="Connolly" />
    </div>
  );
}

function HelloWorld(props) {
  props.firstName = "Thomas"; // don't do this

  return (
    <div>
      Hello {props.firstName} {props.lastName}
    </div>
  );
}

// do something like this instead
function HelloWorld2(props) {
  let derivedFirstName = props.firstName;
  if (derivedFirstName === "Bobby") {
    derivedFirstName = "Thomas";
  }

  return (
    <div>
      Hello {derivedFirstName} {props.lastName}
    </div>
  );
}
