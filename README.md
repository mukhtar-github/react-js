# React-js

## First Component in Details

To create our first component, we only need two things, an import from react dependency, and a function in our index.js file, and that function is our component, which is a stateless (or Dom for now) functional component that must always return JSX.

```javascript
import React from "react";
import ReactDom from "react-dom";

// stateless functional component
// always return JSX

function Greeting() {
  return <h4>This is Mukhtar and this is my first component</h4>;
}

ReactDom.render(<Greeting />, document.getElementById("root"));
```

- The first letter of the name of a react component function must be capitalized.
- The JavaScript's entry point is the index.js file.
- In the ReactDom.render(<Greeting />, ) the tag must be self closed.
- HTML is referred to as JSX in reactjs, because it has additional functionalities.
- What is under the hood of the component function is

```javascript
const Greeting = () => {
  return React.createElement(element to return='h1', props object={}, children='hello');
}
```

## JSX Rules

```javascript
import React from "react";
import ReactDom from "react-dom";

// JSX Rules
// return single element
// div / section / article or Fragment
// use camelCase for html attribute
// className instead of class
// close every element with a closing tag
// formatting

function Greeting() {
  return (
    <div>
      <h1>hello world</h1>
    </div>
  );
}

ReactDom.render(<Greeting />, document.getElementById("root"));
```

- Use proper html semantics or Fragment => React.Fragment or (<></>).
- Formatting - When returning JSX in a component function, it should be in a closed bracket or the html tag should be on the same line with the return key word to avoid error in react.

## Nested Components and React Tools

```javascript
import React from "react";
import ReactDom from "react-dom";

// Nested Components, React Tools

function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

const Person = () => <h2>John Doe</h2>;
const Message = () => {
  return <p>This is the message</p>;
};

ReactDom.render(<Greeting />, document.getElementById("root"));
```

## Mini Book Project

```javascript
import React from "react";
import ReactDom from "react-dom";

// Mini Book Project

function BookList() {
  return <section>this is a booList</section>;
}

ReactDom.render(<BookList />, document.getElementById("root"));
```
