import React from 'react'
import { Expectations } from './Expectations'
import { Hobbies } from './Hobbies'
import { Interests } from './Interests'
import { Learn } from './Learn'
import { Profile } from './Profile'
import './styles.css'

export const Cards = () => {
	const textCards = {
		profile: {
			name: 'Soy Mariangel',
			age: 'Tengo 32 años',
			country: 'Soy de Venezuela'
		}
	}

	return (
		<>
			<h1>Presentacion Personal</h1>
			<div>
				<Profile profile='Profile' textCards={textCards.profile}/>
				<Interests interests='Interests'/>
				<Learn learn='Learn'/>
				<Expectations expectations='Expectations'/>
				<Hobbies hobbies='Hobbies'/>
			</div>

		</>
	)
}
