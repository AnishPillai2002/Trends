
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

//importing pages
import Home from "./pages/Home/Home.jsx";
import Product from "./pages/Product/Product.jsx";
import Products from "./pages/Products/Products.jsx";

//importing components
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";

//importing app.scss
import "./app.scss";

//Creating a Layout Function
const Layout = ()=>{
  return(
    <div className="app">
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}


// Add all the routes here
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>,
      },

      {
        path:"/products/:id",   
        element:<Products/>,
      },

      {
        path:"/product/:id",
        element:<Product/>,
      },
    ]
  },

]);


function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
