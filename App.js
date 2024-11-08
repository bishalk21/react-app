const root = ReactDOM.createRoot(document.getElementById("root"));
// const heading = React.createElement("h1", null, "Hello World! from React App");
// createElement() takes 3 arguments: type, props, children
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World! from React App"
);
// root.render(heading);

// nested elements
/**
 *
 * <div id="parent">
 *      <div id="child">
 *          <h1>Hello World!</h1>
 *          <p>Some text here</p>
 *      </div>
 * </div>
 *
 */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", null, "Hello World!"),
    React.createElement("p", null, "Some text here"),
  ]),
]);

root.render(parent);
