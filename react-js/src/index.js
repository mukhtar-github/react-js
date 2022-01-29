import React from "react";
import ReactDom from "react-dom";

// Mini Book Project

function BookList() {
  return <section>
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
  </section>;
}

const Book = () => {
  return <article>this is a car</article>
}

ReactDom.render(<BookList />, document.getElementById("root"));