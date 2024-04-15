import React from "react";
import ReactDOM from "react-dom/client";

const title = (<h1 className="head">Namaste Bhai !!</h1>);

const HeadingComp =()=>(
    <div id="container">
        {title}
        <h1 ClassName="heading">Namste Functional comp</h1>
    </div>

);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComp/>);
