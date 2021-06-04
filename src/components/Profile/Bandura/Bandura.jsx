import React from "react";
import s from './../Desc.module.css';
import Avatar from './Bandura.png';
import AvatarSec from './BanduraSec.png';


const Bandura=() =>{
	return (
	<div>
		<div className={s.image}>

				<img src={Avatar}/>
			
			<div className={s.overlay}>
						<div className={s.text}>
							<img src={AvatarSec}/>
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

export default Bandura