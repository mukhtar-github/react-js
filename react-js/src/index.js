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
const Message = () => <p>This is the message</p>;

ReactDom.render(<Greeting />, document.getElementById("root"));