import React, { PropsWithChildren } from 'react';
import styles from './error-message.module.scss';

const ErrorMessage: React.SFC<PropsWithChildren<{}>> = ({ children }) => (
	<div className={styles.error_box}>
		<div>Icon</div>
		<div>
			<h5>Error</h5>
			<p>{children}</p>
		</div>
	</div>
);

export default ErrorMessage;
