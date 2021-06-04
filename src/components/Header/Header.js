import React, { Component } from 'react';
import s from './Header.module.css';
import Logo from './logo.jpg'

const Header = () =>{
	return <header className={s.header}>
				<img src={Logo} alt='Veni Vidi Vici'/>
			</header>
};

export default Header;