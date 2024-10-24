import styled from "styled-components";

export function ProductImage  = styled.img`
    height: 80px;
    width: 80px;
    border-radius: 16px;
    
`;
export function ButtonGroup  = styled.img`
    display: flex;
    align-items: center;
    gap: 12px;

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 30px;
        width: 30px;
        color: #fff;
        border-radius: 4px;
        background-color: #9758a6;
        transition: all 0.4s;
        border: none;


        &::hover {
            background-color: #6f357c;
        }
    }

`;
export function EmpityCart  = styled.img`
    font-size: 20px;
    text-align: center;
    font-weight: bold;
`;

export const ProductTotalPrice = styled.p`
  font-weight: bold;
`;

export const TrashImage = styled.img`
    height: 20px;
    width: 20px;
    cursor: pointer;
`;