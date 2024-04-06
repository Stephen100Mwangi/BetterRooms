import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email:"",
    password:"",
    loggedIn: false
}

const userSlice = createSlice({
    name:"users",
    initialState,
    reducers:{
        login:((state,action)=>{
            const { email, password } = action.payload;
            state.email = email;
            state.password = password;
            state.loggedIn = true;
        })
    }

})


export const { login } = userSlice.actions;
export default userSlice.reducer