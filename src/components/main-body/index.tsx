import React, {useState} from 'react';
import {Products, Reviews} from "@/types";
import Review from "@/components/review";
import main_body_styles from './main-body.module.css'
import styles from '@/styles/common.module.css'
import Product from "@/components/product";
import Checkout from "@/components/checkout";
import CheckoutLayout from "@/layouts/checkout-layout";
import PaginatedProducts from "@/components/product/paginated-products";

interface MainBodyProps {
    reviews: Reviews
    products: Products
}

export default function MainBody({
                                     reviews, products
                                 }: MainBodyProps) {
    return (
        <div className={main_body_styles.container}>
            <div className={main_body_styles.reviews}>
                {
                    reviews.map(review => (
                        <Review key={review.id} review={review}/>
                    ))
                }
            </div>
            <CheckoutLayout>
                <div className={styles.container}>
                    <Checkout/>
                    <div className={main_body_styles.products}>
                        {
                            products.products.map(product => (
                                <Product key={product.id} product={product}/>
                            ))
                        }
                        <PaginatedProducts />
                    </div>
                </div>
            </CheckoutLayout>
        </div>
    );
}
