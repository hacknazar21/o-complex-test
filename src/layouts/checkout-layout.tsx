'use client'

import React, {PropsWithChildren, useEffect, useState} from 'react';
import {CheckoutContext} from "@/context";
import {Checkout, Product} from "@/types";

interface CheckoutLayoutProps {

}

export default function CheckoutLayout({
                                           children
                                       }: PropsWithChildren<CheckoutLayoutProps>) {
    const [checkout, setCheckout] = useState<Checkout>({
        cart: []
    } as Checkout)

    function onAddProduct(product: Product) {
        const position = {
            quantity: 1,
            id: product.id,
            name: product.title,
            price: product.price
        }
        if (!!checkout)
            setCheckout(
                prevState => ({
                    ...prevState,
                    cart: [position,...prevState.cart]
                })
            )
        else
            setCheckout({
                cart: [position]
            } as Checkout)
    }

    function onRemoveProduct(product_id: number) {
        setCheckout(
            prevState => ({
                ...prevState,
                cart: prevState.cart.filter(prevProduct => prevProduct.id !== product_id)
            })
        )
    }

    function onAddPosition(product_id: number) {
        setCheckout(
            prevState => ({
                ...prevState,
                cart: prevState.cart.map(prevProduct => {
                    if (prevProduct.id === product_id) {
                        return {
                            ...prevProduct,
                            quantity: prevProduct.quantity + 1
                        }
                    }
                    return prevProduct
                })
            })
        )
    }

    function onRemovePosition(product_id: number) {
        setCheckout(
            prevState => ({
                ...prevState,
                cart: prevState.cart.map(prevProduct => {
                    if (prevProduct.id === product_id) {
                        return {
                            ...prevProduct,
                            quantity: prevProduct.quantity - 1
                        }
                    }
                    return prevProduct
                })
            })
        )
    }

    function isProductInCart(product_id: number) {
        return checkout.cart?.some(product => product.id === product_id)
    }

    function getPositionLength(product_id: number) {
        const find_position = checkout.cart.find(product => product.id === product_id);
        return find_position ? find_position.quantity : 0;
    }

    function onInputPhone(text: string) {
        setCheckout(prevState => ({
            ...prevState,
            phone: text
        }))
    }

    useEffect(() => {
        if(checkout.cart.length > 0) localStorage.setItem('o_complex_checkout', JSON.stringify(checkout))
    }, [checkout]);

    useEffect(() => {
        const store_products = localStorage.getItem('o_complex_checkout');
        if (!!store_products) setCheckout(JSON.parse(store_products))
    }, []);



    return (
        <CheckoutContext.Provider value={{
            onRemoveProduct,
            onAddProduct,
            onRemovePosition,
            onAddPosition,
            isProductInCart,
            getPositionLength,
            onInputPhone,
            checkout
        }}>
            {children}
        </CheckoutContext.Provider>
    );
}
