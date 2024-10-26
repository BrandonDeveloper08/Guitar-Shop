import { useState, useEffect, useMemo} from "react";
import { db } from "../data/db";
import type {Guitar, CartItem } from "../types";

export const useCart = () => {
    const initialCart = (): CartItem[] => {
        const localStorageCart = localStorage.getItem("cart")
        return localStorageCart ? JSON.parse(localStorageCart) : []
    }


    const [data] = useState(db)
    const [cart, setCart] = useState(initialCart)

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    const MAX_ITEM = 5
    const MIN_ITEM = 1

    function addToCart(item: Guitar) {
        const itemExits = cart.findIndex(guitar => guitar.id == item.id)

        if (itemExits >= 0) {
            const updateCart = [...cart]
            updateCart[itemExits].quantity++
            setCart(updateCart)
        } else {
            const newItem: CartItem = {...item, quantity:1}
            setCart([...cart, newItem])
        }
    }

    function removeFromCart(id: Guitar["id"]) {
        setCart(prevCart => prevCart.filter(guitar => guitar.id !== id))
    }

    function increaseQuantity(id: Guitar["id"]) {
        const updateCart = cart.map(item => {
            if (item.id === id && item.quantity < MAX_ITEM) {
                return {
                    ...item,
                    quantity: item.quantity + 1
                }
            }
            return item
        })
        setCart(updateCart)
    }

    function drecrementQuantity(id: Guitar["id"]) {
        const updateCart = cart.map(item => {
            if (item.id === id && item.quantity > MIN_ITEM) {
                return {
                    ...item,
                    quantity: item.quantity - 1
                }
            }
            return item
        })
        setCart(updateCart)
    }

    function clearCart() {
        setCart([])
    }

    // State Derivado
    const isEmpty = useMemo(() => cart.length === 0, [cart])
    const cartTotal = useMemo(() => cart.reduce((total, item) => total + (item.quantity * item.price), 0), [cart])

    return {
        data,
        cart, 
        addToCart,
        removeFromCart,
        increaseQuantity,
        drecrementQuantity,
        clearCart,
        isEmpty,
        cartTotal
    }
}