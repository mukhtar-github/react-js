import React from "react";
import ReactDom from "react-dom";
import './index.css';

// Props
// Setup Vars
const title = "I Love You to the Moon and Back";
const author = "Amelia Hepworth";
const img = "https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL604_SR604,400_.jpg";

function BookList() {
  return (
    <section className="booklist">
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <img src= {img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
