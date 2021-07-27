import React from "react";

type propsType = {
    el: {
        id: number
    },
    callBack: (id: number) => void
}

export const Button = (props: propsType) => {
    return (
        <button onClick={() => {
            props.callBack(props.el.id)
        }}>x
        </button>)
}