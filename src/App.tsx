import React, { useEffect, useState } from 'react';
import './App.css';
import AppRoutes from './components/AppRoutes';
import Header from './components/header/Header';
import AppContext from './modules/context/app-context';
import { ISoup } from './modules/interfaces';

const App = () => {
	const [cart, setCart] = useState<ISoup[] | []>([]);

	const addCartItem = (soup: ISoup) => {
		const cartCopy = [...cart];

		cartCopy.push(soup)

		setCart(cartCopy);
	}

	const removeCartItem = (index: number) => {
		const cartCopy = [...cart];

		const newCart = cartCopy.splice(index, 1);

		setCart(newCart);
	}

	const appContextProps = {
		cart: cart,
		addCartItem: addCartItem,
		removeCartItem: removeCartItem,
	};

	console.log(cart);

	return (
		<div className="app">
			<AppContext.Provider value={appContextProps}>
				<Header />
				<div className="app-view">
					<AppRoutes />
				</div>
			</AppContext.Provider>
		</div>
	);
}

export default App;
