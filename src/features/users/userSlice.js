import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '0', name: "Mohit Agarwal" },
    { id: '1', name: "Chunnu Gupta" },
    { id: '2', name: "Kittu Verma" },
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers:{}
})

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer