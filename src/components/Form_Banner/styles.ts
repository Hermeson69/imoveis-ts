import styled from 'styled-components';
export const Form_banner = styled.div`
display: flex;
position: absolute;
height: 90vh;
margin-left: 5vw;
align-items: center;
form{
padding: 40px;
height: auto;
background-color: var(--primary);
border-radius: 20px;
box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.43);
width: 28vw;
}
`
export const Form_text = styled.div`
display: block;
h2{
font-size: 1.5rem;
}
p{
font-size: 1rem;
}
`
export const LocatedContainer = styled.div`
  margin-top: 10px; 
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 400px;
  padding: 6px;
  border: 1px solid #ccc;
  border-radius: 10px;
  &:focus-within {
    border-color: black;
  }
`
export const LocatedField = styled.div`
display: column;
    label {
    font-size: 12px;
    font-weight: bold;
    color: #333;
    margin-bottom: 5px;
  }

input[type="text"]{
padding: 10px;
width: 120%;
border: none;
border-radius: 10px;
}
input[type="text"]:focus{
border: none;
outline: none;
}
`
export const DateContainer = styled.div`
  margin-top: 10px; 
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 400px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  &:focus-within {
    border-color: black;
  }
`;
export const DateField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 48%;

  label {
    font-size: 12px;
    font-weight: bold;
    color: #333;
    margin-bottom: 5px;
  }

  input {
    border: none;
    outline: none;
    font-size: 14px;
    color: #666;
    cursor: pointer;
    background: transparent;

    &::placeholder {
      color: #ccc;
    }
  }
`;
export const Divider = styled.div`
  width: 1px;
  height: 40px;
  background-color: #ccc;
`;
export const PersonContainer = styled.div`
  margin-top: 10px; 
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 400px;
  padding: 6px;
  border: 1px solid #ccc;
  border-radius: 10px;
  &:focus-within {
    border-color: black;
  }
`
export const PersonFild = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 48%;
    label {
    font-size: 12px;
    font-weight: bold;
    color: #333;
    margin-bottom: 5px;
  }

  select {
    border: none;
    outline: none;
    font-size: 14px;
    color: #666;
    cursor: pointer;
    background: transparent;
    border-radius: 10px;
    padding: 10px;
    width: 100%;
  }
`;
export const Buttonscreah = styled.div`
display: block;
button{
margin-top: 10px;
width: 100%;
padding: 15px;
border: none;
border-radius: 10px;
background-color: var(--blue_violet);
color: white;
font-size: 1.2rem;
cursor: pointer;
}
`