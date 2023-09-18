import React from 'react';
import './App.css';
import Homepage from './components/views/homepage/Homepage';
import Header from './components/header/Header';

const App = () => {
	return (
		<div className="App">
			<Header />
			<Homepage />
			{/* Routes will go here, with header above? Maybe find way to turn header off on certain pages. For now just do the homepage to get something displayed. */}
			{/* Include an app context to keep track of certain states? */}
		</div>
	);
}

export default App;
