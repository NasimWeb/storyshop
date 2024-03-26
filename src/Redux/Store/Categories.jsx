import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";


export const getAllCategoriesFromServer = createAsyncThunk('Categories/getAllCategoriesFromServer', 
 async (url) => {
  return (
    await fetch(url).then(res => res.json()).then(data =>data)
  )
  }
)





const categories = createSlice({
    name : 'categories',
    initialState : {
        data : [],
        loading : false,
        error : null
    },
    reducers : {},
    extraReducers: (builder) => {
     builder.addCase(getAllCategoriesFromServer.pending, (state , action) => {
        return{
            ...state,
            loading : true
        }
     }),
     builder.addCase(getAllCategoriesFromServer.fulfilled, (state , action) => {
        return {
            ...state,
            loading : false,
            data : action.payload
        }
     }),
     builder.addCase(getAllCategoriesFromServer.rejected, (state,action) => {
        return {
            ...state,
            error : action.error.message
        }
     })
    }
})


export default categories.reducer