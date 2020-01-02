const genreToRank: { [key: string]: number } = {
	Action: 7,
	Adventure: 6,
	Animation: 10,
	Comedy: 9,
	Crime: 7,
	Documentary: 10,
	Drama: 9,
	Family: 8,
	Fantasy: 8,
	History: 8,
	Horror: 10,
	Music: 8,
	Mystery: 8,
	Romance: 10,
	'Science Fiction': 10,
	'TV Movie': 8,
	Thriller: 8,
	War: 8,
	Western: 10,
};

//The idea is to resume generes from n to two
export function resume(genres: Array<string>) {
	if (genres.indexOf('Drama') !== -1 && genres.indexOf('Action') !== -1) {
		genres = genres.filter(i => i !== 'Drama');
	}
	if (genres.indexOf('Comedy') !== -1 && genres.indexOf('Drama') !== -1) {
		genres = genres.filter(i => i !== 'Comedy');
	}
	return genres
		.map(genre => ({
			rank: genreToRank[genre],
			genre,
		}))
		.sort((a, b) => a.rank - b.rank)
		.reverse()
		.slice(0, 2);
}
