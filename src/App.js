import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import FetchedPosts from './components/FetchedPosts'
import Card from './components/Card'
import { routes } from './constants'

function App() {

	return (
		<div>
			<BrowserRouter>
				<h2>Super Heroes</h2>
				<Route exact path={routes.mainpage} component={FetchedPosts} />
				<Route path={routes.card} render={({ location }) => {
					return <Card data={location.state} />
				}} />
			</BrowserRouter>

		</div>
	);
}

export default App;


