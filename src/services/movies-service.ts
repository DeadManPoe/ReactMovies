import { Movie } from '../types/movie';
import { Page } from '../types/page';

const baseUrl = 'https://api.themoviedb.org/3/';

export function popularMovies(): Promise<Page<Movie>> {
	return fetch(`${baseUrl}discover/movie?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&sort_by=popularity.desc`, {
		mode: 'cors',
	}).then(r => r.json());
}
