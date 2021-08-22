import React from "react";
import {taskType, typeFilter} from "../App";

type propsType = {
        value?: string
    callBack: () => void
    title: string
}

export const Button = (props: propsType) => {
    return (
        <button onClick={props.callBack}>{props.title}
        </button>)
}