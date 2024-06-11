import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    value: {
        username:"",
        email: "",
        id: null,
        loggedIn: false
    }
}


export const userSlice = createSlice({
    name: "user",
    initialState:initialState,
    reducers: {
        login: (state, action) => {
            state.value.username = action.payload.username;
            state.value.email = action.payload.email;
            state.value.id = action.payload.id;
            state.value.loggedIn = true;
        },

        logout: (state) => {
            state.value.username = "",
            state.value.email = "",
            state.value.id = null,
            state.value.loggedIn = false
        }
        

    }
})

export const { login, logout } = userSlice.actions;
export default userSlice.reducer