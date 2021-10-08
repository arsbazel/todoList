
const initialState = {
    isAuth: false,
}


export enum authConstants {
    SET_AUTH = "SET_AUTH",
}

export interface authStateType {
    isAuth: boolean
}

export interface setAuthType {
    type: authConstants.SET_AUTH,
    payload: boolean,
}

export const authReducer = (state = initialState, action: setAuthType) : authStateType => {
    console.log(action)
    switch (action.type) {

        case authConstants.SET_AUTH: {
            return {...state,isAuth: action.payload}
        }
        default:
            return state
    }
}