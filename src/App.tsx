import PokemonCard from "./components/PokemonCard.tsx";

function App() {
	const pokemonList = [
		{
			name: "bulbasaur",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
		},
		{
			name: "Mew",
		},
	];

	return (
		<div>
			<PokemonCard pokemon={pokemonList[0]} />
		</div>
	);
}

export default App;
