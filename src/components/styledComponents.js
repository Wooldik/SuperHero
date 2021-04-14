import styled from 'styled-components'


export const S = {
	Wrapper: styled.div`
	display:flex;
	justify-content:space-between;
	flex-wrap:wrap;
	`,
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