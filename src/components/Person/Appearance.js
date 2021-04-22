/* eslint-disable react/prop-types */
import React from "react";
import { S } from "../styledComponents";

function Appearance({ appearance, powerstats, biography,connections,work }) {
    console.log(biography.aliases);
    return (<>
        <S.Wrapper>
            <S.AppearanceDiv>
                <p><S.Color>Gender</S.Color>: {appearance.gender}</p>
                <p><S.Color>Race</S.Color>: {appearance.race}</p>
                <p><S.Color>Height</S.Color>: {appearance.height[1]}</p>
                <p><S.Color>Weight</S.Color>: {appearance.weight[1]}</p>
            </S.AppearanceDiv>
            <S.AppearanceDiv>
                <p><S.Color>Intelligence</S.Color>: {powerstats.intelligence}</p>
                <p><S.Color>Strength</S.Color>: {powerstats.strength}</p>
                <p><S.Color>Speed</S.Color>: {powerstats.speed}</p>
                <p><S.Color>Durability</S.Color>: {powerstats.durability}</p>
                <p><S.Color>Power</S.Color>: {powerstats.power}</p>
                <p><S.Color>Combat</S.Color>: {powerstats.combat}</p>
            </S.AppearanceDiv>
            
            <S.AppearanceDiv >
                <p><S.Color>Full-name</S.Color>: {biography["full-name"]}</p>
                <p><S.Color>Alter-egos</S.Color>: {biography["alter-egos"]}</p>
                <p><S.Color>Aliases</S.Color>: {biography.aliases[0]}</p>
                <p><S.Color>Place-of-birth</S.Color>: {biography["place-of-birth"]}</p>
                <p><S.Color>Publisher</S.Color>: {biography.publisher}</p>
                <p><S.Color>Alignment</S.Color>: {biography.alignment}</p>
            </S.AppearanceDiv>    
        </S.Wrapper>
        <S.Wrapper>
            <S.AppearanceDiv primary>
                <h4>Work</h4>
                <p><S.Color>Occupation</S.Color>: {work.occupation}</p>
                <p><S.Color>Base</S.Color>: {work.base}</p>          
            </S.AppearanceDiv>
        </S.Wrapper>
        <S.Wrapper>
            <S.AppearanceDiv >
                <h4>Connections</h4>
                <p><S.Color>Group-affiliation</S.Color>: {connections["group-affiliation"]}</p>
                <p><S.Color>Relatives</S.Color>: {connections["relatives"]}</p>          
            </S.AppearanceDiv>
        </S.Wrapper>
    </>);
}

export default Appearance;