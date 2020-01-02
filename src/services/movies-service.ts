import { Movie } from '../types/movie';
import { Page } from '../types/page';

const baseUrl = 'https://api.themoviedb.org/3/';
const urlForImages = 'https://image.tmdb.org/t/p/w300';

export function popularMovies(): Promise<Page<Movie>> {
	return fetch(
		`${baseUrl}discover/movie?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&sort_by=popularity.desc&primary_release_year=2019`,
		{
			mode: 'cors',
		}
	)
		.then(resp => resp.json())
		.then(data => {
			return {
				...data,
				results: data.results.map((result: Movie) => ({
					...result,
					backdrop_path: `${urlForImages}${result.backdrop_path}`,
					poster_path: `${urlForImages}${result.poster_path}`,
					genres: result.genre_ids.map(getGenreById),
				})),
			};
		});
}

export function topMovies(): Promise<Page<Movie>> {
	return fetch(
		`${baseUrl}discover/movie?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&sort_by=vote_average.desc&primary_release_year=2019&vote_count.gte=500`,
		{
			mode: 'cors',
		}
	)
		.then(resp => resp.json())
		.then(data => {
			return {
				...data,
				results: data.results.map((result: Movie) => ({
					...result,
					backdrop_path: `${urlForImages}${result.backdrop_path}`,
					poster_path: `${urlForImages}${result.poster_path}`,
					genres: result.genre_ids.map(getGenreById),
				})),
			};
		});
}

const genreIdToName: { [key: number]: string } = {
	28: 'Action',
	12: 'Adventure',
	16: 'Animation',
	35: 'Comedy',
	80: 'Crime',
	99: 'Documentary',
	18: 'Drama',
	10751: 'Family',
	14: 'Fantasy',
	36: 'History',
	27: 'Horror',
	10402: 'Music',
	9648: 'Mystery',
	10749: 'Romance',
	878: 'Science Fiction',
	10770: 'TV Movie',
	53: 'Thriller',
	10752: 'War',
	37: 'Western',
};

function getGenreById(id: number): string {
	return genreIdToName[id];
}
