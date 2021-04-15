import React from 'react'
import { useHistory } from 'react-router'
import { classNameBootstrap, routes } from '../constants'
import Appearance from './Person/Appearance';
import { S } from './styledComponents';

function Card({ data }) {

	const history = useHistory();
	console.log(data);
	function backHandler () {
		history.push(routes.mainpage)
	}
	return (<S.M10>
		<button 
		type="button" 
		className={classNameBootstrap.buttonLighte}
		onClick={backHandler}
		>Back</button>

		<S.Wrapper>
			<S.ImageFullHeight>
				<img src={data.image.url} alt={data.name}/>
			</S.ImageFullHeight>
			<S.Biograph>
				<h2>{data.name}</h2>
				<Appearance appearance={data.appearance}/>
			</S.Biograph>
		</S.Wrapper>
	</S.M10>)
}

export default Card