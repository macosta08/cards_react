import React from 'react'
import './styles.css'
export const Interests = ({interests}) => {
	return (
		<div className='container interests'>
			<h2>{interests}</h2>
			
				<li>
					El desarrollo web
				</li>
				<li>
					Conocer muchos lugares por todo el mundo
				</li>
				<li>
					La robotica
				</li>
			
		</div>
	)
}
