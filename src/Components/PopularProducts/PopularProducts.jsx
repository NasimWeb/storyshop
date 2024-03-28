import React, { useEffect } from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { getAllProductsFromServer } from '../../Redux/Store/Products';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import './PopularProducts.css'




export default function PopalurProduct() {


  const dispatch = useDispatch();
  const {data , loading , error} = useSelector(state => state.products)

  useEffect(()=> {
    dispatch(getAllProductsFromServer('https://fakestoreapi.com/products?limit=5'))
  },[])

  const columns = [
    { 
    field: 'id',
     headerName: 'ID',
     width: 100 , 
     editable: true,
      valueGetter : (params) => {
              return (
            `${params.row.id}`
             )
    }
  },
    {
      false: 'Image',
      headerName : 'Image',
      width: 100,
      editable: true,
      renderCell : (params) =>  {
       return <img className='w-14 h-auto' src={`${params.row.image}`} alt="" />
      }
    },
    {
      field: 'Name',
      headerName: 'Product Name',
      width: 200,
      editable: true,
      valueGetter : (params) => {
          return (
            `${params.row.title}`
          )
      }
    },
    {
      field: 'Category',
      headerName: 'Category',
      width: 100,
      editable: true,
      valueGetter : (params) => {
        return (
          `${params.row.category}`
        )
    }
    },
    {
      field: 'rate',
      headerName: 'Rate',
      type: 'number',
      width: 100,
      editable: true,
      valueGetter : (params) => {
        return (
          `${params.row.rating.rate}`
        )
    }
    },
    {
      field: 'count',
      headerName: 'Count',
      type: 'number',
      width: 100,
      editable: true,
      valueGetter : (params) => {
        return (
          `${params.row.rating.count}`
        )
    }
    },
  ];



  return (
    <div className='flex flex-1 flex-col hidden lg:block w-full bg-zinc-900 px-3 py-2 rounded-lg'>
     
      <h1 className='text-xl font-bold text-white mb-5'>Popular Products</h1>

      {
        data.length && (

      <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
      className='text-white'
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
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
  )
}
