import { configureStore } from "@reduxjs/toolkit"
import postReeducer from '../features/posts/postsSlice'

export const store = configureStore({
  reducer: {
    posts: postReeducer
  }
})


export type AppStore = typeof store
export type RootState = ReturnType<AppStore["getState"]>
export type AppDispatch = AppStore["dispatch"]