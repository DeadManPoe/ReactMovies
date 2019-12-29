import React, { PropsWithChildren } from 'react';
import styles from './styles.module.scss';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
	backgroundUrl?: string;
	width?: string | number;
	height?: string | number;
	eyelit?: string;
	classForTitle?: string;
	title: string;
}

const Card: React.SFC<PropsWithChildren<CardProps>> = ({
	backgroundUrl,
	width = 'auto',
	height = 'auto',
	classForTitle = '',
	eyelit,
	title,
	children,
	...others
}) => {
	const eyelitDOM = eyelit ? <h5>{eyelit}</h5> : null;
	const background = backgroundUrl
		? {
				background: `url(https://image.tmdb.org/t/p/w300${backgroundUrl}`,
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'top left',
				backgroundSize: 'contain',
		  }
		: {};
	const style = { width, height, ...background };

	return (
		<div {...others} style={style} className={styles.card}>
			{eyelitDOM}
			<h4 className={classForTitle}>{title}</h4>
			{children}
		</div>
	);
};

export default Card;
