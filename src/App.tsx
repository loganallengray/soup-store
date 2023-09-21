import React, { useEffect } from 'react';
import './App.css';
import AppRoutes from './components/AppRoutes';
import Header from './components/header/Header';
import AppContext from './modules/context/app-context';

const appContextProps = {
	test: "test"
};

const App = () => {
	// fetches list of users
	// useEffect(() => {
	// 	fetch('http://localhost:8088/users')
	// 		.then(response => response.text())
	// 		.then(text => console.log(text))
	// }, [])

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
