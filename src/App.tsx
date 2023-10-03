import React, { useEffect, useState } from 'react';
import './App.css';
import AppRoutes from './components/AppRoutes';
import Header from './components/header/Header';
import AppContext from './modules/context/app-context';
import { ICartItem, ISoup } from './modules/interfaces';

const App = () => {
	const [cart, setCart] = useState<ICartItem[] | []>([]);

	const addCartItem = (soup: ISoup) => {
		const cartCopy = [...cart];

		if (cartCopy.filter(item => item.soup.id === soup.id).length === 0) {
			cartCopy.push({
				amount: 1,
				soup: soup
			})
		} else {
			const index = cartCopy.findIndex(item => item.soup.id === soup.id)

			cartCopy[index].amount += 1;
		}

		setCart(cartCopy);
	}

	const removeCartItem = (id: number) => {
		const cartCopy = [...cart];

		const newCart = cartCopy.filter(item => item.soup.id !== id);

		setCart(newCart);
	}

	const editCartItem = (obj: ICartItem, num: number) => {
		const cartCopy = [...cart];

		const index = cartCopy.findIndex(item => item.soup.id === obj.soup.id)

		cartCopy[index].amount = num;

		setCart(cartCopy);
	}

	const appContextProps = {
		cart: cart,
		addCartItem: addCartItem,
		removeCartItem: removeCartItem,
		editCartItem: editCartItem
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
