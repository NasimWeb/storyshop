import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import Swal from 'sweetalert2'


export const getAllProductsFromServer = createAsyncThunk('products/getAllProductsFromServer', 
  async (url) => {
   return (
    await fetch(url).then(res => res.json()).then(data => data)
   )
})



export const editProduct = createAsyncThunk('products/editProduct', 
  async (url) => {
    await fetch(url, {
        method:"PUT",
        body:JSON.stringify(
            {
                title: localStorage.getItem('Temp_data'),
                price: localStorage.getItem('Price_data'),
                description: localStorage.getItem('Desc_data'),
                image: localStorage.getItem('Image_data'),
                category: localStorage.getItem('Category_data')
            }
        )
    }).then(res => res.json()).then(data => data)
   }
)

export const deleteProduct = createAsyncThunk('products/deleteProduct', 
 async (url) => {
    await fetch(url, {
        method:"DELETE"
    }).then(res => res.json()).then(data => data)
  }
)



const products = createSlice({
    name:'products',
    initialState : {
        data:[],
        loading : false,
        error : null
    },
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(getAllProductsFromServer.pending, (state,action) => {
            return {
                ...state,
                loading : true
            }
        }),
        builder.addCase(getAllProductsFromServer.fulfilled, (state,action) => {
            return {
                ...state,
                data : action.payload,
                loading : false
            }
        }),
        builder.addCase(getAllProductsFromServer.rejected, (state , action) => {
            return {
                ...state,
                error : action.error.message
            }
        }),
        builder.addCase(editProduct.pending, (state,action) => {
            return {
                ...state,
                loading : true
            }
        }),
        builder.addCase(editProduct.fulfilled, (state,action) => {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Edited successfully",
                showConfirmButton: false,
                timer: 1500
              });
        }),
        builder.addCase(editProduct.rejected, (state,action) => {
            return {
                ...state,
                error : action.error.message
            }
        }),
        builder.addCase(deleteProduct.fulfilled, (state,action) => {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Deleted successfully",
                showConfirmButton: false,
                timer: 1500
              });
        })
    }
})





export default products.reducer