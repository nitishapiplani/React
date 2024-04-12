//const heading=React.createElement("h1",{ Id:"test"},"hello world")
        
//put heading inside root (create root for react)
//const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(heading);

// const parent = React.createElement(
//     "div",
//     {id: "parent"},
//     [React.createElement(
//         "div",
//         {id: "Child1" },[
//             React.createElement(
//                 "h1", {} ," Nitisha"
//                 ),
//                 React.createElement(
//                     "h2",{},"h2 child 1"
//                     )
//     ]), 
//     React.createElement(
//         "div",
//         {id:"child2"},[
//             React.createElement(
//                 "h1",{},"h1 child2"),
//                 React.createElement(
//                     "h2",{},"h2 tag child 2")
//             ]
//         )
//     ] );   
// console.log(parent);

// const root= ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);
// React.createElement => React element - JS object => Html Element (render)
import React from "react";
import ReactDOM from "react-dom/client";

//react element
const heading = React.createElement("h1",{id:"heading"},"hi");
const root =ReactDOM.createRoot(document.getElementById("root"));

console.log(heading);
//JSX - combine html and js together(jsx code is transpiles by parcel to ES6 before it goes to JS engine. Parcel does not do by its own it is done by babel)

// create H1 using jsx

//JSX => bable transpiles to React.createElement => React element - JS object => Html Element (render)
const jsx_head = (<h1 className="jsx_head">Hi JSX💕</h1>);
console.log(jsx_head);

root.render(jsx_head);
root.render(heading);

//React Components - everything is a component in react
// class based components - Old way of writing code
// functional components - new way of writing code(jasic js functions) - function returning jsx 
// const HeadingComp= () =>{
//     return <h1 className="test">functional component</h1>;
// };

const Title = () => (
    <h1 className="title">title</h1>
);
const HeadingComp2= () =>(
    <div id="t">
        {jsx_head}
        <Title />
            <h1 className="test">functional component</h1>
    </div>
);
root.render(<HeadingComp2 />);