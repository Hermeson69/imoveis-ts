import { FaStar } from "react-icons/fa"
import { Button_Busc, Kitcheng_Card, Kitcheng_Div, Title } from "./style"

const SecKitchen = () => {
    return (
        <>
            <Title>
                <h2>Acomodações para famílias com cozinha completa</h2>
                <span>Prepare um banquete para os entes queridos nestas acomodações com cozinhas e churrasqueiras.</span>
            </Title>
            <Kitcheng_Div>
                <Kitcheng_Card>
                    <img src="/Kitcheng_Img/1.jpg" alt="" />
                    <h5>Casa em Campos do Jordão  <FaStar
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
                </Kitcheng_Card>

                <Kitcheng_Card>
                    <img src="/Kitcheng_Img/2.jpeg" alt="" />
                    <h5>Casa em Campos do Jordão  <FaStar
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
                </Kitcheng_Card>

                <Kitcheng_Card>
                    <img src="/Kitcheng_Img/3.jpg" alt="" />
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
                </Kitcheng_Card>

                <Kitcheng_Card>
                    <img src="/Kitcheng_Img/4.jpeg" alt="" />
                    <h5>Casa em Campos do Jordão  <FaStar
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
                </Kitcheng_Card>

            </Kitcheng_Div>
            <a href="#">
                <Button_Busc>
                    Vire seu Chef
                </Button_Busc>
            </a>
        </>
    )
}

export default SecKitchen