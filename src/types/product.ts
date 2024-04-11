import {Pagination} from "./pagination";

export type Products = Pagination<Product>

export interface Product {
    id: number,
    image_url: string,
    title: string,
    description: string,
    price: number
}
