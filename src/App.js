import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Insight from './components/Insight/Insight';
import {BrowserRouter, Route} from 'react-router-dom';

const App = () => {
	return  (
	<BrowserRouter basename={process.env.PUBLIC_URL}>
		<div className='app-wrapper'>
			<Header/>
			<Navbar/>
			<div className= 'app-wrapper-content'>
				<Route path="/Profile" component={Profile}/>
				<Route path="/Insight" component={Insight}/>
			</div>
		</div>
	</BrowserRouter>
		)
}

export default App;
