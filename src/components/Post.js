import React from 'react'
import styled from 'styled-components'



export default ({ post }) => {



	return (

		<S.WraperCard >
			<img src={post.image.url} alt="..."></img>
			<h3 >{post.name}</h3>
		</S.WraperCard>
	)
}


const S = {
	WraperCard: styled.div`
    width: 300px;
	 height:400px;
    border: 1px solid #000;
    border-radius: 10px;
    padding: 10px;
    background-color: #afafaf;
    color: #000;
	 margin:10px;

    & img{
      width: 100%;
      height: 80%;
    }
    h3{
		 padding-top:20px;
  		text-align: center;
		background-color: #afafaf;
		color:#000;
}
   
  `
}
