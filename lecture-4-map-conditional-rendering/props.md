# What is a prop?

A prop is a property of a component. It is a way to pass data from a parent component to a child component. Props are passed to a component as attributes.

It's important to remember that props are a one-way data flow. This means that data can only be passed from a parent component to a child component. Data cannot be passed from a child component to a parent component.

## Passing props to a child component

Let's say we have a component called `HelloWorld` that we want to use in our app. We want to pass a name to the component so that it can say hello to that person. We can do this by passing a prop called `name` to the component.

```js title="HelloWorld.js"
import React from "react";

export function HelloWorld(props) {
  return <h1>Hello {props.name}!</h1>;
}
```

```js title="App.js"
import React from "react";

import { HelloWorld } from "./HelloWorld";

export function App() {
  return <HelloWorld name="Jane" />;
}
```

In the above example, we are passing a prop called `name` to the `HelloWorld` component. We can access the value of the prop in the component by using `props.name`.

## Passing multiple props

We can pass multiple props to a component. Let's say we want to pass a `greeting` prop to the `HelloWorld` component. We can do this by passing multiple props to the component.

```js title="HelloWorld.js"
import React from "react";

export function HelloWorld(props) {
  return (
    <h1>
      {props.greeting} {props.name}!
    </h1>
  );
}
```

```js title="App.js"
import React from "react";

import { HelloWorld } from "./HelloWorld";

export function App() {
  return <HelloWorld greeting="Hello" name="Jane" />;
}
```

In the above example, we are passing two props to the `HelloWorld` component. We can access the value of the props in the component by using `props.greeting` and `props.name`.

# Some things to be aware of when using props

## Props are read-only

Props are read-only. This means that we cannot change the value of a prop inside a component. If we try to change the value of a prop inside a component, React will throw an error.

```js title="HelloWorld.js"
import React from "react";

export function HelloWorld(props) {
  props.name = "John";
  return <h1>Hello {props.name}!</h1>;
}
```

```js title="App.js"
import React from "react";

import { HelloWorld } from "./HelloWorld";

export function App() {
  return <HelloWorld name="Jane" />;
}
```

In the above example, we are trying to change the value of the `name` prop inside the `HelloWorld` component. This will throw an error.

# The children prop

The `children` prop is a special prop that is passed to a component. It contains the content between the opening and closing tags of a component.

Let's say we have a component called `Container` that we want to use in our app. We want to pass some content to the component so that it can be displayed inside the container. We can do this by passing the content between the opening and closing tags of the component.

```js title="Container.js"
import React from "react";

export function Container(props) {
  return <div className="container">{props.children}</div>;
}
```

```js title="App.js"
import React from "react";

import { Container } from "./Container";

export function App() {
  return (
    <Container>
      <h1>Hello World!</h1>
    </Container>
  );
}
```

In the above example, we are passing the content between the opening and closing tags of the `Container` component. We can access the content in the component by using `props.children`.

The children prop is used in composition. Composition is a way to build components by combining other components. We will learn more about composition in the next lecture.

# Default props

Sometimes we want to set a default value for a prop. We can do this by using the `defaultProps` property.

Let's say we have a component called `HelloWorld` that we want to use in our app. We want to set a default value for the `greeting` prop so that it can say hello to the person. We can do this by using the `defaultProps` property.

```js title="HelloWorld.js"
import React from "react";

export function HelloWorld(props) {
  const { greeting = "Hello", name } = props;

  return (
    <h1>
      {greeting} {name}!
    </h1>
  );
}
```

```js title="App.js"
import React from "react";

import { HelloWorld } from "./HelloWorld";

export function App() {
  return <HelloWorld name="Jane" />;
}
```

In the above example, we are setting a default value for the `greeting` prop. We can access the value of the prop in the component by using `greeting`, which was destructured from the props.

You can also destructure the props directly in the function parameters if you prefer.

```js title="HelloWorld.js"
export function HelloWorld({ greeting = "Hello", name }) {
  return (
    <h1>
      {greeting} {name}!
    </h1>
  );
}
```

# Forwarding all props

Sometimes we want to pass all the props to a component. We can do this by using the spread operator.

Let's say we have a component called `Container` that we want to use in our app. We want to pass all the props to the component so that we can use them inside the component. We can do this by using the spread operator.

```js title="Container.js"
import React from "react";

export function Container(props) {
  return <SomeThirdPartyComponent className="container" {...props} />;
}
```

```js title="App.js"
import React from "react";

import { Container } from "./Container";

export function App() {
  return <Container id="container" />;
}
```

In the above example, we are passing all the props to the `Container` component. We can access the props in the component by using `props.id`.

It is not recommended to use the spread operator to pass all the props to a component. This is because it can cause unexpected behavior. It is better to explicitly pass the props that you want to use in the component. However, there are some cases where this can be useful, especially when you are using a third-party component.
