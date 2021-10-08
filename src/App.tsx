import React, {FC, useEffect,} from 'react';
import './App.css';
import {Todolist} from './components/Todolist';
import {useDispatch, } from "react-redux";
import {getFilteredTasks} from "./hooks/getFilteredTasks";
import {fetchTasks} from "./store/action-creators/tasksActions";
import {useRemoteState} from "./hooks/useRemoteState";
import {fetchingTodolists} from "./store/action-creators/todoActions";
import {useTypedSelector} from "./hooks/useTypedSelector";


const App: FC = () => {
    const {initialTasks, initialTodoLists} = useRemoteState()
    const dispatch = useDispatch()


    const {tasks, todo} = useTypedSelector((state) => state)

    useEffect(() => {
        dispatch(fetchTasks(initialTasks))
        dispatch(fetchingTodolists(initialTodoLists))
    }, [])
    console.log(todo)
    return (
        <div className="App">

            { todo.length ?
                todo.map((tl) => {
                let filteredTasks = getFilteredTasks(tl.filter, tasks[tl.id])

                return <Todolist
                    key={tl.id}
                    id={tl.id}
                    tasks={filteredTasks}
                    title={tl.title}
                />
            }) : ''}

        </div>
    );
};

export default App;
