import React from "react";
import ReactDom from "react-dom";
import './index.css';

// Props
// Setup Vars
const firstBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/51p2SDOCV9L._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
  title: "I Love You to the Moon and Back",
  author: "Amelia Hepworth"
};

const secondBook = {
  img: 'https://m.media-amazon.com/images/I/71aLultW5EL._AC_UY218_.jpg',
  title: 'Our Class is a Family',
  author: 'Shannon Olsen and Sandie Sonke'
};

function BookList() {
  return (
    <section className="booklist">
      <Book img={firstBook.img} title={firstBook.title} author={firstBook.author} >
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque eos quas accusantium iusto ex sint voluptatem? Repellendus tenetur ex reiciendis ullam nam asperiores recusandae, facilis voluptatum accusamus cum ipsam molestias?</p>
      </Book>
      <Book img={secondBook.img} title={secondBook.title} author={secondBook.author} />
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props;
  console.log(props)
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {props.children}
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
