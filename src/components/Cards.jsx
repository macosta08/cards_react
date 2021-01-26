import React from 'react'
import { Expectations } from './Expectations'
import { Hobbies } from './Hobbies'
import { Interests } from './Interests'
import { Learn } from './Learn'
import { Profile } from './Profile'
import './styles.css'

export const Cards = () => {
	return (
		<>
			<h1>Presentacion Personal</h1>
			<div>
				<Profile />
				<Interests />
				<Learn />
				<Expectations />
				<Hobbies />
			</div>

		</>
	)
}
