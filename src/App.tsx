import React from 'react';
import Discover from './pages/discover/discover';
import axios from 'axios';

axios.defaults.headers = {
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Methods': '*',
	'Access-Control-Allow-Headers': '*',
};

const App: React.FC = () => {
	return (
		<div>
			<div>content here</div>
			<nav>
				<a href="discover">Discover</a>
				<a href="lists">Lists</a>
				<a href="search">Search</a>
				<a href="profile">Profile</a>
			</nav>
		</div>
	);
};

export default App;
