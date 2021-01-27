import React from 'react'
import './styles.css'
export const Expectations = ({ expectations }) => {
	return (
		<div className='container expectations'>
		<h2>{ expectations }</h2>
		
			<li>
				Adquirir excelentes fundamentos en React
			</li>
			<li>
				Desarrollar aplicaciones complejas
			</li>
	</div>
	);
}
