import styled from "styled-components";

export const Title = styled.div`
    margin: 40px;
    margin-left: 4%;
`

export const Pool_Div = styled.div`
display: flex;
justify-content: space-around;
width: 97.5%;
height: 70vh;
margin: 20px;
`

export const Pool_Card = styled.div`
display: flex;
flex-direction: column;
width: 340px;
height: 70vh;
gap: 15px;
border-radius: 20px;
img{
        height: 43vh;
        width: 340px;
        object-fit: cover;
        border-radius: 20px;
    }
span{
    font-size: 0.9rem;
    }
`

export const Button_Busc = styled.button`
display: block;
border: 0.8px solid var(--gray);
background-color: #fff;
width: 200px;
padding: 15px;
border-radius: 15px;
margin: 40px;
margin-left: 2%;
cursor: pointer;
border-radius: 15px;
a{
    font-size: 1rem;
}
`