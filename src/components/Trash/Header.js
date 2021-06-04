import React, { Component } from 'react';
import s from './Header.module.css';
import {BrowserRouter, Route} from 'react-router-dom';

const Header = () =>{
	return <header className={s.header}>
				<img src='https://p2.zoon.ru/preview/dFAI6PyBKXVWA977JTRIHQ/782x440x85/1/3/9/original_58e054d940c088fb7c8b4f36_599ea39c0a067.jpg' />
			</header>
};

export default Header;