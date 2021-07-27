import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';

function App() {

    type filterType = "All" | "Active" | "Completed"

    let [tasks1, setTasks] = useState([
            {id: 1, title: "HTML&CSS", isDone: true},
            {id: 2, title: "JS", isDone: true},
            {id: 3, title: "ReactJS", isDone: false},
            {id: 4, title: "HTML&CSS", isDone: true},
            {id: 5, title: "JS", isDone: true},
            {id: 6, title: "ReactJS", isDone: false}
        ]
    )

    let [filter, setFilter] = useState<filterType>("All")

    const remove = (id: number) => {
        tasks1 = tasks1.filter((el) => el.id !== id)
        setTasks(tasks1)
    }

    let setFilterFoo = (filter: filterType) => {
        setFilter(filter)
    }


    let tasksFilter
    tasksFilter = tasks1.filter((el) => {
        if (filter === "Active") {
            return el.isDone
        }
        if (filter === "Completed") {
            return !el.isDone
        } else return true
        })

    const changeIsDone = (id: number) => {
        let tasks = tasks1.map((el) => {
            if (id === el.id) return {
                ...el, isDone: !el.isDone
            }; else {
                return {...el}
            }})
        setTasks(tasks)
    }

    return (
        <div className="App">
            <Todolist title="What to learn" setF={setFilterFoo} change={changeIsDone} remove={remove} tasks={tasksFilter}/>
        </div>
    );
}

export default App;
