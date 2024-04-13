import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
    "div",
    {id:"parent"},
   [ React.createElement(
    "div",
    {id:"child"},
[React.createElement("h1",{},"i am H1 tag"),
React.createElement("h2",{},"I am h2")]
), React.createElement(
    "div",
    {id:"child2"},
[React.createElement("h1",{},"i am H1 tag"),
React.createElement("h2",{},"I am h2")]
)]
);
console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
