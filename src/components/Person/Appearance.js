import React from "react";
import { S } from "../styledComponents";

const Appearance = ({appearance}) =>{
   return (
   <S.Wrapper primary>
      <S.AppearanceDiv>
         <p>Gender: {appearance.gender}</p>
         <p>Race: {appearance.race}</p>
         <p>Height: {appearance.height[1]}</p>
         <p>Weight: {appearance.weight[1]}</p>
      </S.AppearanceDiv>
      <S.AppearanceDiv>
         <p>Gender: {appearance.gender}</p>
         <p>Race: {appearance.race}</p>
         <p>Height: {appearance.height[1]}</p>
         <p>Weight: {appearance.weight[1]}</p>
      </S.AppearanceDiv>
   </S.Wrapper>);
};

export default Appearance;