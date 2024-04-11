export interface Checkout {
    phone: string;
    cart: {
        id: number,
        quantity: number,
        name: string,
        price: number
    }[]
}
