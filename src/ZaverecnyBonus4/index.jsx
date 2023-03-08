import React, {useState} from 'react'

// Zadání: Pomocí dvou stavových proměnných s výchozí hodnotou 0, které se budou měnit podle vstupních políček, vypiš do `<output></output>` jejich součet.

export const ZaverecnyBonus4 = () => {
	const [num1, setNum1] = useState(0);
	const [num2, setNum2] = useState(0);
	return (
		<>
			<input type="number" defaultValue="0" onChange={(e) => setNum1(parseInt(e.target.value))}/> +{' '}
			<input type="number" defaultValue="0" onChange={(e) => setNum2(parseInt(e.target.value))}/> = 
			<output>{num1 + num2}</output>
		</>
	)
}
