import React, {useState} from 'react'
import './carousel.css'

// Zadání 1: Nachystej si adresy obrázků níže do pole.
// Zadání 2: Přidej komponentě stavovou proměnnou, ve které bude index právě aktivního obrázku. Na začátku 0.
// Zadání 3: Pro `src` v tagu `img` použij adresu z pole pod správným indexem.
// Zadání 4: Tlačítky ← a → měň index.

// Bonus: Pozor na krajní hodnoty. Pokud dojdeš na konec nebo začátek pole, tak už v daném směru neměň index, aby ti neutekl mimo položky v poli. Nastav tlačítkům atribut `disabled`, pokud v jejich směru už není žádný obrázek.

/*
	Adresy obrázků:
	https://source.unsplash.com/WLUHO9A_xik/880x500
	https://source.unsplash.com/DA1eGglMmlg/880x500
	https://source.unsplash.com/kTxL6le0Wgk/880x500
	https://source.unsplash.com/7go5UASxmDY/880x500
	https://source.unsplash.com/YmATDIFsCmQ/880x500
*/

const pictures = [
	"https://source.unsplash.com/WLUHO9A_xik/880x500",
	"https://source.unsplash.com/DA1eGglMmlg/880x500",
	"https://source.unsplash.com/kTxL6le0Wgk/880x500",
	"https://source.unsplash.com/7go5UASxmDY/880x500",
	"https://source.unsplash.com/YmATDIFsCmQ/880x500",
]


export const Uloha4 = () => {
	const [activePicture, setActivePicture] = useState(0);

	return (
		<div className="carousel">
			<button onClick={() => {
				{activePicture > 0 ? setActivePicture(activePicture - 1) : null}}} className="carousel__predchozi" aria-label="předchozí">
				←
			</button>
			<div className="carousel__media">
				<img
					className="carousel__image"
					src={pictures[activePicture]}
					alt=""
				/>
			</div>
			<button onClick={() => {
				{activePicture < (pictures.length - 1) ? setActivePicture(activePicture + 1) : null}
			}} className="carousel__dalsi" aria-label="další">
				→
			</button>
		</div>
	)
}
