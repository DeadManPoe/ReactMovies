import React from 'react';
import useSWR from 'swr';
import ErrorMessage from '../error-message/error-message';
import { popularMovies } from '../../services/movies-service';
import { Page } from '../../types/page';
import { Movie } from '../../types/movie';
import Card from '../../components/card';
import styles from './discover.module.scss';

const Discover: React.FC = () => {
	const { data, error } = useSWR<Page<Movie>>('discover', popularMovies);

	if (error) {
		return <ErrorMessage>{error}</ErrorMessage>;
	}
	if (!data) {
		return <span>Loading</span>;
	}

	const cards = data.results.map(datum => (
		<Card
			classForTitle={styles.title}
			key={datum.title}
			width={250}
			height={375}
			title={datum.title}
			backgroundUrl={datum.backdrop_path}
		/>
	));

	return <div className={styles.cards}>{cards}</div>;
};

export default Discover;
