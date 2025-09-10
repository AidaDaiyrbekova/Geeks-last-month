import { configureStore } from "@reduxjs/toolkit";
import commentsReducer from '../redux/commentsSlice'
import postsReducer from '../redux/postsSlice'
import photosReducer from '../redux/photosSlice'

export const store = configureStore({
    reducer: {
        commentsReducer,
        postsReducer,
        photosReducer

    }
})