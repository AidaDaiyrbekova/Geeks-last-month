import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchPosts= createAsyncThunk('comments/fetchComments', async()=> {
const res = await fetch('https://jsonplaceholder.typicode.com/posts')
return res.json()
}) 

const postsSlice = createSlice({
    name:'postsSlice',
    initialState: {
        posts:[],
        status: 'idle',
        error: null
    },
    reducers: {}, 
    extraReducers: builder => {
        builder
        .addCase(fetchPosts.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(fetchPosts.fulfilled, (state, action) => {
            state.status = 'successful'
            state.posts = action.payload
    })
         .addCase(fetchPosts.rejected, (state,action) => {
            state.status = 'failed'
            state.error=action.error.message
        })
    }
})

export default postsSlice.reducer