import React from "react";
import ReactDOM from "react-dom/client";
import Heading from "./src/components/Header";
import Body from "./src/components/Body";

const AppLayout = () =>{
    return(
    <div>
    <Heading/>
    <Body/>
    </div>
    );
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);