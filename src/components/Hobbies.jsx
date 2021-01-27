import React from 'react'
import './styles.css'
export const Hobbies = ({hobbies}) => {
	return (
		<div className='container hobbies'>
		<h2>{hobbies}</h2>
		
			<li>
				Pasear con mi familia
			</li>
			<li>
				Hacer ejercicio
			</li>
			<li>
				Ver peliculas 
			</li>
		
	</div>
	)
}
