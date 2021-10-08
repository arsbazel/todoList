import React, {Dispatch, KeyboardEvent, SetStateAction, useState} from "react";
type inputPropsType = {
    callBack  : (value: string) => void
    setNewTaskValue: Dispatch<SetStateAction<string>>
    newTaskValue: string
}

export const Input = (props: inputPropsType) => {

    const [error, setError] = useState<string|null>(null)
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.setNewTaskValue(e.target.value)
        setError(null)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            if (props.newTaskValue === '') {
                setError('Empty input')
                return
            }
            props.callBack(props.newTaskValue);
            setError(null)
        }
            }

    return (
        <div>
            <input value={props.newTaskValue} onChange={onChangeHandler} onKeyPress={onKeyPressHandler}/>
            {error && <div style={{color: 'red'}}>{error}</div>}
        </div>
    )
}

