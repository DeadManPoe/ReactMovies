import React from 'react';
import useSWR from 'swr';
import ErrorMessage from './error-message/error-message';

const Discover: React.FC = () => {
	const {
		data,
		error,
	} = useSWR(
		`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&sort_by=popularity.desc`,
		url => fetch(url, { mode: 'cors' }).then(e => e.json())
	);

	if (error) {
		return <ErrorMessage>{error}</ErrorMessage>;
	}
	if (!data) {
		return <span>Loading</span>;
	}
	return (
		<div>
			{data.results.map((d: { title: string }) => (
				<div>{d.title}</div>
			))}
		</div>
	);
};

export default Discover;
