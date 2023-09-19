import React from 'react';
import './App.css';
import Homepage from './components/views/homepage/Homepage';
import Header from './components/header/Header';
import { Route, Routes } from 'react-router-dom';
import Cart from './components/views/cart/Cart';
import SoupList from './components/views/soupList/SoupList';

const App = () => {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/menu" element={<SoupList />} />
				<Route path="/cart" element={<Cart />} />
			</Routes>
		</div>
	);
}

export default App;
