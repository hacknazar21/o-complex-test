'use client';
import React, {useContext} from 'react';
import product_styles from "@/components/product/product.module.css";
import {useProduct} from "@/hooks/product";
import {Product} from "@/types";
import {CheckoutContext} from "@/context";

interface ProductButtonProps {
    product: Product
}

export default function ProductButton({
                                          product
                                      }: ProductButtonProps) {
    const {
        onAddProduct,
        isProductInCart,
        onAddPosition,
        onRemovePosition,
        getPositionLength
    } = useContext(CheckoutContext)

    if (isProductInCart(product.id))
        return <div className={product_styles.position_buttons}>
            <button onClick={() => onRemovePosition(product.id)} className={product_styles.position_button}>
                -
            </button>
            <p className={product_styles.position_quantity}>{getPositionLength(product.id)}</p>
            <button onClick={() => onAddPosition(product.id)} className={product_styles.position_button}>
                +
            </button>
        </div>
    return (
        <button onClick={() => onAddProduct(product)} className={product_styles.product_button}>
            купить
        </button>
    );
}
