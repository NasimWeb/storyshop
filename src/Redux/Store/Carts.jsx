import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

export const getCartsFromServer = createAsyncThunk('Carts/getCartsFromServer' , 
 async  (url) => {
   return (
    await fetch(url).then(res => res.json()).then(data => data) 
   )
  }
)

export const updateCart = createAsyncThunk('Carts/updateCart', 
async (url) => {
  return (
    await fetch(url, {
      method:"PUT",
      body:JSON.stringify(
        {
            userId:sessionStorage.getItem('user_Id'),
            date:sessionStorage.getItem('date_cart'),
            products:sessionStorage.getItem('products_cart')
        }
    )
    }).then(res => res.json()).then(data => data)
  )
}
)


export const removeCart = createAsyncThunk('Carts/removeCart', 
 async (url) => {
  await fetch(url, {
    method : 'DELETE'
  }).then(res => res.json()).then(data => data)
 }
)




const Carts = createSlice({
    name : 'Carts',
    initialState : {
        data : [],
        loading : false,
        error : null
    },
    reducers:{},
    extraReducers : (builder) => {
      builder.addCase(getCartsFromServer.pending, (state , action) => {
        return{
            ...state,
            loading : true,
        }
      }),
      builder.addCase(getCartsFromServer.fulfilled, (state , action) => {
        return{
            ...state,
            loading : false,
            data : action.payload
        }
      }),
      builder.addCase(getCartsFromServer.rejected, (state,action) => {
        return{
            loading:false,
            error : action.error.message
        }
      }),
      builder.addCase(updateCart.fulfilled, (state,action) => {
        Swal.fire({
          position: "top-end",
          title : 'updated sucessfully',
          icon:'success',
          showConfirmButton: false,
          timer : 1500
        })
      }),
      builder.addCase(updateCart.rejected, (state,action) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "updated successfully",
          showConfirmButton: false,
          timer: 1500
        })
      }),
      builder.addCase(removeCart.fulfilled, (state,action) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Deleted successfully",
          showConfirmButton: false,
          timer: 1500
        })
      })
    }
})




export default Carts.reducer