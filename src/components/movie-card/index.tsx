import React from 'react';
import styles from './styles.module.scss';

import { Movie } from '../../types/movie';
import { resume } from '../../services/genre-resumer';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
	width?: string | number;
	height?: string | number;
	movie: Movie;
}

const MovieCard: React.SFC<CardProps> = ({ width = 'auto', height = 'auto', movie, ...others }) => {
	const style = { width, height };
	const genresDOM = resume(movie.genres).map(genre => <span>{genre.genre}</span>);

	return (
		<div {...others} style={style} className={styles.container}>
			<img className={styles.movie_backdrop} src={movie.backdrop_path} alt={movie.title} />
			<div className={styles.text_content}>
				<div>
					<h5>{movie.title}</h5>
					{genresDOM}
					<div>
						<span>VOTE</span>
						<span>&nbsp;{movie.vote_average}</span>
					</div>
				</div>
				<div className={styles.bottom_bar}>
					<button className={styles.save_button}>Save</button>
					<button className={styles.save_button}>Share</button>
					<button className={styles.save_button}>Rate</button>
				</div>
			</div>
		</div>
	);
};

export default MovieCard;
