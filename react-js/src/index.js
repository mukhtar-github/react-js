import React from "react";
import ReactDom from "react-dom";
import './index.css';

const books = [
  {
    id: 1,
    img: "https://images-na.ssl-images-amazon.com/images/I/51p2SDOCV9L._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
    title: "I Love You to the Moon and Back",
    author: "Amelia Hepworth"
  },
  {
    id: 2,
    img: 'https://m.media-amazon.com/images/I/71aLultW5EL._AC_UY218_.jpg',
    title: 'Our Class is a Family',
    author: 'Shannon Olsen and Sandie Sonke'
  },
  {
    id: 3,
    img: 'https://m.media-amazon.com/images/I/71gGPRRlyTL._AC_UY218_.jpg',
    title: 'The Vanishing Half: A Novel',
    author: 'Brit Bennett, Shayna Small, et al'
  }
];

function BookList() {
  return (
    <section className="booklist">{books.map((book, index) => {
      return <Book key={ book.id } book={book}/>
    })}</section>
  );
}

const Book = (props) => {
  const { img, title, author } = props.book;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
