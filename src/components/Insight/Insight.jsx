import React, { Component } from 'react';
import s from './Insight.module.css';
import Navig from './Navig/Navig';
import {BrowserRouter, Route} from 'react-router-dom';
import Linech from './Charts/Line';

const Insight = () => {
		return (
			<BrowserRouter>
				<div className={s.insight}>
						<Navig/>
								<div className = 'Charts'>
										<Route path='/Insight/Line' component={Linech}/>
								</div>
				</div>
			</BrowserRouter>
		)
}


export default Insight;
