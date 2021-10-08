import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {AddBox} from "@mui/icons-material";
import {IconButton, Paper, TextField} from "@mui/material";

type AddItemFormPropsType = {
    addItem: (title: string) => void
}

export function AddItemForm(props: AddItemFormPropsType) {

    let [title, setTitle] = useState("")
    let [error, setError] = useState<string | null>(null)

    const addItem = () => {
        if (title.trim() !== "") {
            props.addItem(title);
            setTitle("");
        } else {
            setError("Title is required");
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);

        if (e.key === "Enter" && title.trim() !== "") {
            addItem();
        }
    }

    return  <Paper
        sx={{ display: 'flex', alignItems: 'center', width: 200}}
    >

        <TextField
            size='small'
            variant="outlined"
                   error={!!error}
                   value={title}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
                   label="Title"
                   helperText={error}

        />
        <IconButton disabled={title.trim() === ""} color="primary" onClick={addItem}>
            <AddBox />
        </IconButton>
    </Paper>
}
