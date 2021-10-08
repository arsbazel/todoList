import {v1} from "uuid";
import {tasksType} from "../types/tasksTypes";
import {todoListTypes} from "../types/todoListTypes";

const todoListId1 = v1()
const todoListId2 = v1()

export const useRemoteState = (): {initialTasks:tasksType, initialTodoLists: Array<todoListTypes>} => {

    const initialTodoLists = [
        {id: todoListId1, filter: "ALL", title: "What to learn"},
        {id: todoListId2, filter: "ALL", title: "What to buy"},
    ]

    const initialTasks = {
        [todoListId1]: [{id: v1(), title: "Hello world", isDone: true},
            {id: v1(), title: "I am Happy", isDone: false},
            {id: v1(), title: "Yo", isDone: false}],
        [todoListId2]: [{id: v1(), title: "Hello world", isDone: true},
            {id: v1(), title: "I am Happy", isDone: false},
            {id: v1(), title: "Yo", isDone: false}]
    }
    return {initialTasks, initialTodoLists}
}