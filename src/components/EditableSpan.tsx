import React, {ChangeEvent, useState} from "react";

interface Props {
    changeTitle: (title: string) => void
    text: string
}


export const EditableSpan: React.FC<Props> = ({text, changeTitle}) => {
    const [editMode, setEditMode] = useState(false)
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        changeTitle(e.currentTarget.value)
    }
return (
    editMode ?
        <input onChange={onChangeHandler} autoFocus value={text} onBlur={() => setEditMode(false)} /> :
        <span onDoubleClick={() => setEditMode(true)}>{text}</span>
)
}