/* eslint-disable react/prop-types */
import React from "react";
import { S } from "./styledComponents";



export default function Post ({ post })  {
	return (
		<S.WraperCard >
			<img src={post.image.url} alt="..."></img>
			<h3 >{post.name}</h3>
		</S.WraperCard>
	);
}



