import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import FetchedPosts from './components/FetchedPosts'
import Card from './components/Card'

function App() {

	return (
		<div>
			<BrowserRouter>
				<h2>Super Heroes</h2>
				<Route exact path='/' component={FetchedPosts} />
				<Route path='/card/:id' render={({ location }) => {
					return <Card data={location.state} />
				}} />
			</BrowserRouter>

		</div>
	);
}

export default App;


