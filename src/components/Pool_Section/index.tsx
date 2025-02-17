import { FaStar } from "react-icons/fa"
import { Button_Busc, Pool_Card, Pool_Div, Title } from "./style"

const SecPool = () => {
    return (
        <>
            <Title>
                <h2>Acomodações para se refrescar na piscina</h2>
                <span>Relaxe à beira da piscina com as pessoas que você mais gosta em acomodações com mais de dois quartos.</span>
            </Title>
            <Pool_Div>
                <a href="">

                    <Pool_Card>
                        <img src="/Pool_Img/1.jpg" alt="" />
                        <h5>Casa em Frotaleza  <FaStar
                            size={15}
                            style={{ marginLeft: '30px' }}
                        >
                        </FaStar>
                            4,75 (106)
                        </h5>
                        <span>
                            Se precisar de mais espaço, tenha um lugar inteiro só para você.
                        </span>
                        <span>
                            9 quartos
                        </span>
                        <h5>R$ 520/noite</h5>
                    </Pool_Card>
                </a>

                <a href="">


                    <Pool_Card>
                        <img src="/Pool_Img/2.jpeg" alt="" />
                        <h5>Casa em Balneário Camboriú  <FaStar
                            size={15}
                            style={{ marginLeft: '30px' }}
                        >
                        </FaStar>
                            4,89 (200)
                        </h5>
                        <span>
                            Se precisar de mais espaço, tenha um lugar inteiro só para você.
                        </span>
                        <span>
                            3 quartos
                        </span>
                        <h5>R$ 769/noite</h5>
                    </Pool_Card>
                </a>

                <a href="">

                    <Pool_Card>
                        <img src="/Pool_Img/3.jpg" alt="" />
                        <h5>Casa em Campos do Jordão  <FaStar
                            size={15}
                            style={{ marginLeft: '30px' }}
                        >
                        </FaStar>
                            4,67 (387)
                        </h5>
                        <span>
                            Se precisar de mais espaço, tenha um lugar inteiro só para você.
                        </span>
                        <span>
                            5 quartos
                        </span>
                        <h5>R$ 599/noite</h5>
                    </Pool_Card>
                </a>

                <a href="">

                    <Pool_Card>
                        <img src="/Pool_Img/4.jpg" alt="" />
                        <h5>Casa em Tauá  <FaStar
                            size={15}
                            style={{ marginLeft: '30px' }}
                        >
                        </FaStar>
                            4,76 (80)
                        </h5>
                        <span>
                            Se precisar de mais espaço, tenha um lugar inteiro só para você.
                        </span>
                        <span>
                            4 quartos
                        </span>
                        <h5>R$ 570/noite</h5>
                    </Pool_Card>
                </a>

            </Pool_Div>
            <a href="#">
                <Button_Busc>
                    Refresque-se
                </Button_Busc>
            </a>
        </>
    )
}

export default SecPool