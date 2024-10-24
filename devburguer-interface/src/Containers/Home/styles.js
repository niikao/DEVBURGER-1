import styled from "styled-components";
import BannerHome from '../../assets/banner-home'
import Background from '../../assets/background'

export const Banner = styled.div`
    background: url('${BannerHome}');
    background-size: cover;
    background-position: center;
    height: 480px;

    h1 {
        font-size: 'Road-Rage', sans-serif;
        font-size: 80px;
        color: #f4f4f4;
        position: absolute;
        right: 20%;
        top: 10%;
    }
`;

export const Container = styled.section`
    background: linear-gradient(
        rgba(255, 255, 255, 0.6),
        rgba(255, 255, 255, 0.6)
    ),
    
    
    
    url('${Background}');

    `;

export const Content = styled.div`
   
   `;