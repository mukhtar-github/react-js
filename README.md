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
- In the ReactDom.render(`<Greeting />, ) the tag must be self closed.
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
  return (
    <section>
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article>
      <Image></Image>
      <Title />
      <Author />
    </article>
  );
};

const Image = () => {
  return (
    <img
      src="https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL604_SR604,400_.jpg"
      alt=""
    />
  );
};

const Title = () => <h1>I Love You to the Moon and Back</h1>;
const Author = () => <h4>Amelia Hepworth</h4>;

ReactDom.render(<BookList />, document.getElementById("root"));
```

## CSS Basics

```javascript
import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css";

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => {
  return (
    <img
      src="https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL604_SR604,400_.jpg"
      alt=""
    />
  );
};

const Title = () => <h1>I Love You to the Moon and Back</h1>;
const Author = () => <h4>Amelia Hepworth</h4>;

ReactDom.render(<BookList />, document.getElementById("root"));
```

## JSX CSS

We can also add our css directly in the JSX. So we need to add a style attribute to the element we're syling.

If you want to access javascript in the jsx world, you will need to set up the curly braces.

```javascript
import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css";

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => {
  return (
    <img
      src="https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL604_SR604,400_.jpg"
      alt=""
    />
  );
};

const Title = () => <h1>I Love You to the Moon and Back</h1>;
// JSX CSS
const Author = () => (
  <h4 style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.25rem" }}>
    Amelia Hepworth
  </h4>
);

ReactDom.render(<BookList />, document.getElementById("root"));
```

## JSX Javascript

```javascript
import React from "react";
import ReactDom from "react-dom";
import "./index.css";

function BookList() {
  return (
    <section className="booklist">
      <Book />
    </section>
  );
}
// JSX Javascript
const Book = () => {
  const title = "I Love You to the Moon and Back";
  const author = "Amelia Hepworth";
  return (
    <article className="book">
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL604_SR604,400_.jpg"
        alt=""
      />
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
      {/* <p>{let x = 6}</p> */}
      <p>{6 + 6}</p>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
```

## Props

When we copy and paste the instances of the Book component, we'll still get the same result. With Props, we can get different instances and values as we set them.

So props is a parameter in our component function, as it is that you can pass in any name as a parameter in a javascript function. Props is an object can be accessed by passing props.key to acomponent function to access the value.

```javascript
import React from "react";
import ReactDom from "react-dom";
import "./index.css";

// Props
// Setup Vars
const title = "I Love You to the Moon and Back";
const author = "Amelia Hepworth";
const img =
  "https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL604_SR604,400_.jpg";

function BookList() {
  return (
    <section className="booklist">
      <Book job="developer" />
      <Book title="random title" number={22} />
    </section>
  );
}

const Book = (props) => {
  //   console.log(props);
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <p>{props.job}</p>
      <p>{props.title}</p>
      <p>{props.number}</p>
    </article>
    // Browser Output for 1st Book
    // Image
    // I Love You to the Moon and Back
    // Amelia Hepworth
    // developer

    // Browser Output for 2nd Book
    // Image
    // I Love You to the Moon and Back
    // Amelia Hepworth
    // random title
    // 22
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));

// Props
// Setup Vars
const firstBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/51p2SDOCV9L._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
  title: "I Love You to the Moon and Back",
  author: "Amelia Hepworth",
};

const secondBook = {
  img: "https://m.media-amazon.com/images/I/71aLultW5EL._AC_UY218_.jpg",
  title: "Our Class is a Family",
  author: "Shannon Olsen and Sandie Sonke",
};

function BookList() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

const Book = (props) => {
  // console.log(props);
  return (
    <article className="book">
      <img src={props.img} alt="" />
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
    </article>
  );
};
```

## Props Destructuring

```javascript
const Book = ({ img, title, author }) => {
  const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};
```

## Props - Childeren

The Children Props is anything that we render between the opening and the closing tag of the component function. For example, for the first or second book, you can pick which ever you like.

I will like to add description, but only one of them, not both. Because, if we want both to have description, we should just add that to the property of the component function.

So we'll go with the firstBook, but we're not going to self close the tags, because children props will be what we render between the closing and opening tags. And that can be forms, buttons, etc.

```javascript
function BookList() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          eos quas accusantium iusto ex sint voluptatem? Repellendus tenetur ex
          reiciendis ullam nam asperiores recusandae, facilis voluptatum
          accusamus cum ipsam molestias?
        </p>
      </Book>
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

const Book = ({ img, title, author, children }) => {
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {children} - The position is, it will appear below title and author in the
      UI, but we can render it anywhere we like in the UI.
    </article>
  );
};
// or
const Book = (props) => {
  const { img, title, author, children } = props;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {children}
    </article>
  );
};
```

## Simple List

```javascript
const names = ["Musa", "Isa", "Abba"];
const newNames = names.map((name) => {
  return <h1>{name}</h1>;
});
console.log(newNames);

function BookList() {
  return <section className="booklist">{newNames}</section>;
}
// UI Output
Musa;
Isa;
Abba;
```

## Proper List

We should note that however, when mapping in an array, the returned value of the map function is the total number items in that array.

And one key point to note also is that, we cannot render the book object directly from the map function, that's why we have to use the properties of the book object.

```javascript
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
      return (
        <div>
          <h3>{book.title}</h3>
          <h6>{book.author}</h6>
        </div>
      )
    })}</section>
  );
}
// or
function BookList() {
  return (
    <section className="booklist">{books.map((book) =>
    const { img, title, author } = book;
    {
      return (
        <div>
          <h3>{title}</h3>
          <h6>{author}</h6>
        </div>
      )
    })}</section>
  );
}

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
},
{
  img: 'https://m.media-amazon.com/images/I/71gGPRRlyTL._AC_UY218_.jpg',
  title: 'The Vanishing Half: A Novel',
  author: 'Brit Bennett, Shayna Small, et al'
}
];

function BookList() {
  return (
    <section className="booklist">{books.map((book) => {
      return <Book book={book}/>
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
```

## Key Prop And Spread Operator

React would want to keep track of changes, ranging from adding, removing, and updating items in our list.

> _Warning: Each child in a list should have a unique "key" prop._

So, to fix this colsole error, we use key prop with unique values to our list, as long as they're changing. But sometimes index keyword because in the map you can access index, if one is sure that the items in the array are not goig to be changing.

```javascript
const books = [
  {
    id: 1,
    img: "https://images-na.ssl-images-amazon.com/images/I/51p2SDOCV9L._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
    title: "I Love You to the Moon and Back",
    author: "Amelia Hepworth",
  },
  {
    id: 2,
    img: "https://m.media-amazon.com/images/I/71aLultW5EL._AC_UY218_.jpg",
    title: "Our Class is a Family",
    author: "Shannon Olsen and Sandie Sonke",
  },
  {
    id: 3,
    img: "https://m.media-amazon.com/images/I/71gGPRRlyTL._AC_UY218_.jpg",
    title: "The Vanishing Half: A Novel",
    author: "Brit Bennett, Shayna Small, et al",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book, index) => {
        return <Book key={book.id} book={book} />;
      })}
    </section>
  );
}
// key={ index }
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
// Or Using Spread Operator to spread the object as props.
function BookList() {
  return (
    <section className="booklist">
      {books.map((book, index) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
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
```

## Event Basics

In to Setup events in react, all we need is an _attribute and the eventHandler_. The difference from Javascript is that since we're using the attributes inline we need to use camelCase.

```javascript
// Reference Example
const Book = ({ img, title, author }) => {
  // attribute, eventHandler
  //onClick, onMouseOver
  const clickHandler = () => {
    alert("Hello World");
  };

  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        Reference Example
      </button>
    </article>
  );
};

// Inline Example
const Book = ({ img, title, author }) => {
  // attribute, eventHandler
  //onClick, onMouseOver

  return (
    <article className="book">
      <img src={img} alt="" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

// complex Example
const Book = ({ img, title, author }) => {
  const complexExample = (author) => {
    console.log(author);
  };
  // This setup will automatically console.log() all the three authors.
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={complexExample(author)}>
        More Complex Example
      </button>
    </article>
  );
};
// While this setup with a function inside the inline onClick, will only console.log() any of the author that is clicked.

return (
  <article className="book">
    <img src={img} alt="" />
    <h1>{title}</h1>
    <h4>{author}</h4>
    <button type="button" onClick={() => complexExample(author)}>
      More Complex Example
    </button>
  </article>
);

// Event Target
// This will be useful where we have alot of inputs and we're looking or targetting at a specific value/button.
const Book = ({ img, title, author }) => {
  const clickHandler = () => {
    console.log(e);
    console.log(e.target);
    alert("Hello World");
  };

  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        Reference Example
      </button>
    </article>
  );
};

// onMouseOver
const Book = ({ img, title, author }) => {
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type="button">Reference Example</button>
      <button type="button">More Complex Example</button>
    </article>
  );
};
```

## Imports and Exports Statements

We have the named Exports and the default Exports.

```javascript
// Named Exports Example
export const books = [];

// Importing Named Exports Example
import { books } from "./books"; // We don't add the .js extention when importing javascript files in react.

// Using VS Code extensions for react, we can create our component using rafce shortcut, using export default.
import React from "react";

const Book = () => {
  return <div></div>;
};

export default Book;
```
