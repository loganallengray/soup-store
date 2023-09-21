import React from 'react';
import './App.css';
import AppRoutes from './components/AppRoutes';
import Header from './components/header/Header';
import AppContext from './modules/context/app-context';

const appContextProps = {
	test: "test"
};

const App = () => {
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
