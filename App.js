const heading = React.createElement(
  "h1",
  {
    id: "heading",
    abc: "xyz",
  },
  "Hello World from React"
); // returns object (react element)

/**
 * nesting element in react
 *
 * <div id="parent">
 *      <div id="child1">
 *          <h1>I am child</h1>
 *          <h2>I am child</h2>
 *      </div>
 *     <div id="child2">
 *          <h1>I am child</h1>
 *          <h2>I am child</h2>
 *      </div>
 * </div>
 *
 *
 */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am child 1"),
    React.createElement("h2", {}, "I am child 2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am child 3"),
    React.createElement("h2", {}, "I am child 4"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
