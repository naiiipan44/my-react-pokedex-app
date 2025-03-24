interface Pokemon {
	pokemon: {
		name: string;
		imgSrc?: string;
	};
}

export type { Pokemon };

function PokemonCard({ pokemon }: Readonly<Pokemon>) {
	return (
		<figure>
			{pokemon.imgSrc ? (
				<img src={pokemon.imgSrc} alt={pokemon.name} />
			) : (
				<p>???</p>
			)}
			<figcaption>{pokemon.name}</figcaption>
		</figure>
	);
}
export default PokemonCard;
