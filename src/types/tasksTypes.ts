import {ChangeEvent} from "react"
import {addTodolistType, removeTodoListType} from "./todoListTypes";

export interface taskType {
    id: string
    title: string
    isDone: boolean
}

export interface tasksType {
    [x: string]: Array<taskType>
}

export const FETCH_TASKS = "FETCH_TASKS"
export const ADD_TASK = "ADD_TASK"
export const REMOVE_TASK = "REMOVE_TASK"
export const IS_DONE_TOGGLE = "IS_DONE_TOGGLE"
export const CHANGE_TASK_TITLE = "CHANGE_TASK_TITLE"

// export enum tasksActions {
//  FETCH_TASKS = "FETCH_TASKS",
// ADD_TASK = "ADD_TASK",
// //     REMOVE_TASK = "REMOVE_TASK",
// //     IS_DONE_TOGGLE = "IS_DONE_TOGGLE",
// //     CHANGE_TASK_TITLE = "CHANGE_TASK_TITLE"
// }


export type actionTypes = removeTodoListType
    | addTaskType
    | fetchTasksACType
    | isDoneToggleACType
    | removeTaskACType
    | changeTaskTitleACType
| addTodolistType

interface addTaskType {
    type: typeof ADD_TASK,
    todoId: string,
    value: string
}

interface fetchTasksACType {
    type: typeof FETCH_TASKS,
    tasks: tasksType
}

interface isDoneToggleACType {
    e: ChangeEvent<HTMLInputElement>,
    type: typeof IS_DONE_TOGGLE,
    todoId: string
}

interface removeTaskACType {
    id: string,
    type: typeof REMOVE_TASK,
    todoId: string
}

interface changeTaskTitleACType {
    text: string,
    type: typeof CHANGE_TASK_TITLE,
    todoId: string,
    taskId: string
}
