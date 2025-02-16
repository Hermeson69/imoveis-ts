import { DateField, Form_banner, Form_text, PersonContainer, Buttonscreah, DateContainer, Divider, PersonFild, LocatedContainer, LocatedField } from "./styles";

const Form = () => {
    return (
        <Form_banner>
            <form action="">
                <Form_text>
                    <h2>Encontre Lugares para ficar no Domus</h2>
                    <p>Explore acomodações completas e quartos privativos ideais para qualquer tipo de viagem.</p>
                </Form_text>

                <LocatedContainer>
                    <LocatedField>
                        <label>Localização</label>
                        <input type="text" name="" id="" placeholder="Qualquer lugar" />
                    </LocatedField>
                </LocatedContainer>


                <DateContainer>
                    <DateField>
                        <label>Check-In</label>
                        <input type="date" name="" id="" placeholder="Escolher DateField" />
                    </DateField>
                    <Divider />
                    <DateField>
                    <label>Check-Out</label>
                        <input type="date" name="" id="" placeholder="Escolher DateField" />
                    </DateField>
                </DateContainer>

                <PersonContainer >
                    <PersonFild>
                    <label>Adultos</label>
                    <select name="adultos" id="adultos">
                        <option value="1" disabled selected>1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5+</option>
                    </select>
                    </PersonFild>
                    <Divider/>
                    <PersonFild>
                    <label>Crianças</label>
                    <select name="criancas" id="criancas">
                        <option value="0" disabled selected>0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4+</option>
                    </select>
                    </PersonFild>

                </PersonContainer >

                <Buttonscreah>
                    <button type="submit">Procurar</button>
                </Buttonscreah>
            </form>
        </Form_banner>
    )
}

export default Form