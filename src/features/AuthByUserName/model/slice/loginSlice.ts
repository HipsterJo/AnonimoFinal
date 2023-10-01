import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { LoginSchema } from "../types/loginSchema";
import { User } from "../../../../entities/User";


const initialState: LoginSchema = {
    username: "",
    password: "",
    isLoading: false,
    error: ""
};

export const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        setUsername: (state, action:PayloadAction<string>) => {
            state.username = action.payload;
        },
        setPassword: (state, action:PayloadAction<string>) => {
            state.password = action.payload;
        }
        
    },
    extraReducers: (builder) => {
        builder.addCase("login/loginByUsername/pending", (state) => {
            state.isLoading = true;
        });
        builder.addCase("login/loginByUsername/fulfilled", (state) => {
            state.isLoading = false;
        });
        builder.addCase("login/loginByUsername/rejected", (state) => {
            state.isLoading = false;
            state.error = "Ошибка авторизации";
        });
    }
});



export const { actions: loginActions } = loginSlice;
export const  {reducer: loginReducer } = loginSlice;