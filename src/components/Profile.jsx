import React from 'react'
import './styles.css'
export const Profile = ({profile, textCards}) => {
	const {name, age, country} = textCards;
	return (
		
		<div className='container profile'>			
			<h2>{profile}</h2>
			
			<li>{name}</li>
			<li>{age}</li>
			<li>{country}</li>
		
		</div>
	)
}
