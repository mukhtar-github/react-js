import React from "react";
import ReactDom from "react-dom";
import './index.css';
import { books } from './books';

function BookList() {
  return (
    <section className="booklist">{books.map((book, index) => {
      return <Book key={ book.id } {...book}/>
    })}</section>
  );
}

const Book = ({ img, title, author }) => {
// attribute, eventHandler
//onClick, onMouseOver
const clickHandler = (e) => {
  console.log(e);
  console.log(e.target);
  alert('Hello World');
};

const complexExample = (author) => {
  console.log(author);
}

  return (
    <article className="book" onMouseOver={() => {
      console.log(title);
    }}>
      <img src={img} alt="" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>Reference Example</button>
      <button type='button' onClick={() => complexExample(author)}>More Complex Example</button>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
