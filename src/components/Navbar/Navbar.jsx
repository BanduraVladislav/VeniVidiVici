import React, { Component } from 'react';
import s from './Navbar.module.css';


const Navbar = () => {
	return (
		<nav className={s.nav}>
					<form action="/Profile">
						<button className ={`${s.btn} ${s.active}`}>Команда</button>
					</form>
					<form action="#">
						<button className ={`${s.btn} ${s.active}`}>Достижения</button>
					</form>
					<form action="/Insight">
						<button className ={`${s.btn} ${s.active}`}>Инсайт</button>
					</form>
					<form action="#">
						<button className ={`${s.btn} ${s.active}`}>...</button>
					</form>
			</nav>
		)
}

export default Navbar;