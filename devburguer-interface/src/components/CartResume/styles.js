import styled from "styled-components";

export const Container = styled.div`
    background-color: #ffffff;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 20px;


    *{
        color: #484848;
        font-weight: 500;
    }

    .container-top {
        display: grid;
        grid-gap: 10px 50%;
        grid-template-columns: 
        'title title'
        'items items-price'
        'delivery-tax delivery-tax-price';
    .title{
        grid-area: title;
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 20px;
        background-color: #484848;
        color:#fff;
        width: 100%;
        padding: 15px;
        text-align: center;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;

    }

    .items {
        grid-area: items;
        padding-left: 20px;
    }
    .items-price {
        grid-area: items-price;
        padding-right: 20px;
    }
    .delivery-tax {
        grid-area: delivery-tax;
        padding-left: 20px;
    }
    .delivery-tax-price {
        grid-area: items-price;
    }

    .container-bottom {
        display: flex;
        justify-content: space-between;
        font-size: 20px;
        font-weight: 700;
        margin-top: 24px;
         

        *{
       
        font-weight: 700;
    }
    }
}

`;