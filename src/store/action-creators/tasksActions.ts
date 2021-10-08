
import {ChangeEvent} from "react";
import {
    ADD_TASK, CHANGE_TASK_TITLE,
    FETCH_TASKS, IS_DONE_TOGGLE,
    REMOVE_TASK,
    tasksType
} from "../../types/tasksTypes";



export const removeTask = (id: string, todoId: string) => {
    return {
        type: REMOVE_TASK, id, todoId
    }
}
export const fetchTasks = (tasks: tasksType)  => {
    return {type: FETCH_TASKS, tasks} as const
}
export const addTask = (value: string, todoId: string) => {
    return {type: ADD_TASK, value: value, todoId} as const
}
export const isDoneToggle = (e: ChangeEvent<HTMLInputElement>, todoId: string) => {
    return {type: IS_DONE_TOGGLE, e, todoId} as const
}

export const changeTaskTitle = (text: string ,todoId: string, taskId: string) => {
    return {type: CHANGE_TASK_TITLE, text, todoId, taskId} as const

}


