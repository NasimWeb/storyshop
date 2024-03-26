import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";




export const getUsersFromServer = createAsyncThunk('users/getUsersFromServer' , 
async (url) => {
    return (
        await fetch(url).then(res => res.json()).then(data => data)
    )
})





const users = createSlice({
    name: "users",
    initialState: {
        data : [],
        loading : false,
        error : null
    },
    reducers:{},
    extraReducers: (builder) => {
       builder.addCase(getUsersFromServer.pending, (state,action) => {
          return {
            ...state,
            loading: true
          }
       }),
       builder.addCase(getUsersFromServer.fulfilled, (state,action) => {
        return {
            ...state,
            data : action.payload,
            loading : false
        }
       }),
       builder.addCase(getUsersFromServer.rejected, (state,action) => {
        return {
            ...state,
            error : action.error.message
        }
       })
      
    }

})


export default users.reducer

