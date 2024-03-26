import Cart from "./Pages/Cart/Cart"
import Home from "./Pages/Home/Home"
import Products from "./Pages/Products/Products"
import SingleCart from "./Pages/SingleCart/SingleCart"
import SingleProduct from "./Pages/SingleProduct/SingleProduct"
import SingleUser from "./Pages/SingleUser/SingleUser"
import Users from "./Pages/Users/Users"



const routes = [
    {path : '/' , element: <Home />},
    {path : '/products' , element: <Products />},
    {path : '/cart' , element: <Cart />},
    {path : '/users' , element: <Users />},
    {path : '/product/:productId' , element: <SingleProduct />},
    {path : '/cart/:cartId', element:<SingleCart />  },
    {path : '/user/:userId', element:<SingleUser />  }
]



export default routes