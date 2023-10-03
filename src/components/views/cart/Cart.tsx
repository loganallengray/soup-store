import React, { useContext } from "react";
import CartItem from "./CartItem";
import AppContext from "../../../modules/context/app-context";
import { ICartItem } from "../../../modules/interfaces";

const Cart = () => {
    const cxt = useContext(AppContext);
    const cart = cxt?.cart;

    return (
        <div id="cart-page">
            <div id="cart-container">
                <div id="cart-container-head">
                    <h2>My Cart</h2>
                </div>
                <div id="cart-container-body">
                    {cart.map((item: ICartItem) => <CartItem key={item.soup.id} item={item} />)}
                </div>
            </div>
            <div id="cart-totals">
                <div id="cart-total-head">
                    <h3>Subtotal</h3>
                    <p>$5.00</p>
                </div>
                <div id="cart-total-body">
                    <button className="button b-yellow">Checkout</button>
                </div>
            </div>
        </div>
    )
}

export default Cart;