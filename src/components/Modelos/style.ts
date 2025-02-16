import styled from "styled-components";

export const Title = styled.div`
    margin: 40px;
    margin-left: 4%;
` 

export const Modelos_Div = styled.div`
display: flex;
justify-content: space-around;
width: 97.5%;
height: 80vh;
margin: 20px;

`
 export const Modelos_Card = styled.div`
display: flex;
flex-direction: column;
width: 450px;
height: 70vh;
gap: 15px;
    img{
        height: 55vh;
        width: 450px;
        object-fit: cover;
        border-radius: 20px;
    }
    span{
        text-align: justify;
        font-size: 0.9rem;
        font-weight: 300;
    }
border-radius: 20px;    
 `
