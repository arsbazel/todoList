import React, {useState, KeyboardEvent, MouseEvent, ChangeEvent} from 'react';
import {taskType, typeFilter} from "./App";
import {Button} from "./components/Button";
import {Input} from "./components/Input";


type PropsType = {
    addTask:  (value: string, todoId: string) => void
    id: string
    title: string
    tasks: Array<taskType>
    removeTask: (el: string, todoId: string) => void
    changeFilter: (filter: typeFilter, todoId: string) => void
    changeIsDone: (e: React.ChangeEvent<HTMLInputElement>, todoId: string) => void
}

export function Todolist(props: PropsType) {

    const [newTaskValue, setNewTaskValue] = useState('')

    const addTask = (value: string) => {
props.addTask(newTaskValue, props.id)
    }
    const addTaskHandler = () => {
        addTask(newTaskValue)
    }
    const changeIsDone = (e: ChangeEvent<HTMLInputElement>) => {
      props.changeIsDone(e, props.id)
    }

    const removeTask = (id: string) => {
        props.removeTask(id, props.id)
    }
    const setFilterHandler = (value: typeFilter) => {
        props.changeFilter(value, props.id)
    }

    return <div>
        <h3>{props.title}</h3>
        <div>
            <Input newTaskValue={newTaskValue} setNewTaskValue={setNewTaskValue} addTask={addTask}/>
            <Button callBack={addTaskHandler} title={'+'}/>
        </div>
        <ul>

            {props.tasks.map((mTasks) => {
                return (
                    <li key={mTasks.id}>
                        <Button callBack={() => removeTask(mTasks.id)} title={"x"}/>

                        <input id={mTasks.id} type="checkbox" onChange={changeIsDone} checked={mTasks.isDone}/>
                        <span>{mTasks.title}</span>
                    </li>
                )
            })}


        </ul>
        <div>
            <Button callBack={() => setFilterHandler('All')} title={'All'} />
            <Button callBack={() => setFilterHandler('Active')} title={'Active'} />
            <Button callBack={() => setFilterHandler('Completed')} title={'Completed'} />
        </div>
    </div>
}
