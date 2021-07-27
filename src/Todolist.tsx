import React from 'react';
import {Button} from "./components/Button";

type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    remove: (id: number) => void
    change: (id: number) => void
    setF: (filter: "All" | "Active" | "Completed") => void
}

export function Todolist(props: PropsType) {
    return <div>
        <h3>{props.title}</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul>
            {props.tasks.map((el:TaskType) => {
                return (<li key={el.id}>
                    <input type="checkbox" onClick={() => props.change(el.id)} checked={el.isDone}/>
                    <Button callBack={props.remove} el={el}/>
                    <span>{el.title}</span>

                </li> )
            })}
        </ul>
        <div>
            <button onClick={() => props.setF("All")}>All</button>
            <button onClick={() => props.setF("Active")}>Active</button>
            <button onClick={() => props.setF("Completed")}>Completed</button>
        </div>
    </div>
}
