import styled from 'styled-components'


export const S = {
	Wrapper: styled.div`
	display:flex;
	justify-content:${props => props.primary ? "space-around" : "space-between"};
	flex-wrap:wrap;
	margin-top: 20px;
	
	
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
  
 `,
	ImageFullHeight: styled.div`
		background-size: cover;
		height: 550px;
		border: 2px solid #fff;
		border-radius: 10px;
		
		& img{
			height: 100%;
			border-radius: 10px;
		}
	`,
	M10: styled.div`
		margin:10px;
	`,
	Biograph: styled.div`
		padding-left:10px;
		flex-grow:2;
		& h2{
			text-align:center;
		}
	`,
	AppearanceDiv:styled.div`
		& p {
			margin-bottom: .5rem;
		}
	`,

}