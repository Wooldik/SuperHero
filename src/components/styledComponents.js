import styled from "styled-components";


export const S = {
    Wrapper: styled.div`
	display:flex;
	justify-content:${props => props.primary ? "space-around" : "space-between"};
	margin-top: 20px;
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
  
 `,
    ImageFullHeight: styled.div`
		background-size: cover;
		max-width: 450px;
		border: 2px solid #fff;
		border-radius: 10px;
		
		& img{
			max-width: 100%;
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
			margin-top:20px;
			text-align:center;
		}
	`,
    AppearanceDiv:styled.div`
	 flex-wrap:wrap;
	 margin-top: 20px;
	 border-radius: 10px;
    border: 2px solid;
    max-width: ${props => props.primary ? "none" : "850px"};
    padding: 20px;
		& p {
			margin-bottom: .5rem;
		}
	`,
    Color:styled.span`
	color:#e6e600;
	`

};