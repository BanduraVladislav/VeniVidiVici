import React, { Component } from 'react';
import s from './Navbar.module.css';

const Navbar = () => {
	return (
		<nav className={s.nav}>
				<div>
					<a href="/Profile">Команда</a>
				</div>
				<div>
					<a href="#">Достижения</a>
				</div>
				<div>
					<a href="/Insight">Инсайт</a>
				</div>
				<div>
					<a href="#">...</a>
				</div>
			</nav>
		)
}

export default Navbar;