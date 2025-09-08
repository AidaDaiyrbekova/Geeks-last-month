import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../posts/postSlise"

export const store = configureStore({
    reducer: {
        postsReducer
    }
})