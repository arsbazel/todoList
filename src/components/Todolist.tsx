import React from 'react';
import {EditableSpan} from "./EditableSpan";
import {ButtonGroup, Button, Paper, IconButton} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import {AddItemForm} from "./AddItemForm";
import {useDispatch} from "react-redux";
import {addTask, changeTaskTitle, isDoneToggle, removeTask} from "../store/action-creators/tasksActions";
import {taskType} from "../types/tasksTypes";
import {typeFilter} from "../types/todoListTypes";
import {changeTodoListFilter, changeTodoListTitle, removeTodoList} from "../store/action-creators/todoActions";

type PropsType = {
    id: string
    title: string
    tasks: Array<taskType>
}
export function Todolist(props: PropsType) {
    const dispatch = useDispatch()


    const setFilterHandler = (value: typeFilter) => {
       dispatch(changeTodoListFilter(props.id, value))
    }
    return <Paper
        sx={{p: '10px 10px', display: 'flex', alignItems: 'center'}}>

        <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
            <EditableSpan
                text={props.title}
                changeTitle={(text) => dispatch(changeTodoListTitle(props.id, text))}>
                <IconButton size="small" onClick={() => dispatch(removeTodoList(props.id))}
                            aria-label="delete">
                    <DeleteIcon/>
                </IconButton></EditableSpan>
            <div>
                <AddItemForm addItem={(value: string) => {
                    dispatch(addTask(value, props.id))
                }}/>
            </div>
            <ul> {props.tasks.map((mTasks) => {
                    return (
                        <li key={mTasks.id}>
                            <input id={mTasks.id} type="checkbox" onChange={(e) => dispatch(isDoneToggle(e, props.id))}
                                   checked={mTasks.isDone}/>
                            <EditableSpan
                                text={mTasks.title}
                                changeTitle={(text) => dispatch(changeTaskTitle(text, props.id, mTasks.id))} />
                            <IconButton size="small" onClick={() => dispatch(removeTask(mTasks.id, props.id))}
                                        aria-label="delete">
                                <DeleteIcon/>
                            </IconButton>
                        </li>
                    )
                })
            }
            </ul>
            <div>
                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                    <Button onClick={() => setFilterHandler("ALL")}>All</Button>
                    <Button onClick={() => setFilterHandler("ACTIVE")}>Active</Button>
                    <Button onClick={() => setFilterHandler("COMPLETED")}>Completed</Button>
                </ButtonGroup>
            </div>
        </div>
    </Paper>
}
