import React, { Component } from 'react';
import s from './Insight.module.css';
import Navig from './Navig/Navig';
import {BrowserRouter, Route} from 'react-router-dom';
import Line from './Charts/Line';

const Insight = () => {
	return (
		<div className={s.insight}>
			<Navig/>
				<div className = 'Charts'>
					<Line/>


				</div>

		
		</div>
		)
}


export default Insight;

