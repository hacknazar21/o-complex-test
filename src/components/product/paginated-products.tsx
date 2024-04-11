'use client'
import React from 'react';
import {useProduct} from "@/hooks/product";
import Product from "@/components/product/index";
import PaginationLoader from "@/components/pagination-loader";

interface PaginatedProductsProps {
}

export default function PaginatedProducts({

                                          }: PaginatedProductsProps) {
    const {
        paginatedProducts, isAvlPagination
    } = useProduct();

    if(paginatedProducts)
        return (
            <>
                {
                    paginatedProducts.products.map(product => (
                        <Product key={product.id} product={product}/>
                    ))
                }
                {isAvlPagination && <PaginationLoader/>}
            </>
        );
    return <></>
}
