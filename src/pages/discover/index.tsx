import React from 'react';
import useSWR from 'swr';
import ErrorMessage from '../error-message/error-message';
import { popularMovies, topMovies } from '../../services/movies-service';
import { Page } from '../../types/page';
import { Movie } from '../../types/movie';
import MovieCard from '../../components/movie-card';
import styles from './styles.module.scss';

const Discover: React.FC = () => {
	const { data, error } = useSWR<Page<Movie>>('discover', popularMovies);
	const { data: data1, error: error1 } = useSWR<Page<Movie>>('discover_top', topMovies);

	if (error || error1) {
		return <ErrorMessage>{error}</ErrorMessage>;
	}
	if (!data || !data1) {
		return <span>Loading</span>;
	}

	const cards = data.results.map((movie: Movie) => <MovieCard key={movie.title} width={200} movie={movie} />);

	const cards1 = data1.results.map((movie: Movie) => <MovieCard key={movie.title} width={200} movie={movie} />);

	return (
		<div>
			<h5>{new Date().toLocaleDateString('en-us', { weekday: 'long', month: 'long', day: 'numeric' })}</h5>
			<h2>Popular</h2>
			<div className={styles.cards}>{cards}</div>
			<h2>Top Rated</h2>
			<div className={styles.cards}>{cards1}</div>
		</div>
	);
};

export default Discover;
