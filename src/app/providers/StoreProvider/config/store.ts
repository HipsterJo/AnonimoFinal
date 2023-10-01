import { ReducersMapObject, configureStore } from "@reduxjs/toolkit";
import { StateScheme } from "./StateScheme";
import { userReduser } from "../../../../entities/User";
import { loginReducer } from "../../../../features/AuthByUserName";


export function createReduxStore(){
    const rootReducer: ReducersMapObject<StateScheme> = {
            user: userReduser,
            loginForm: loginReducer
    }
    return configureStore<StateScheme>({
        reducer:rootReducer,
        
    })

}