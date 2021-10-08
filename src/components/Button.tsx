import React from "react";

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