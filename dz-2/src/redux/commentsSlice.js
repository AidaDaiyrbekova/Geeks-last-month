import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchComments= createAsyncThunk('comments/fetchComments', async()=> {
const res = await fetch('https://jsonplaceholder.typicode.com/comments')
return res.json()
}) 

const commentsSlice = createSlice({
    name:'commentsSlice',
    initialState: {
        comments:[],
        status: 'idle',
        error: null
    },
    reducers: {}, 
    extraReducers: builder => {
        builder
        .addCase(fetchComments.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(fetchComments.fulfilled, (state, action) => {
            state.status = 'successful'
            state.comments = action.payload
    })
         .addCase(fetchComments.rejected, (state,action) => {
            state.status = 'failed'
            state.error=action.error.message
        })
    }
})

export default commentsSlice.reducer