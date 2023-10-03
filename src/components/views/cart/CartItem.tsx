import React, { useContext } from "react";
import { ICartItem, ISoup } from "../../../modules/interfaces"
import AppContext from "../../../modules/context/app-context";

type Props = {
    item: ICartItem
}

const CartItem = ({ item }: Props) => {
    const cxt = useContext(AppContext);
    const removeCartItem = cxt?.removeCartItem;
    const editCartItem = cxt?.editCartItem;

    return (
        <div className="cart-item">
            <div className="cart-item-img-container">
                <img className="cart-item-img" src={item.soup.imageUrl} />
            </div>
            <div className="cart-item-body">
                <div className="cart-item-info">
                    <div className="cart-item-info-text">
                        <h3>{item.soup.name}</h3>
                        <p>${item.soup.price}</p>
                    </div>
                </div>
                <div className="cart-item-options">
                    <input
                        className="input"
                        value={item.amount}
                        min={1}
                        onChange={(e) => editCartItem(item, e.target.value)}
                        type="number" />
                    <button
                        className="button b-border-yellow"
                        onClick={() => removeCartItem(item.soup.id)}>
                        Remove</button>
                </div>
            </div>
        </div>
    )
}

export default CartItem