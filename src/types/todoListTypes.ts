import {removeTodoList} from "../store/action-creators/todoActions";


export interface todoListTypes {
    id: string
    title: string
    filter: string
}


export type typeFilter = 'ALL' | 'ACTIVE' | 'COMPLETED'

export const REMOVE_TODOLIST = "REMOVE_TODOLIST"
export const FETCHING_TODOLIST = "FETCHING_TODOLIST"
export const ADD_TODOLIST = "ADD_TODOLIST"
export const CHANGE_TODOLIST_TITLE = "CHANGE_TODOLIST_TITLE"
export const CHANGE_TODOLIST_FILTER = "CHANGE_TODOLIST_FILTER"

export type todoListsActionTypes = changeTodolistFilterType |removeTodoListType | addTodolistType | fetchingTodolistsType | changeTodolistTitleType

export interface removeTodoListType {
    id: string,
    type: typeof REMOVE_TODOLIST
}
export interface addTodolistType {
    id: string,
    type: typeof ADD_TODOLIST
    title: string
}
export interface fetchingTodolistsType {
    payload: Array<todoListTypes>
    type: typeof FETCHING_TODOLIST
}
export interface changeTodolistTitleType {
    title: string
    id: string,
    type: typeof CHANGE_TODOLIST_TITLE
}
export interface changeTodolistFilterType {
    id: string,
    filter: string,
    type: typeof CHANGE_TODOLIST_FILTER
}



