import MainRoot from "../components/MainRoot";
import Account from "../pages/Account";
import Add from "../pages/Add";
import Basket from "../pages/Basket";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Product from "../pages/Product";
import ProductDetail from "../pages/ProductDetail";
import Register from "../pages/Register";


const ROUTES = [
    {
        path: '/',
        element: <MainRoot/>,
        children: [
            {
                path: "",
                element: <Home/>
            },
            {
                path: "add",
                element: <Add/>
            },
            {
                path:":id",
                element: <ProductDetail/>
            },
            {
                path:"/product",
                element: <Product/>
            },
            {
                path:"/account",
                element: <Account/>
            },
            {
                path:"/login",
                element: <Login/>
            },
            {
                path:"/register",
                element: <Register/>
            },
            {
                path:"/basket",
                element: <Basket/>
            }
        ]
    }
]

export default ROUTES