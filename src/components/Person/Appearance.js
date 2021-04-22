/* eslint-disable react/prop-types */
import React from "react";
import { S } from "../styledComponents";

function Appearance({ appearance, powerstats, biography }) {
    console.log(biography);
    return (
        <S.Wrapper primary>
            <S.AppearanceDiv>
                <p>Gender: {appearance.gender}</p>
                <p>Race: {appearance.race}</p>
                <p>Height: {appearance.height[1]}</p>
                <p>Weight: {appearance.weight[1]}</p>
            </S.AppearanceDiv>
            <S.AppearanceDiv>
                <p>Intelligence: {powerstats.intelligence}</p>
                <p>Strength: {powerstats.strength}</p>
                <p>Speed: {powerstats.speed}</p>
                <p>Durability: {powerstats.durability}</p>
                <p>Power: {powerstats.power}</p>
                <p>Combat: {powerstats.combat}</p>
            </S.AppearanceDiv>
            <S.AppearanceDiv>
                <p>Full-name: {biography["full-name"]}</p>
                <p>Alter-egos: {biography["alter-egos"]}</p>
                <p>Aliases: {biography.aliases[1]}</p>
                <p>Place-of-birth: {biography["place-of-birth"]}</p>
                <p>Publisher: {biography.publisher}</p>
                <p>Alignment: {biography.alignment}</p>
            </S.AppearanceDiv>
        </S.Wrapper>);
}

export default Appearance;