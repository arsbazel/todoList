import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from "uuid";

export type typeFilter = 'All' | 'Active' | 'Completed'
export type tasksType = {
    [x: string]: Array<taskType>
}
export type taskType = {

    id: string
    title: string
    isDone: boolean
}
type todoListsTypes = {
    id: string
    title: string
    filter: typeFilter
}


function App() {


    const todoListId1 = v1()
    const todoListId2 = v1()
    const [todoLists, setTodoLists] = useState<Array<todoListsTypes>>([
        {id: todoListId1, filter: "All", title: "What to learn"},
        {id: todoListId2, filter: "All", title: "What to buy"},
    ])

    const [tasks, setTasks] = useState<tasksType>({
        [todoListId1]: [{id: v1(), title: "Hello world", isDone: true},
            {id: v1(), title: "I am Happy", isDone: false},
            {id: v1(), title: "Yo", isDone: false}],
        [todoListId2]: [{id: v1(), title: "Hello world", isDone: true},
            {id: v1(), title: "I am Happy", isDone: false},
            {id: v1(), title: "Yo", isDone: false}]
    })
    const removeTask = (id: string, todoId: string) => {
        tasks[todoId] = tasks[todoId].filter((el) => el.id !== id)
        return setTasks({...tasks})
    }
    const addTask = (value: string, todoId: string) => {
        if (value === '') return
        const newTask = {id: v1(), title: value, isDone: false}
        return setTasks({...tasks, [todoId]: [newTask, ...tasks[todoId]]})
    }
    const changeIsDone = (e: ChangeEvent<HTMLInputElement>, todoId: string,) => {
        let arr = tasks[todoId].map((el) => {
            if (el.id === e.currentTarget.id) {
                el.isDone = !el.isDone
                return el
            }
            return el
        })
        setTasks({...tasks, [todoId]: arr})
    }

    const changeFilter = (filter: typeFilter, todoId: string) => {

        setTodoLists([...todoLists.map(tl => tl.id === todoId ? {...tl, filter: filter} : tl) ])
    }

    return (
        <div className="App">
            {todoLists.map((tl) => {
                let filteredTasks = tasks[tl.id]

                if (tl.filter === 'Active') {
                    filteredTasks = tasks[tl.id].filter(el => !el.isDone)
                }
                if (tl.filter === 'Completed') {
                    filteredTasks = tasks[tl.id].filter(el => el.isDone)
                }
                return <Todolist
                    addTask={addTask}
                    key={tl.id}
                    id={tl.id}
                    changeIsDone={changeIsDone}
                    tasks={filteredTasks}
                    changeFilter={changeFilter}
                    title={tl.title}
                    removeTask={removeTask}
                />
            })}

        </div>
    );
}

export default App;
