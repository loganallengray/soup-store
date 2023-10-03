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

		if (cartCopy.filter(item => item.id === soup.id).length === 0) {
			cartCopy.push(soup)
		}

		setCart(cartCopy);
	}

	const removeCartItem = (id: number) => {
		const cartCopy = [...cart];

		const newCart = cartCopy.filter(soup => soup.id !== id);

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
