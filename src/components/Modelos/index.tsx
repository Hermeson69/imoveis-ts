import { Modelos_Card, Modelos_Div } from "./style"

const Modelos = () =>{
    return (
        <>
        <h2>Espaços grandes ou pequenos — temos todas as opções</h2>
        <Modelos_Div>
          <a href="">
              <Modelos_Card>
                <img src="Modelo_Img/1.jpeg" alt="" />
                <h4>Casas </h4>
                <span>
                Se precisar de mais espaço, tenha um lugar inteiro só para você.

                </span>
            </Modelos_Card>
          </a>
          <a href="">
            <Modelos_Card>
            <img src="Modelo_Img/2.jpeg" alt="" />
            <h4>Apartamentos</h4>
                <span>
                Fique em alguns dos locais mais convenientes com espaços em edifícios compartilhados.
                </span>
            </Modelos_Card>
          </a>
          <a href="">
            <Modelos_Card>
            <img src="Modelo_Img/3.jpg" alt="" />
            <h4>Quartos</h4>
                <span>
                Durma em um quarto só seu e compartilhe as áreas comuns com outras pessoas.
                </span>
            </Modelos_Card>
          </a>
        </Modelos_Div>
        </>
    )
}

export default Modelos