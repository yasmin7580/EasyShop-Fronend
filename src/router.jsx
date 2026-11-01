import { createBrowserRouter } from "react-router";
import Root from "./Root/Root";
import Home from "./Pages/Home/Home";
import Shop from "./Pages/Shop";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

const router = createBrowserRouter([
    {
        path:"/",
        Component:Root,
        children:[
            {
                index:true,
                Component:Home
            },
            {
                path:"/shop",
                Component:Shop
            },{
                path:"/about",
                Component:About
            },{
                path:"/contact",
                Component:Contact
            }
        ]
    }
])
export default router