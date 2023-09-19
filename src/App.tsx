import React from 'react';
import './App.css';
import AppRoutes from './components/AppRoutes';
import Header from './components/header/Header';

const App = () => {
	return (
		<div className="App">
			<Header />
			<AppRoutes />
		</div>
	);
}

export default App;
