import {v1} from "uuid";
import {
    actionTypes, ADD_TASK,
    CHANGE_TASK_TITLE, FETCH_TASKS,
    IS_DONE_TOGGLE,
    REMOVE_TASK,
    tasksType
} from "../types/tasksTypes";
import {ADD_TODOLIST, REMOVE_TODOLIST} from "../types/todoListTypes";


const initialTasks: tasksType = {['todoListId1']: [{id: v1(), title: "Hello world", isDone: true}]}

export const tasksReducer = (tasks = initialTasks, action: actionTypes): tasksType => {
    switch (action.type) {
        case FETCH_TASKS :
            return {
                ...tasks,
                ...action.tasks
            }
        case ADD_TASK: {
            if (action.value === '') return tasks
            if (action.todoId) {
                const newTask = {id: v1(), title: action.value, isDone: false}
                return {...tasks, [action.todoId]: [newTask, ...tasks[action.todoId]]}
            }
            return tasks
        }
        case REMOVE_TODOLIST : {
            const copy = {...tasks}
            delete copy[action.id]
            return copy
        }
        case ADD_TODOLIST: {
            return {...tasks, [action.id]: []}
        }
        case REMOVE_TASK : {
            return {
                ...tasks, [action.todoId]: tasks[action.todoId].filter((el) => el.id !== action.id)
            }
        }

        case IS_DONE_TOGGLE : {
            return {
                ...tasks, [action.todoId]: tasks[action.todoId]
                    .map((el) => {
                            return el.id === action.e.currentTarget.id ?
                                {...el, isDone: !el.isDone} : el
                        }
                    )
            }
        }
        case CHANGE_TASK_TITLE : {
            return {
                ...tasks, [action.todoId]: tasks[action.todoId].map((t) => {
                    return t.id === action.taskId ? {...t, title: action.text} : t
                })
            }
        }

        default : {
            return tasks
        }

    }
}
