import React from "react";
import ReactDOM from "react-dom/client";

// Elements banata hai react and root banata hai react dom
// In the { } we give attributes such as id, class etc
// multiple siblings can be added via an array
// React element is nothing but an object
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement(
      "h1",
      {},
      "I am a H1 inside div, thats inside another div"
    ),
    React.createElement("p", {}, "This is a paragraph sibling to above h1"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement(
      "h1",
      {},
      "I am another H1 inside div, thats inside another div"
    ),
    React.createElement("p", {}, "This is a paragraph sibling to above h1"),
  ]),
]);
// But this syntax can get very cluttered so we write jsx
const heading = React.createElement("h1", {}, "Hello world from React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);