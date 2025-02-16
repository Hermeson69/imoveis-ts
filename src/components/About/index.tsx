import { About_div, About_item } from "./style"

const About = () =>{
    return(
        <>
        <About_div>
            <About_item>
                <img src="/Icons/Done.svg" alt="" />
                <h3>As vantagens da flexibilidade</h3>
                <span>
                As acomodações com cancelamento flexível facilitam a remarcação de reservas se seus planos mudarem.
                </span>
            </About_item>
            <About_item>
            <img src="/Icons/Home.png" alt="" />
                <h3>Mais de 7 milhões de anúncios ativos</h3>
                <span>
                Junte-se a mais de 1 bilhão de hóspedes que encontraram estadias em mais de 220 países e destinos.
                </span>
            </About_item>
            <About_item>
            <img src="/Icons/Slides.png" alt="" />
                <h3>Mais de 100 filtros para estadias personalizadas</h3>
                <span>
                Encontre a acomodação perfeita escolhendo a faixa de preço, o número de quartos e outras comodidades importantes.
                </span>
            </About_item>
        </About_div>
        </>
    )
}

export default About