import React from 'react';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';

const HomeNav: React.SFC = () => {
	return (
		<nav className={styles.navigation}>
			<Link to="/discover">Discover</Link>
			<Link to="/collections">Collections</Link>
			<Link to="/library">Library</Link>
		</nav>
	);
};

export default HomeNav;
