import React, {Fragment} from "react";
import { Container, Logo, Menu} from "./styles";

const Naavbar = () => {
    return (
        <Container>
        <Logo>
            <img src="" alt ="" />
            <h3>Domus</h3>
        </Logo>
        <Menu>
            <span><a href="">Anuncie no Domus</a></span>
            <span><a href="">Cadastre-se</a></span>
        </Menu>     
        </Container>
    )
}
export default Naavbar;