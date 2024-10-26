export type Guitar = {
    id: number
    name: string
    image: string
    description: string
    price: number
}

// Pick | Omit
export type CartItem = Guitar & {
    quantity: number
}