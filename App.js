import React from "react";
import ReactDOM from "react-dom/client";
import Heading from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./src/components/Contact";
import About from "./src/components/About";
import Error from "./src/components/Error";

const AppLayout = () =>{
    return(
    <div>
    <Heading/>
    <Outlet/>
    </div>
    );
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<Contact/>
            }
        ],
        errorElement:<Error/>
    },
    
])

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider  router={appRouter} />);