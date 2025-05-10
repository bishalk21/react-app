import React from "react";
import ReactDOM from "react-dom/client";

// react element (object)
const reactElement = React.createElement(
  "h1", // tag name
  { className: "header" }, // attributes (props)
  "Hello World!" // children (content)
);

// root element
const root1 = document.getElementById("root1");
const rootElement1 = ReactDOM.createRoot(root1); // create root element

// render react element to the root element
rootElement1.render(reactElement);

// jsx element (object)
const jsxElement = <h1 className="header">Hello World!</h1>;

// render jsx element to the root element
const root = document.getElementById("root");
const rootElement = ReactDOM.createRoot(root); // create root element

rootElement.render(jsxElement); // render react element to the root element

// JSX --- (transpiled by babel) ---> React.createElement (object) --- (rendered by reactDOM) ---> HTML (browser)
