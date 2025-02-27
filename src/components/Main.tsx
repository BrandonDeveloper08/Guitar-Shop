import type { CartItem, Guitar } from "../types"
type Main = {
    cart: CartItem[]
    removeFromCart: (id: Guitar["id"]) => void
    increaseQuantity: (id: Guitar["id"]) => void
    drecrementQuantity: (id: Guitar["id"]) => void
    clearCart: () => void
    isEmpty: boolean
    cartTotal: number
}

export default function Main({cart,
    removeFromCart,
    increaseQuantity,
    drecrementQuantity,
    clearCart, 
    isEmpty, 
    cartTotal
}: Main) {

    return (
        <main className="py-5 ">
            <div className="container-xl">
                <div className="row justify-content-center justify-content-md-between">
                    <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
                        <div
                            className="carrito"
                        >
                            <img className="img-fluid" src="carrito.png" alt="imagen carrito" />

                            <div id="carrito" className="bg-white p-3">
                                {isEmpty ? (
                                     <p className="text-center">El carrito esta vacio</p>
                                ):(
                                <>
                                <table className="w-100 table">
                                    <thead>
                                        <tr>
                                            <th>Imagen</th>
                                            <th>Nombre</th>
                                            <th>Precio</th>
                                            <th>Cantidad</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cart.map(guitar =>(
                                                <tr key={guitar.id}>
                                                    <td>
                                                        <img className="img-fluid" src={`${guitar.image}.jpg`} alt="imagen guitarra" />
                                                    </td>
                                                    <td>{guitar.name}</td>
                                                    <td className="fw-bold">
                                                        {guitar.price}
                                                    </td>
                                                    <td className="flex align-items-start gap-4">
                                                        <button
                                                            type="button"
                                                            className="btn btn-dark"
                                                            onClick={()=> drecrementQuantity(guitar.id)}
                                                        >
                                                            -
                                                        </button>
                                                        {guitar.quantity}
                                                        <button
                                                            type="button"
                                                            className="btn btn-dark"
                                                            onClick={()=> increaseQuantity(guitar.id)}
                                                        >
                                                            +
                                                        </button>
                                                    </td>
                                                    <td>
                                                        <button
                                                            className="btn btn-danger"
                                                            type="button"
                                                            onClick={()=> removeFromCart(guitar.id)}
                                                        >
                                                            X
                                                        </button>
                                                    </td>
                                                </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <p className="text-end">Total pagar: <span className="fw-bold">${cartTotal}</span></p>
                                </>
                            )}

                                <button 
                                    className="btn btn-dark w-100 mt-3 p-2"
                                    onClick={clearCart}
                                >Vaciar Carrito</button>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </main>
    )
}