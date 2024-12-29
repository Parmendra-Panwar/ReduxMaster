import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../app/store";

const initialState = [
  {id:'1', title:'Learning the Redux', content:'it is bit harder'},
  {id:'2', title:'Learning the React', content:'it is bit simpler'}
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost(state, action) {
      state.push(action.payload)
    },
  }
})

export const selectAllPost = (state: RootState ) => state.posts

export const { addPost } = postsSlice.actions

export default postsSlice.reducer