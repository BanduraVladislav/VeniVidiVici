import React from "react";
import s from './../Desc.module.css';
import Avatar from './Shurik.png';


const Shurik=() =>{
	return (
	<div>
		<div className={s.image}>

				<img src={Avatar}/>
			
			<div className={s.overlay}>
						<div className={s.text}>
							<img src="https://pbs.twimg.com/profile_images/758159362313650178/lsI4RSpg_400x400.jpg" alt=""/>
						</div>
			</div>


		</div>
		<div className={s.name}>
			Бандура Владислав
		</div>
		<div className={s.description}>
			I have a cat.
		</div>
	</div>
	)
}

export default Shurik