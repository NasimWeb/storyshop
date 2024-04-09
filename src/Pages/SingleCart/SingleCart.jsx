import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import {  useDispatch , useSelector} from 'react-redux';
import { getCartsFromServer } from '../../Redux/Store/Carts';
import PhotoSizeSelectActualOutlinedIcon from "@mui/icons-material/PhotoSizeSelectActualOutlined";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';




export default function SingleCart() {


    const param = useParams();
    const dispatch = useDispatch();
  
    const { data, loading, error } = useSelector((state) => state.carts);

    const mainCart = data.find((cart) => cart.id == param.cartId);

    const [cartId,setCartId] = useState(mainCart ? mainCart.id : sessionStorage.getItem('cart_Id'))
    const [userId,setUserId] = useState(mainCart ? mainCart.userId : sessionStorage.getItem('user_Id'))
    const [date,setDate] = useState(mainCart ? mainCart.date : sessionStorage.getItem('date_cart'))
    const [products , setProducts] = useState(mainCart ? mainCart.products : sessionStorage.getItem('products_cart'))

    useEffect(() => {
      mainCart && (
        setCartId(mainCart.id),
        setUserId(mainCart.userId),
        setDate(mainCart.date),
        setProducts(mainCart.products)
      )

    },[mainCart])


    

    useEffect(() => {
        dispatch(getCartsFromServer('https://fakestoreapi.com/carts'))
        if (mainCart) {
             setCartId(mainCart.id),
             setUserId(mainCart.userId),
             setDate(mainCart.date),
             setProducts(mainCart.products)
        }
    },[])


    useEffect(() => {
        sessionStorage.setItem('cart_Id',cartId)
        sessionStorage.setItem('user_Id',userId)
        sessionStorage.setItem('date_cart',date)
        sessionStorage.setItem('products_cart',products)
    },[cartId,userId,date,products])



   
  return (
    <div  className="grid grid-cols-12 gap-2 dark:bg-black bg-zinc-100">
    <div  
      className="p-4 col-span-12 lg:col-span-9  dark:bg-black bg-zinc-100"
    >
      <h1 className="font-bold text-3xl dark:text-white text-dark">Cart Edit</h1>

      <form
        className="dark:bg-zinc-900 bg-white text-black dark:text-white my-8 flex flex-col flex-wrap rounded-xl p-2"
        action=""
      >
        <h1 className="text-white  font-bold text-xl mb-5">General Info</h1>

        <div className="grid grid-cols-12   gap-4">
          <div className="col-span-12 text-white  lg:col-span-6 ">
            <label
              htmlFor="ID"
              className="text-sm mb-2 inline-block w-full cursor-pointer"
            >
              ID
            </label>
            <input
              type="text"
              placeholder="Id"
              value={cartId}
              disabled
              className="w-full disabled:border-zinc-600 disabled:opacity-50 disabled:shadow-none search-input bg-zinc-800  p-1 transition-all duration-300 ease-in-out hover:border-blue-500 visible::border-0 focus:border-zinc-800 active:border-zinc-800 focus:bg-transparent border-zinc-800 border-2 rounded-lg"
            />
          </div>
          <div className="col-span-12 text-white  lg:col-span-6 ">
            <label
              htmlFor="ID"
              className="text-sm mb-2 inline-block w-full cursor-pointer"
            >
              userId
            </label>
            <input
              type="text"
              placeholder="Id"
              value={userId}
              disabled
              className="w-full disabled:border-zinc-600 disabled:opacity-50 disabled:shadow-none search-input bg-zinc-800  p-1 transition-all duration-300 ease-in-out hover:border-blue-500 visible::border-0 focus:border-zinc-800 active:border-zinc-800 focus:bg-transparent border-zinc-800 border-2 rounded-lg"
            />
          </div>

          <div className="col-span-12 text-white  lg:col-span-12">
            <label
              htmlFor="ID"
              className="text-sm mb-2 inline-block w-full cursor-pointer"
            >
              Date
            </label>
            <input
              type="text"
              placeholder="Id"
              value={date.slice(0,10)}
              disabled
              className="w-full disabled:border-zinc-600 disabled:opacity-50 disabled:shadow-none search-input bg-zinc-800  p-1 transition-all duration-300 ease-in-out hover:border-blue-500 visible::border-0 focus:border-zinc-800 active:border-zinc-800 focus:bg-transparent border-zinc-800 border-2 rounded-lg"
            />
          </div>

         <div className="col-span-12 text-white border-zinc-600 ">
         {
           
           mainCart && (

            mainCart.products.map(product => {
               return (
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background' }}>
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                  </ListItemAvatar>
                  <ListItemText className='dark:text-white text-black'
                    primary={`quantity: ${product.quantity}`}
                    secondary={
                      <React.Fragment className='dark:text-white text-black'>
                        <Typography
                          sx={{ display: 'inline' }}
                          component="span"
                          variant="body2"
                          color="white"
                        >
                          
                        </Typography>
                        <p className='dark:text-white text-black'>{` productId : ${product.productId}`}</p>
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
              </List>
               )
            })

           )
           
              
          }
         </div>
        </div>
      </form>

    

      <div className="dark:bg-zinc-900 bg-white my-8 flex flex-col flex-wrap rounded-xl p-2">
        <h1 className="font-bold text-3xl dark:text-white text-black my-5">Image</h1>
        <div className="mt-2 flex justify-center rounded-lg border border-dashed border-zinc-500/25 px-6 py-10 dark:border-zinc-500/50">
          <div className="mt-2 flex flex-col justify-center rounded-lg  px-6 py-10 dark:border-zinc-500/50">
            <PhotoSizeSelectActualOutlinedIcon
              style={{ fill: "rgba(59 130 246 / 1)" }}
              className="text-blue-500 mx-auto h-12 w-12"
            />
            <div>
              <label
                htmlFor="file-upload"
                className="cursor-pointer rounded-md font-semibold text-zinc-700 focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-600 focus-within:ring-offset-2 focus-within:ring-offset-transparent  transition-all duration-300 ease-in-out text-xs"
              >
                Upload a file
                <input
                  type="file"
                  id="file-upload"
                  className="hidden  disabled:opacity-50 disabled:shadow-none disabled:text-zinc-700"
                 disabled
                />
              </label>
              <span className="text-xs leading-5 text-gray-500 ml-2">
                or drag and drop
              </span>
            </div>
            <p className="text-xs leading-5 text-gray-500">
              PNG, JPG, GIF up to 10MB
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="col-span-12 sticky top-36 lg:col-span-3  dark:bg-zinc-900 bg-white mt-20 flex flex-col flex-wrap rounded-xl p-4 h-fit">
      <h1 className="text-white font-bold text-xl mb-5">Preview</h1>

      <img
        src={'../src/assets/download.png'}
        className="mx-100 h-auto w-full"
        alt="user cart"
        srcset=""
      />
    </div>
  </div>
  )
}
