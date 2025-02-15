import React, {useState} from 'react'

// Zadání 1: Vytvoř stavovou proměnnou s výchozí hodnotou `'možná'`.
// Zadání 2: Proměnnou vypiš místo `ano/ne/možná`.
// Zadání 3: Po kliknutí na tlačítko změň `možná` na `ano`, `ano` na `ne`, případně `ne` na `možná`.

export const Uloha8 = () => {
	const [weather, setWeather] = useState('možná');
	
	return (
		<>
			<h3>Prší v Brně: {weather}</h3>
			<button onClick={() => {
				if (weather === 'možná') {
					setWeather('ano')
				} else if (weather === 'ano') {
					setWeather('ne')
				} else {
					setWeather('možná')
				}
			}}
			>změnit</button>
		</>
	)
}
