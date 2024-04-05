//const heading=React.createElement("h1",{ Id:"test"},"hello world")
        
//put heading inside root (create root for react)
//const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(heading);

const parent = React.createElement(
    "div",
    {id: "parent"},
    [React.createElement(
        "div",
        {id: "Child1" },[
            React.createElement(
                "h1", {} ,"H1 tag"
                ),
                React.createElement(
                    "h2",{},"h2 tag child 1"
                    )
    ]), 
    React.createElement(
        "div",
        {id:"child2"},[
            React.createElement(
                "h1",{},"h1 child2"),
                React.createElement(
                    "h2",{},"h2 tag child 2")
            ]
        )
    ] );   
console.log(parent);

const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);