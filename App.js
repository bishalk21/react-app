import React from "react";
import ReactDOM from "react-dom/client";

const data = 100;

const Title = () => <div className="container">{data}</div>;

const Heading = () => <div className="container">{data}</div>;

const title = (
  <>
    <h1 className="title">
      {Title()}
      <Heading></Heading>
      <Heading />
      <Heading />
      Hello World! from React Functional component
    </h1>
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
// const root1 = ReactDOM.createRoot(document.getElementById("root1"));

root.render(title);
