import React from 'react';
import ReactDom from 'react-dom';

// stateless functional component
// always return JSX

function Greeting() {
  return <h4>This is Mukhtar and this is my first component</h4>;
}


ReactDom.render(<Greeting />, document.getElementById('root'))