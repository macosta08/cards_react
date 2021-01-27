import React from 'react';
import { dataCards } from '../data/dataCards';
import './styles.css';

export const Cards = () => {

	function generarNumero(numero){
		return (Math.random()*numero).toFixed(0);
	  }
	  
	  function colorRGB(){
		var coolor = "("+generarNumero(255)+"," + generarNumero(255) + "," + generarNumero(255) +")";
		return "rgb" + coolor;
	  
	  }
	return (
	<div>
		{dataCards.map( (card) => (
		<div className='container card' style={{background: colorRGB()}}key={card.titel}>
			<h2>{card.titel}</h2>
				<li>
					{card.item1}
				</li>
				<li>
					{card.item2}
				</li>
				<li>
					{card.item3}
				</li>
		</div>
		))}
	</div>
	)
}
