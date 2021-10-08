
import {combineReducers} from "redux";
import {todoReducer} from "./todo-reducer";
import {tasksReducer} from "./tasks-reducer";
import {authReducer} from "./auth-reducer";

export type RootState = ReturnType<typeof rootReducer>


export const rootReducer= combineReducers({
    todo: todoReducer,
    tasks: tasksReducer,
    auth: authReducer,
})