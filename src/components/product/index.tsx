import React from 'react';
import {Product} from "@/types";
import product_styles from './product.module.css'
import ProductButton from "@/components/product/product-button";
interface ProductProps {
    product: Product
}

export default function Product({
    product
                                }: ProductProps) {
    return (
        <div className={product_styles.product}>
            <img className={product_styles.product_image} alt={product.title} src={product.image_url}/>
            <h2 className={product_styles.product_title}>{product.title}</h2>
            <p className={product_styles.product_description}>{product.description}</p>
            <h3 className={product_styles.product_price}>цена: {product.price}₽</h3>
            <ProductButton product={product}/>
        </div>
    );
}
