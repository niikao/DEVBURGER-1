import styled from "styled-components";
import BannerHamburguer from '../assets/BannerHamburguer'
import { Link } from "react-router-dom";

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color:#f0f0f0;

`;


export const Banner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 480px;
    width: 100%;
    position: relative;


    background: url('${BannerHamburguer}');
    background-color: #1f1f1f;
    background-position: center;
    background-position: cover;


    h1 {
        font-family: 'Road Rage', sans-serif;
        font-size: 80px;
        line-height: 65px;
        columns: #fff;
        position: absolute;

        right: 20%;
        left: 30%;
     span { 
        display: block;
        color: #fff;
        font-size: 20px;
     }
    
    }
    
`;


export const CategoryMenu = styled.div`
    display: flex;
    justify-content: center;
    gap: 50;
    margin-top: 30px;
`;
export const CategoryButton= styled(Link)`
    text-decoration: none;
    cursor: pointer;
    background: none;
    color: ${props => props.$isActivecategory ? ' #9758a6' : '9a9a9d' };
    font-size: 24px;
    font-weight: 500;
    padding-bottom: 5px;
    line-height: 20px;
    border-bottom: ${props => props.$isActiveCategory && '3px solid #9758a6'};
    border: none;
`;


export const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 40px;
    max-width: 1280px;
    gap: 60px;
    justify-content: center;
    margin: 50px auto;
`;
