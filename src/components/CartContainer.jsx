import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../features/cartSlice'
import CartItem from './CartItem'

export default function CartContainer() {
    const dispatch = useDispatch()
    const { amount, cartItems, total } = useSelector(store => store.cart)
    return (
        <section className="cart">
            <header>
                <h2>Your bag</h2>
                {amount < 1 && <h4 className="empty-cart">Cart is currently empty</h4>}
            </header>
            {amount >= 1 && (
                <>
                    <div>
                        {cartItems.map(cartItem => (
                            <CartItem key={cartItem.id} {...cartItem} />
                        ))}
                    </div>
                    <footer>
                        <hr />
                        <div className='cart-total'>
                            <h4>
                                total <span>${total.toFixed(2)}</span>
                            </h4>
                        </div>
                        <button className='btn clear-btn'
                         onClick={() => dispatch(clearCart())}
                        >
                            clear cart
                        </button>
                    </footer>
                </>
            )}
        </section>
    )
}
