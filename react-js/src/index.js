import React from "react";
import ReactDom from "react-dom";
import './index.css';

const books = [
  {
  img: "https://images-na.ssl-images-amazon.com/images/I/51p2SDOCV9L._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
  title: "I Love You to the Moon and Back",
  author: "Amelia Hepworth"
},
{
  img: 'https://m.media-amazon.com/images/I/71aLultW5EL._AC_UY218_.jpg',
  title: 'Our Class is a Family',
  author: 'Shannon Olsen and Sandie Sonke'
}
];

function BookList() {
  return (
    <section className="booklist">{books.map((book) => {
    const { img, title, author } = book;
      return (
        <div>
          <h3>{title}</h3>
          <h6>{author}</h6>
        </div>
      )
    })}</section>
  );
}

const Book = (props) => {
  const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
