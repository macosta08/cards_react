import React from 'react'
import { dataCards } from '../data/dataCards';
import { Card } from './Card';
import './styles.css'
export const Cards = () => {
	return (
		<div>
		{dataCards.map( (card) => (
			<Card 
					key={card.title}
					title={card.title} 
					item1={card.item1} 
					item2={card.item2} 
					item3={card.item3}/>
		))}
		</div>
	);
}
