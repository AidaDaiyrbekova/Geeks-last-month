import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


export const fetchPosts = createAsyncThunk('posts/fetchPosts', async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
     return res.json()
})

const postSlise = createSlice({
     name:"posts",
    initialState: {
        posts: [],
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: builder => {
    builder
    .addCase(fetchPosts.pending, (state) => {state.status = 'loding'})
    .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succesful'
        state.posts = action.payload
    })
    .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
    })
    }
})

export default postSlise.reducer