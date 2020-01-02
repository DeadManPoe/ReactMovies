import React from 'react';
import Discover from './pages/discover';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './styles/app.scss';
import HomeNav from './components/home-nav';

const App: React.FC = () => {
	return (
		<div style={{ paddingLeft: '2rem', paddingRight: '2rem' }}>
			<BrowserRouter>
				<HomeNav />
				<Switch>
					<Route path="/discover">
						<Discover />
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
};

export default App;
