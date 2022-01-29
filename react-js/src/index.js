import React from "react";
import ReactDom from "react-dom";

// CSS
import './index.css';

function BookList() {
  return <section>
    <Book />
  </section>;
};

const Book = () => {
  return (
  <article>
    <Image></Image>
    <Title />
    <Author />
    </article>
  )
};

const Image = () => {
  return <img src="https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL604_SR604,400_.jpg" alt="" />
};

const Title = () => <h1>I Love You to the Moon and Back</h1>
const Author = () => <h4>Amelia Hepworth</h4>

ReactDom.render(<BookList />, document.getElementById("root"));