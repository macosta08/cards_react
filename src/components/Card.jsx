import React from 'react';
import './styles.css';

export const Card = ({title, item1, item2, item3}) => {

	function getRandomNumber(num){
		return (Math.random()*num).toFixed(0);
	  }
	  
	  function colorRGB(){
		var coolor = "("+getRandomNumber(255)+"," + getRandomNumber(255) + "," + getRandomNumber(255) +")";
		return "rgb" + coolor;
	  
	  }
	return (
		<div className='container card' style={{background: colorRGB()}}>
			<h2>{title}</h2>
				<li>
					{item1}
				</li>
				<li>
					{item2}
				</li>
				<li>
					{item3}
				</li>
		</div>
	)
}
