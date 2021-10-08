import {v1} from "uuid";
import {todoReducer} from "./todo-reducer";
import {removeTodoList} from "./action-creators/todoActions";
import {tasksReducer} from "./tasks-reducer";

test("key in tasks obj and obj in todolist's array should be removed", () => {
    const initialTodoLists = [

        {id: 'todoListId1', filter: "ALL", title: "What to learn"},
        {id: 'todoListId2', filter: "ALL", title: "What to buy"},
    ]

    const initialTasks = {
        ['todoListId1']: [{id: v1(), title: "Hello world", isDone: true},
            {id: v1(), title: "I am Happy", isDone: false},
            {id: v1(), title: "Yo", isDone: false}],
        ['todoListId2']: [{id: v1(), title: "Hello world", isDone: true},
            {id: v1(), title: "I am Happy", isDone: false},
            {id: v1(), title: "Yo", isDone: false}]
    }
    const action = removeTodoList("todoListId1")
   const endTodoLists = todoReducer(initialTodoLists, action)
       const endTasks = tasksReducer(initialTasks, action)
    expect(endTasks["todoListId1"]).toEqual(undefined)
    expect(endTodoLists.length).toBe(1)
})