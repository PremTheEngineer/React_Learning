import React from "react";
import ReactDOM from "react-dom/client";

// Elements banata hai react and root banata hai react dom
// In the { } we give attributes such as id, class etc
// multiple siblings can be added via an array
// React element is nothing but an object
// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child1" }, [
//     React.createElement(
//       "h1",
//       {},
//       "I am a H1 inside div, thats inside another div"
//     ),
//     React.createElement("p", {}, "This is a paragraph sibling to above h1"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement(
//       "h1",
//       {},
//       "I am another H1 inside div, thats inside another div"
//     ),
//     React.createElement("p", {}, "This is a paragraph sibling to above h1"),
//   ]),
// ]);

// React Component - A function that returns a react element and is reusable, Capitalised name etc
// Class based as well as functional based, but class based are not used much now...

const element = <h1>Another element</h1>;
const HeadingComponent = () => {
  return (
    <div>
      <h1>I am a heading being returned from a functional component</h1>
      {element}
    </div>
  );
};

// Let us now create same using jsx - React element
const parent = (
  <div className="parent">
    <div className="child">
      <h1>I am again a heading but this time written inside jsx</h1>
      <p>I am a paragraph inside of jsx code</p>
      <HeadingComponent />
    </div>
  </div>
);

// But this syntax can get very cluttered so we write jsx
const heading = React.createElement("h1", {}, "Hello world from React");
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);
root.render(<HeadingComponent />);
