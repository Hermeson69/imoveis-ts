import styled from 'styled-components';

export const Container = styled.div`
padding: 25px 150px;
height: 76px;
display: flex;
justify-content: space-between;
align-items: center;
border-bottom: 1px solid rgba(0,0,0,0.1);
background-color: var(--white); 
`


export const Logo = styled.div`
display: flex;
align-items: center;
`


export const Menu = styled.div`
display: flex;
align-items: center;
font-size: 0.925rem;
span{
padding: 5px;
}
}
`

// export const Search = styled.div`
// display: flex;
// align-items: center;
// input[type= "text"]{
// padding: 7px;
// border-radius: 10px;
// border: 0.2px solid #333;
// width: 250px;
// margin-left: 20px;    
// }

// input[type = "button"]{
// padding: 7px;
// margin-left: 10px;
// border-radius: 10px;
// border: 0.2px solid var(--gray);
// width: 75px;
// font-size: .825rem;
// }

// input[type = "button"]:hover{
// cursor: pointer;
// background-color: var(--primary) 
// }
// `
