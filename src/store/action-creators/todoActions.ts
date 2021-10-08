import {
    ADD_TODOLIST,
    addTodolistType, CHANGE_TODOLIST_FILTER,
    CHANGE_TODOLIST_TITLE, changeTodolistFilterType, changeTodolistTitleType,
    FETCHING_TODOLIST,
    fetchingTodolistsType,
    REMOVE_TODOLIST,
    removeTodoListType,
    todoListTypes, typeFilter
} from "../../types/todoListTypes";


export const removeTodoList = (id: string) : removeTodoListType  => {
    return {type: REMOVE_TODOLIST, id}
}
export const changeTodoListTitle = (id: string, title: string): changeTodolistTitleType=> {
    return {type: CHANGE_TODOLIST_TITLE, id, title}
}
export const changeTodoListFilter = (id: string, filter: typeFilter): changeTodolistFilterType => {
    return {type: CHANGE_TODOLIST_FILTER, id, filter}
}
export const addTodolist = (id: string, title: string) : addTodolistType => {
    return {type: ADD_TODOLIST, id, title}
}
export const fetchingTodolists = (payload: Array<todoListTypes>): fetchingTodolistsType => {
    return {type: FETCHING_TODOLIST, payload}
}