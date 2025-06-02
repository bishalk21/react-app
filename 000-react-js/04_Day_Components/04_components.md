[<< Day 3](../30-Days-Of-React/03_Day_Setting_Up/03_setting_up.md) | [Day 5 >>](../05_Day_Props/05_props.md)

- [Components](#components)
  - [Big picture of components](#big-picture-of-components)
  - [JavaScript function](#javascript-function)
  - [JavaScript Class](#javascript-class)
  - [Creating React Component](#creating-react-component)
    - [Functional Component](#functional-component)
    - [Rendering components](#rendering-components)
    - [Injecting data to JSX in React Component](#injecting-data-to-jsx-in-react-component)
    - [Further on Functional components](#further-on-functional-components)
- [Exercises: Components](#exercises-components)
  - [Exercises: Level 1](#exercises-level-1)
  - [Exercises: Level 2](#exercises-level-2)
  - [Exercises: Level 3](#exercises-level-3)

# Components

A React component is a small, reusable code, which is responsible for one part of the application UI. A React application is an aggregation of components. React can help us to build reusable components. The following diagram shows different components. All the components have different border colors. In React we assemble different components together to create an application. We use JavaScript functions or classes to make components. If we use a function, the component will be a functional component, but if we use a class, the component will be a class-based component.

Components can be:

- Functional Component / Presentational Component / Stateless Component / Dumb Component
- Class Component / Container Component/ Statefull Component / Smart Component

The classification of components above does not work for the latest version of React, but it is good to know the former definition and how the previous versions work.

So, let us change all the JSX to components. Components in React are JavaScript functions or classes, that return a JSX. Component name must start with an uppercase, and if the name is two words, it should be CamelCase - a camel with two humps.

## Big picture of components

In the previous section we agreed, that a website or an application is made of buttons, forms, texts, media objects, header, section, article and footer. If we have a million-dollar button, we can use this button all the time, instead of recreating it all over again, whenever we need a button. The same goes for input fields, forms, header or footer. That is where the power of the component comes. In the following diagram, the header, main and footer are components. Inside the main there is also a user card component and a text section component. All the different colors represent different components. How many colors do you see? Each color represent a single component. We have five components in this diagram.

Before we jump into React components, let's do some functions and class refreshers.

## JavaScript function

A JavaScript function could be either a regular function or an arrow function. These functions are not exactly the same there is a slight difference between them.

```js
const getUserInfo = (firstName, lastName, country, title, skills) => {
  return `${firstName} ${lastName},  a ${title} developer based in ${country}. He knows ${skills.join(
    " "
  )} `;
};
// When we call this function we need parameters
const skills = ["HTML", "CSS", "JS", "React"];
console.log(
  getUserInfo("Bishal", "Karki", "Nepal", "FullStack Developer", skills)
);
```

## JavaScript Class

A class is a blueprint of an object. We instantiate a class to create different objects. In addition, we can create children, by inheriting all the methods and properties of the parent.

```js
class Parent {
  constructor(firstName, lastName, country, title) {
    // we bind the params with this class object using this keyword
    this.firstName = firstName;
    this.lastName = lastName;
    this.country = country;
    this.title = title;
  }
  getPersonInfo() {
    return `${this.firstName} ${this.lastName},  a ${this.title} developer base in ${this.country} `;
  }
  parentMethod() {
    // code goes here
  }
}

const p1 = new Parent("Bishal", "Karki", "Nepal", "FullStack Developer");

class Child extends Parent {
  constructor(firstName, lastName, country, title, skills) {
    super(firstName, lastName, country, title);
    this.skills = skills;
    // we bind the child params with the this keyword to this child object
  }
  getSkills() {
    let len = this.skills.length;
    return len > 0 ? this.skills.join(" ") : "No skills found";
  }
  childMethod() {
    // code goes here
  }
}

const skills = ["HTML", "CSS", "JS", "React"];

const child = new Child(
  "Bishal",
  "Karki",
  "Nepal",
  "FullStack Developer",
  skills
);
```

We just briefly covered function and class. React component is made of JavaScript functions or classes, so let's make a React component now.

## Creating React Component

### Functional Component

Using a JavaScript function, we can make a functional React component.

```js
// React component syntax
// it can be arrow function, function declaration or function expression
const jsx = <tag> Content </tag>;
const ComponentName = () => {
  return jsx;
};
```

The following expression is a JSX element.

```js
// JSX element, header
const header = (
  <header style={headerStyles}>
    <div className="header-wrapper">
      <h1>Welcome to 30 Days Of React</h1>
      <h2>Getting Started React</h2>
      <h3>JavaScript Library</h3>
      <p>JavaScript | 30 Days | React | Tutorial</p>
      <small>
        30 days of React challenge is aimed to help you learn React in 30 days
      </small>
    </div>
  </header>
);

// React Component
const Header = () => {
  return header;
};

// or we can just return the JSX

const Header = () => {
  return (
    <header style={headerStyles}>
      <div className="header-wrapper">
        <h1>Welcome to 30 Days Of React</h1>
        <h2>Getting Started React</h2>
        <h3>JavaScript Library</h3>
        <p>JavaScript | 30 Days | React | Tutorial</p>
        <small>
          30 days of React challenge is aimed to help you learn React in 30 days
        </small>
      </div>
    </header>
  );
};

// Even th above code can be written like this
// Explicitly returning the JSX
const Header = () => (
  <header style={headerStyles}>
    <div className="header-wrapper">
      <h1>Welcome to 30 Days Of React</h1>
      <h2>Getting Started React</h2>
      <h3>JavaScript Library</h3>
      <p>JavaScript | 30 Days | React | Tutorial</p>
      <small>
        30 days of React challenge is aimed to help you learn React in 30 days
      </small>
    </div>
  </header>
);
```

### Rendering components

Now, lets change all the JSX elements we had to components. When we call JSX element we use curly brackets and when we call components we do as follows <ComponentName />. If we pass an attribute, when we call the component name, we call it props(<ComponentName propsName = {'data-type'} />).

Let's render first the _Header_ component.

```js
// index.js
import React from "react";
import ReactDOM from "react-dom";

// Header Component
const Header = () => (
  <header>
    <div className="header-wrapper">
      <h1>Welcome to 30 Days Of React</h1>
      <h2>Getting Started React</h2>
      <h3>JavaScript Library</h3>
      <p>JavaScript | 30 Days | React | Tutorial</p>
      <small>
        30 days of React challenge is aimed to help you learn React in 30 days
      </small>
    </div>
  </header>
);

const rootElement = document.getElementById("root");
// we render the JSX element using the ReactDOM package
ReactDOM.render(<Header />, rootElement);
```

Now, let's create an App component , that will wrap the Header, Main and Footer. Then the App component will be render on the DOM.

```js
// index.js
import React from "react";
import ReactDOM from "react-dom";
import bishalImage from "./images/bishal.jpg";

// Header Component
const Header = () => (
  <header>
    <div className="header-wrapper">
      <h1>Welcome to 30 Days Of React</h1>
      <h2>Getting Started React</h2>
      <h3>JavaScript Library</h3>
      <p>bishal Karki</p>
      <small>Nov 3 2022</small>
    </div>
  </header>
);

// User Card Component
const UserCard = () => (
  <div className="user-card">
    <img src={bishalImage} alt="bishal image" />
    <h2>bishal Karki</h2>
  </div>
);

// TechList Component
const TechList = () => {
  const techs = ["HTML", "CSS", "JavaScript"];
  const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>);
  return techsFormatted;
};

// Main Component
const Main = () => (
  <main>
    <div className="main-wrapper">
      <p>Prerequisite to get started react.js:</p>
      <ul>
        <TechList />
      </ul>
      <UserCard />
    </div>
  </main>
);

// Footer Component
const Footer = () => (
  <footer>
    <div className="footer-wrapper">
      <p>Copyright 2020</p>
    </div>
  </footer>
);

// The App, or the parent or the container component
const App = () => (
  <div className="app">
    <Header />
    <Main />
    <Footer />
  </div>
);

const rootElement = document.getElementById("root");
// we render the App component using the ReactDOM package
ReactDOM.render(<App />, rootElement);
```

### Injecting data to JSX in React Component

So far, we used static data on the JSX elements. Now let's pass different data types as dynamic data. The dynamic data could be strings, numbers, booleans, arrays or objects. Let us see each of the data types step by step. To inject data to a JSX we use the {} bracket.

In this section we inject only strings

```js
import React from "react";
import ReactDOM from "react-dom";

const welcome = "Welcome to 30 Days Of React";
const title = "Getting Started React";
const subtitle = "JavaScript Library";
const firstName = "bishal";
const lastName = "Karki";
const date = "Nov 3 2022";

// JSX element, header
const header = () => {
  return (
    <header>
      <div className="header-wrapper">
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>
          Instructor: {firstName} {lastName}
        </p>
        <small>Date: {date}</small>
      </div>
    </header>
  );
};
const rootElement = document.getElementById("root");
// we render the App component using the ReactDOM package
ReactDOM.render(<Header />, rootElement);
```

Similar to the Header component we can implement to Main and Footer component.

```js
// To get the root element from the HTML document
const rootElement = document.querySelector(".root");
// JSX element, header
const welcome = "Welcome to 30 Days Of React Challenge";
const title = "Getting Started React";
const subtitle = "JavaScript Library";
const author = {
  firstName: "bishal",
  lastName: "Karki",
};
const date = "Oct 2, 2020";

// JSX element, header
const Header = () => (
  <header>
    <div className="header-wrapper">
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>
        Instructor: {author.firstName} {author.lastName}
      </p>
      <small>Date: {date}</small>
    </div>
  </header>
);

const numOne = 3;
const numTwo = 2;

const result = (
  <p>
    {numOne} + {numTwo} = {numOne + numTwo}
  </p>
);

const yearBorn = 1820;
const currentYear = 2020;
const age = currentYear - yearBorn;
const personAge = (
  <p>
    {" "}
    {author.firstName} {author.lastName} is {age} years old
  </p>
);

// User Card Component
const UserCard = () => (
  <div className="user-card">
    <img src={bishalImage} alt="bishal image" />
    <h2>
      {author.firstName} {author.lastName}
    </h2>
  </div>
);

// JSX element, main
const techs = ["HTML", "CSS", "JavaScript"];
const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>);

// JSX element, main
const Main = () => (
  <main>
    <div className="main-wrapper">
      <div>
        <p>
          Prerequisite to get started{" "}
          <strong>
            <em>react.js</em>
          </strong>
          :
        </p>
        <ul>{techsFormatted}</ul>
        {result}
        {personAge}
      </div>
      <UserCard />
    </div>
  </main>
);

const copyRight = "2020";

// JSX element, footer
const Footer = () => (
  <footer>
    <div className="footer-wrapper">
      <p>Copyright &copy;{copyRight}</p>
    </div>
  </footer>
);

// JSX element, app
const app = () => (
  <div className="app">
    <Header />
    <Main />
    <Footer />
  </div>
);

// we render the App component using the ReactDOM package
ReactDOM.render(<App />, rootElement);
```

### Further on Functional components

We have transformed all the JSX elements of Day 2 to functional components, and by now you are very familiar with components. Let's create more components. What is the smallest size of a component? A component that returns only a single HTML as JSX is considered as a small component. A button component or an alert box component, or just an input field component.

```js
const Button = () => <button>action</button>;
```

The _Button_ component is made of a single HTML button element.
Let's style this button using JavaScript style object. All CSS properties should be camelCase to make a JavaScript CSS object. If we pass a number without unit as CSS value, it is considered as px. See the example below.

```js
const buttonStyles = {
  padding: "10px 20px",
  background: "rgb(0, 255, 0",
  border: "none",
  borderRadius: 5,
};
const Button = () => <button style={buttonStyles}> action </button>;
```

The Button component is a dumb component, because it does not take any parameters and we cannot change the action text dynamically. We need to pass props to the button, to change the value dynamically. We will see props in the next section. Before we close today's lesson let's make another, more functional component, which displays a random hexadecimal number.

```js
import React from "react";
import ReactDOM from "react-dom";

// Hexadecimal color generator
const hexaColor = () => {
  let str = "0123456789abcdef";
  let color = "";
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length);
    color += str[index];
  }
  return "#" + color;
};

const HexaColor = () => <div>{hexaColor()}</div>;

const rootElement = document.getElementById("root");
// we render the App component using the ReactDOM package
ReactDOM.render(<HexaColor />, rootElement);
```

# Exercises: Components

## Exercises: Level 1

1. What is the difference between a regular function and an arrow function?

> Arrow function is an alternative to write a function, however function declaration and arrow function have some minor differences. A function is a reusable block of code or programming statements designed to perform a certain task.
> A function is declared by a function key word followed by a name, followed by parentheses ().

2. What is a React Component?

> A React component is a JavaScript function that returns a React element. A component is a small, reusable chunk of code that is responsible for one job. That job is often to render some HTML.

3. How do you make a React functional component?

> A functional component is a JavaScript function that accepts props as an argument and returns a React element. A functional component is a component that is written as a plain JavaScript function. It can also be called a “dumb” or “presentational” component because it does not manage its own state.

```js
const Button = () => <button>action</button>;
```

4. What is the difference between a pure JavaScript function and a functional component?

> A functional component is a JavaScript function that accepts props as an argument and returns a React element. A functional component is a component that is written as a plain JavaScript function. It can also be called a “dumb” or “presentational” component because it does not manage its own state.

5. How small is a React component?

> A component is the smallest building block of a React application. A component is a small, reusable chunk of code that is responsible for one job. That job is often to render some HTML.

6. Can we make a button or input field component?

> Yes, we can make a button or input field component. A button component or an alert box component, or just an input field component.

```js
const Button = () => <button>action</button>;
```

7. Make a reusable Button component.

```js
const Button = () => <button>action</button>;
```

8. Make a reusable InputField component.

```js
const InputField = () => <input type="text" placeholder="Enter your name" />;
```

9. Make a reusable alert box component with one div parent element and one p child element of the div(warning alert box, success alert box).

```js
const AlertBox = () => (
  <div className="alert-box">
    <p>Warning! You are about to delete your account.</p>
  </div>
);
```

## Exercises: Level 2

1. Create functional components and display the following images

![image](https://user-images.githubusercontent.com/4392234/111061100-2b5b4a00-84d4-11eb-8b9a-8b8b8b8b8b8b.png)

```js
const App = () => (
  <div className="app">
    <div className="image-wrapper">
      <img src="https://picsum.photos/200/300" alt="random" />
      <img src="https://picsum.photos/200/300" alt="random" />
      <img src="https://picsum.photos/200/300" alt="random" />
      <img src="https://picsum.photos/200/300" alt="random" />
      <img src="https://picsum.photos/200/300" alt="random" />
      <img src="https://picsum.photos/200/300" alt="random" />
    </div>
  </div>
);
```

2. Use functional component to create the following design

![image](https://user-images.githubusercontent.com/4392234/111061104-2f876780-84d4-11eb-8b9a-8b8b8b8b8b8b.png)

```js
const App = () => (
  <div className="app">
    <div className="image-wrapper">
      <img src="https://picsum.photos/200/300" alt="random" />
      <img src="https://picsum.photos/200/300" alt="random" />
      <img src="https://picsum.photos/200/300" alt="random" />
      <img src="https://picsum.photos/200/300" alt="random" />
      <img src="https://picsum.photos/200/300" alt="random" />
      <img src="https://picsum.photos/200/300" alt="random" />
    </div>
  </div>
);
```

## Exercises: Level 3

1.  Use the given hexadecimal color generator in the example to create these random colors

![image](https://user-images.githubusercontent.com/4392234/111061106-331aee80-84d4-11eb-8b9a-8b8b8b8b8b8b.png)

```js
import React from "react";
import ReactDOM from "react-dom";

// Hexadecimal color generator
const hexaColor = () => {
  let str = "0123456789abcdef";
  let color = "";
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length);
    color += str[index];
  }
  return "#" + color;
};

const HexaColor = () => <div>{hexaColor()}</div>;

const rootElement = document.getElementById("root");
// we render the App component using the ReactDOM package
ReactDOM.render(<HexaColor />, rootElement);
```

2. Use functional component to design the following user card.

![image](https://user-images.githubusercontent.com/4392234/111061107-34e4b200-84d4-11eb-8b9a-8b8b8b8b8b8b.png)

```js
const UserCard = () => (
  <div className="user-card">
    <div className="user-card__image">
      <img src="https://picsum.photos/200/300" alt="random" />
    </div>
    <div className="user-card__info">
      <h3>John Doe</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptates, quae, quod, voluptatibus quibusdam voluptatem quidem
        voluptatum quos doloremque quia voluptas. Quisquam, quae. Quisquam
        voluptates, quae, quod, voluptatibus quibusdam voluptatem quidem
        voluptatum quos doloremque quia voluptas. Quisquam, quae.
      </p>
    </div>
  </div>
);
```

🎉 CONGRATULATIONS ! 🎉

[<< Day 3](../30-Days-Of-React/03_Day_Setting_Up/03_setting_up.md) | [Day 5 >>](../05_Day_Props/05_props.md)
