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
      <Book job='developer' />
      <Book title='random title' number={22} />
    </section>
  );
}

const Book = (props) => {
  // console.log(props);
  return (
    <article className="book">
      <img src= {img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <p>{props.job}</p>
      <p>{props.title}</p>
      <p>{props.number}</p>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
