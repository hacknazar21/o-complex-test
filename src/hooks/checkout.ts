import {FormEvent, useContext, useEffect, useState} from "react";
import {CheckoutContext} from "@/context";

export const useCheckout = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isOpenSuccessModal, setIsOpenSuccessModal] = useState(false);
    const [phoneError, setPhoneError] = useState<string | null>(null);

    const {
        checkout
    } = useContext(CheckoutContext)
    async function createOrder() {
        setIsLoading(true)
        try {
            const resp = await fetch('', {
                method: 'POST',
                body: JSON.stringify(checkout),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            if(resp.ok) {
                setIsOpenSuccessModal(true)
            }
        }catch (e) {

        } finally {
            setIsLoading(false)
        }
    }

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if(!checkout.phone){
            setPhoneError("Заполните поле")
        } else if(!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(checkout.phone)) {
            setPhoneError("Введите корректный номер телефона")
        } else {
            await createOrder()
        }
    }

    function onCloseSuccess() {
        setIsOpenSuccessModal(false)
    }

    useEffect(() => {
        setPhoneError(null)
    }, [checkout.phone])

    return {
        onSubmit, phoneError, isLoading, isOpenSuccessModal, onCloseSuccess
    }
}
