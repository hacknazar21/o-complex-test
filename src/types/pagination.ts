export interface Pagination<T> {
    page: number,
    amount: number,
    total: number,
    products: T[]
}
export interface PaginationParams {
    page_size: number;
    page: number;
}

