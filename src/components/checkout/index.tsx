'use client';
import React, {useContext} from 'react';
import {CheckoutContext} from "@/context";
import checkout_styles from './checkout.module.css'
import {useCheckout} from "@/hooks";
import {createPortal} from "react-dom";
import Modal from "@/components/modal";

interface CheckoutProps {

}

export default function Checkout({}: CheckoutProps) {
    const {
        checkout, onRemoveProduct, onInputPhone
    } = useContext(CheckoutContext)
    const {
        onSubmit, phoneError, isOpenSuccessModal, isLoading, onCloseSuccess
    } = useCheckout()
    if (checkout.cart.length > 0)
        return (
            <>
                <div className={checkout_styles.checkout}>
                    <h4 className={checkout_styles.checkout__title}>Добавленные товары</h4>
                    <div className={checkout_styles.checkout__positions}>
                        {
                            checkout.cart.map(position => (
                                <div key={position.id} className={checkout_styles.position}>
                                    <p className={checkout_styles.position__name}>{position.name}</p>
                                    <p className={checkout_styles.position__quantity}>x{position.quantity}</p>
                                    <p className={checkout_styles.position__price}>
                                        {position.price * position.quantity}₽
                                    </p>
                                    <button className={checkout_styles.position__remove_button} onClick={() => {
                                        onRemoveProduct(position.id)
                                    }}>Удалить
                                    </button>
                                </div>
                            ))
                        }
                    </div>
                    <form onSubmit={onSubmit} className={checkout_styles.checkout_form} action="">
                        <div className={checkout_styles.checkout_form__input_box}>
                            <input
                                onInput={(event) => {
                                    onInputPhone((event.target as HTMLInputElement).value)
                                }}
                                style={!!phoneError ? {borderColor: 'red'} : {}}
                                value={checkout.phone} placeholder={'+7 (___) ___ __-__'}
                                className={checkout_styles.checkout_form__input}
                            />
                            {!!phoneError && <p className={checkout_styles.checkout_form__input_error}>{phoneError}</p>}
                        </div>
                        <button disabled={isLoading} className={checkout_styles.checkout_form__button}>Заказать</button>
                    </form>
                </div>
                {isOpenSuccessModal && createPortal(
                    <Modal onClose={onCloseSuccess} modal_id='order_creation_success'>
                        <h1 className={checkout_styles.success_title}>Заказ успешно оформлен!</h1>
                        <p className={checkout_styles.success_text}>
                            Поздравляем! Вы оформили заказ и теперь мы им займемся!
                        </p>
                        <button onClick={onCloseSuccess} className={checkout_styles.success_button}>Закрыть</button>
                    </Modal>,
                    document.body
                )}
            </>
        );
    return <></>
}
