import React from 'react';
import c from './Modal.module.css'

type ModalPropsTypes = {
    visible: boolean
    setVisible: (visible: boolean) => void
}
export const MyModal: React.FC<ModalPropsTypes> = ({setVisible, visible, children}) => {
    let modal = [c.modal]
    if (visible) {
        modal.push(c.active)
    }
    return (
        <div onClick={() => setVisible(false)} className={modal.join(' ')}>
            <div onClick={(e) => e.stopPropagation()} className={c.modalWindow}>{children}</div>
        </div>
    );
};