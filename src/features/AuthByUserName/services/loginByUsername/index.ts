import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
import { User, userActions } from "../../../../entities/User";
import { USER_LOCALSTORAGE_KEY } from "../../../../shared/config/routeConfig/const";


export interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk <User, LoginByUsernameProps>(
    "login/loginByUsername",
    async (authData, thunkAPI) => {
        try {
            const temp={
                email:authData.username,
                password:authData.password
            }
            const response = await axios.post<User>("http://localhost:1000/auth/login", temp);

            if (!response.data) {
                throw new Error();
            }

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            thunkAPI.dispatch(userActions.setAuthData(response.data));

            return response.data;
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue("error");
        }
    },
);

 