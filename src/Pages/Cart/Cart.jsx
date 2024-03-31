import React from 'react'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import {  useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getCartsFromServer } from '../../Redux/Store/Carts';
import { removeCart } from '../../Redux/Store/Carts';
import './Cart.css'
import { Link } from 'react-router-dom';
import searchDataValue from '../../Context/SearchData';
import { useContext } from 'react';


export default function Cart() {


  const {searchData,setSearchData} = useContext(searchDataValue)



    const dispatch = useDispatch()
    const {data , loading , error} = useSelector(state => state.carts)

    useEffect(()=> {
        dispatch(getCartsFromServer('https://fakestoreapi.com/carts'))
    },[])



    const handleRemoveCart = (cartId) => {
       dispatch(removeCart(`https://fakestoreapi.com/carts/${cartId}`))
    }


    const cartData = sessionStorage.getItem('date_cart')

   

    const columns = [
        { 
        field: 'id',
         headerName: 'ID',
         width: 150 , 
         editable: true,
          valueGetter : (params) => {
                  return (
                `${params.row.id}`
                 )
        }
      },
        {
          false: 'Date',
          headerName : 'Date',
          width: 150,
          editable: true,
          renderCell : (params) =>  {
           return <p className='text-white'>{cartData ? cartData.slice(0,10) : params.row.date.slice(0,10)}</p>
          }
        },
        {
          field: 'userId',
          headerName: 'userId',
          width: 150,
          editable: true,
          valueGetter : (params) => {
              return (
                `${params.row.userId}`
              )
          }
        },
      
        {
            field : 'Actions',
            headerName : 'Actions',
            width:300,
            renderCell : (params) =>  {
               return (
                <div className='flex  gap-3'>
                <Link to={`/cart/${params.row.id}`}><Button className='text-white' variant="contained" color="success">Edit</Button></Link>
                <Button className='text-white' variant="contained" color="error" onClick={() => handleRemoveCart(params.row.id)}>Delete</Button>
                </div>
               )
               }
        }
      ];


    


  return (
     <div className='bg-zinc-900 flex flex-col gap-10'>
        <div className="grid-data"  style={{  width: '100%', overflow: "auto", height :'100%' }}>
      {
        data && (
      <Box sx={{ height: '100vh', width: '100%', overflowX : 'auto' }} >
      <DataGrid
      className='text-white bg-zinc-800'
        rows={searchData ? searchData : data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
      </Box>
        )
      }
      </div>
    </div>
  )
}
