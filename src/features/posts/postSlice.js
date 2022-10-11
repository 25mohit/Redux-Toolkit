import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    { id: '1', name: 'Learning Redux Toolkit', content: "I've heard good things."},
    { id: '2', name: 'Slice....', content: "The more i say Slice.. the more i want PIZZA"}
]

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded : {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(name, content) {
                return{
                    payload: {
                        id: nanoid,
                        name,
                        content
                    }
                }
            }
        }
    }
})

export const selectAllPosts = (state) => state.posts

export const { postAdded } = postSlice.actions

export default postSlice.reducer