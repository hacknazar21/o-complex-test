import {Products} from "@/types";
import {useCallback, useEffect, useState} from "react";
import {PaginationParams} from "@/types/pagination";
import {ObjectToParams} from "@/helpers/client";
import localFont from "next/dist/compiled/@next/font/dist/local";

export const useProduct = (

) => {
    const [isLoading, setIsLoading] = useState(false)
    const [products, setProducts] = useState<Products>()
    const [params, setParams] = useState<PaginationParams>({
        page: 2,
        page_size: 18
    } as PaginationParams);
    const isAvlPagination = products?.amount !== 0

    async function getPaginatedProducts() {

        setIsLoading(true)
        try {
            const response = await fetch(`/products?${ObjectToParams(params)}`);
            const newProducts: Products = await response.json();
            if(params.page === 2) {
                setProducts(newProducts)
            } else if(!!products) {
                setProducts(prevState => ({
                    ...newProducts,
                    products: [...prevState!.products, ...newProducts.products]
                }))
            }
        } finally {
            setIsLoading(false)
        }
    }

    function onPaginate() {
        if(isAvlPagination) {
            setParams(prevState => ({
                ...prevState,
                page: prevState.page + 1
            }))
        }
    }

    const scrollHandler= useCallback((e:any):void=>{
        if(e.target.documentElement.scrollHeight-e.target.documentElement.scrollTop-window.innerHeight === 0) {
            onPaginate()
        }
    }, [products])

    useEffect(() => {
        document.addEventListener('scroll',scrollHandler)
        return ()=>{
            console.log('rerere')
            document.removeEventListener('scroll',scrollHandler)
        }
    }, [products]);


    useEffect(() => {
        if(!isLoading && params.page) {
            getPaginatedProducts()
        }
    }, [params.page])

    return {
        paginatedProducts: products,
        isAvlPagination
    }
}
