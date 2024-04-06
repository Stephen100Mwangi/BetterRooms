// Import createSlice
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    error: null,
    loading: false,
    canLogIn: false,
}

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        signInStart: (state) =>{
            state.loading = true;
        },

        signInSuccess: (state,action)=>{
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
            state.canLogIn = true;
        },

        signInFailure: (state,action) =>{
            state.loading = false;
            state.error = action.payload;

        }
    }
});

export const { signInSuccess, signInStart, signInFailure } = userSlice.actions;

export default userSlice.reducer;