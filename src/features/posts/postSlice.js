import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns"

const initialState = [
    { 
        id: '1', 
        name: 'Learning Redux Toolkit', 
        content: "I've heard good things.", 
        date: sub(new Date(), { minutes: 10}).toISOString(),
        reactions: {
            thumsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0,
        }
    },
    { 
        id: '2', 
        name: 'Slice....', 
        content: "The more i say Slice.. the more i want PIZZA", 
        date: sub(new Date(), { minutes: 10}).toISOString(),
        reactions: {
            thumsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0,
        }
    }
]

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded : {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(name, content, userId) {
                return{
                    payload: {
                        id: nanoid,
                        name,
                        content,
                        date: new Date().toISOString(),
                        userId,
                        reactions: {
                            thumsUp: 0,
                            wow: 0,
                            heart: 0,
                            rocket: 0,
                            coffee: 0,
                        }
                    }
                }
            }
        },
        reactionAdded(state, action) {
            const { postId, reaction } = action.payload
            const existingPost = state.find(post => post.id === postId)
            if ( existingPost ) {
                existingPost.reactions[reaction]++
            }
        }
    }
})

export const selectAllPosts = (state) => state.posts

export const { postAdded, reactionAdded } = postSlice.actions

export default postSlice.reducer