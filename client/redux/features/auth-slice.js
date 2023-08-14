import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    token: null, 
};
 

export const auth = createSlice({
    name: "auth",
    initialState: initialState,
    reducers:{
        setLogin: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        setLogout: (state) => {
            state.user = null;
            state.token = null;
        },
    }
});

export const { setLogin, setLogout } = auth.actions;
export default auth.reducer;