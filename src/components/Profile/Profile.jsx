import React, { Component } from 'react';
import s from './Profile.module.css';
import Bandura from './Bandura/Bandura';
import Andrey from './Andrey/Andrey';
import Deniel from './Deniel/Deniel';
import Pavlov from './Pavlov/Pavlov';
import Shurik from './Shurik/Shurik';

const Profile = () => {
	return (
			<div className={s.content}>
				<Shurik/>
				<Andrey/>
				<Pavlov/>
				<Deniel/>
				<Bandura/>
		</div>
		)
}

export default Profile