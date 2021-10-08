import {authConstants, setAuthType} from "../auth-reducer";

export const setAuth = (isAuth: boolean): setAuthType => {
     return {type: authConstants.SET_AUTH, payload: isAuth}
}