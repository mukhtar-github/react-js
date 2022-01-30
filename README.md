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

So we'll go with the firstBook, but we're not going to self close the tags, because children props will between the closing and opening tags.

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
