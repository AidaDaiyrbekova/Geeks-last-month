import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchPhotos= createAsyncThunk('comments/fetchPhotos', async()=> {
const res = await fetch('https://jsonplaceholder.typicode.com/photos')
return res.json()
}) 

const photosSlice = createSlice({
    name:'photosSlice',
    initialState: {
        photos:[],
        status: 'idle',
        error: null
    },
    reducers: {}, 
    extraReducers: builder => {
        builder
        .addCase(fetchPhotos.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(fetchPhotos.fulfilled, (state, action) => {
            state.status = 'successful'
            state.photos = action.payload
    })
         .addCase(fetchPhotos.rejected, (state,action) => {
            state.status = 'failed'
            state.error=action.error.message
        })
    }
})

export default photosSlice.reducer