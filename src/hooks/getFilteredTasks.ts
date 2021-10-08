import {taskType} from "../types/tasksTypes";


export const getFilteredTasks = (filter: string, tasks: Array<taskType>) => {
    if (filter === 'ACTIVE') {
        return tasks.filter(el => !el.isDone)
    }
    if (filter === 'COMPLETED') {
        return tasks.filter(el => el.isDone)
    }
    else return tasks
}