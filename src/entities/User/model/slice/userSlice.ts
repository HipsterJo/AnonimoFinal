import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserScheme, User } from "../types/user";



const initialState: UserScheme = {
    authData: undefined
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setAuthData: (state, action:PayloadAction<User>) => {
            state.authData = action.payload;
        },

        removeAuthData: (state) => {
            state.authData = undefined;
        }
    },

});


export const { actions: userActions } = userSlice;
export const{reducer: userReduser } = userSlice;