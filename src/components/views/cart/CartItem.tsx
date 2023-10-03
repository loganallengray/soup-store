import React, { useContext } from "react";
import { ISoup } from "../../../modules/interfaces"
import AppContext from "../../../modules/context/app-context";

type Props = {
    soup: ISoup
}

const CartItem = ({ soup }: Props) => {
    const cxt = useContext(AppContext);
    const removeCartItem = cxt?.removeCartItem;

    return (
        <div className="cart-item">
            <img className="cart-item-img" src={soup.imageUrl} />
            <div className="cart-item-body">
                <div className="cart-item-info">
                    <div className="cart-item-info-text">
                        <h3>{soup.name}</h3>
                        <p>${soup.price}</p>
                    </div>
                </div>
                <div className="cart-item-options">
                    <input className="input" type="number" placeholder="1" />
                    <button
                        className="button b-border-yellow"
                        onClick={() => removeCartItem(soup.id)}>
                        Remove</button>
                </div>
            </div>
        </div>
    )
}

export default CartItem