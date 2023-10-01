import { UserScheme } from "../../../../entities/User";
import { LoginSchema } from "../../../../features/AuthByUserName";

export interface StateScheme{
    user: UserScheme;
    loginForm: LoginSchema;
}