console.log("HELLO?", ReactDOM);

function App() {
  const someJsx = <div>Today we are Tuesday, Dec 6</div>;

  return (
    <div>
      <HelloWorld
        firstName="Bobby"
        lastName="Connolly"
        age={38}
        isOnVacation={false}
        pet={{
          name: "taco",
          age: "16",
        }}
        favoriteNumbers={[22, 34, 52]}
      />
      {someJsx}
    </div>
  );
}

console.log(window.App, 2 + 5);

// All the falsey values in JS
// undefined, null, NaN, false, 0, ""
// console.log(!!false, !!undefined, !!null, !!0, !!"", !!NaN); // These are the only falsy values
// console.log(!!" ", !!true, !!1, !!{ pet: "taco" }, !!{}, !![1, 2, 3], !![]); // Anything else is truthy

function HelloWorld(props) {
  console.log("props", props);
  console.log("lastName", props.lastName, typeof props.lastName);
  console.log("age", props.age, typeof props.age);
  console.log("isOnVacation", props.isOnVacation, typeof props.isOnVacation);

  return (
    <div>
      Hello {props.firstName} {props.lastName}
    </div>
  );
}
