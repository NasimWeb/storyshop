import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./Store/Users";
import productReducer from './Store/Products'
import cartReducer from './Store/Carts'
import categoryReducer from './Store/Categories'



const Store = configureStore({
   reducer:{
      users : usersReducer,
      products : productReducer,
      carts : cartReducer,
      categories : categoryReducer
   }
})

export default Store