import { useState, useEffect } from 'react'

import styled from 'styled-components'

function App() {

	const [state, setState] = useState([])



	useEffect(() => {
		fetch(`https://superheroapi.com/api/2035975243210427/1`)
			.then(data => data.json())
			.then((data) => {

				setState(data)
			})

	}, [])
	console.log(state);
	return (
		<S.Wrapper>
			<h1>Super Hero</h1>
			<img src={state.image.url} />


		</S.Wrapper>
	);
}

export default App;

const S = {
	Wrapper: styled.div`
		width:100%;
		height:100vh;
		padding:15px;
		background: #000;
		color:#fff;
		font-size: 2rem;
		
		& h1{
			display:flex;
			justify-content:center;
			padding: 50px 0;
			font-size: 3rem;
			
		}
		& img{
			width:250px;
			height:250px;
		}
		
		
	`
}
