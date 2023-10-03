const CartItem = () => {
    return (
        <div className="cart-item">
            <img className="cart-item-img" src="https://images.pexels.com/photos/2365940/pexels-photo-2365940.jpeg" />
            <div className="cart-item-body">
                <div className="cart-item-info">
                    <div className="cart-item-info-text">
                        <h3>Soup Name</h3>
                        <p>$5.00</p>
                    </div>
                </div>
                <div className="cart-item-options">
                    <input className="input" type="number" placeholder="1" />
                    <button className="button b-border-yellow">Remove</button>
                </div>
            </div>
        </div>
    )
}

export default CartItem