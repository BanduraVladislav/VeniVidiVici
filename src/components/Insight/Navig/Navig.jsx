import React, { Component } from 'react';
import s from './Navig.module.css';
import Linech from './../Charts/Line';

const Navig = () => {
	return (
		<nav className={s.navig}>
				<div>
					<a href="/Insight/Line">Line</a>
				</div>
				<div>
					<a href="#">Bar</a>
				</div>
				<div>
					<a href="/Profile">Pie</a>
				</div>
				<div>
					<a href="#">...</a>
				</div>
			</nav>
		)


}

export default Navig;