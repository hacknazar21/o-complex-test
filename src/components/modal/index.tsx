'use client'

import React, {PropsWithChildren} from 'react';
import modal_styles from './modal.module.css'
interface ModalProps {
    modal_id: string;
    onClose: () => void
}

export default function Modal({
                                  modal_id , children, onClose
                              }: PropsWithChildren<ModalProps>) {
    return (
        <div id={modal_id} className={modal_styles.modal}>
            <div className={modal_styles.modal_content}>
                <span onClick={onClose} className={modal_styles.close}>&times;</span>
                {children}
            </div>
        </div>
    );
}
