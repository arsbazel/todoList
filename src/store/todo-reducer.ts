import {
    CHANGE_TODOLIST_FILTER,
    CHANGE_TODOLIST_TITLE,
    FETCHING_TODOLIST,
    REMOVE_TODOLIST,
    todoListsActionTypes,
    todoListTypes
} from "../types/todoListTypes";
import {useRemoteState} from "../hooks/useRemoteState";


const initialState: Array<todoListTypes> = [ {id: 'todoListId1', filter: "ALL", title: "What to learn"}]


export const todoReducer = (state: Array<todoListTypes> = initialState, action: todoListsActionTypes): todoListTypes[] => {
    switch (action.type) {
        case REMOVE_TODOLIST : {
            return [...state.filter((el) => el.id !== action.id)]
        }
        case FETCHING_TODOLIST: {
            return [...action.payload]
        }
        case CHANGE_TODOLIST_FILTER: {
            return [...state.map(tl => tl.id === action.id ? {...tl, filter: action.filter} : tl)]
        }
        case CHANGE_TODOLIST_TITLE: {
            return [...state.map(tl => tl.id === action.id ? {...tl, title: action.title} : tl)]
        }
        default : {
            return state
        }

    }
}