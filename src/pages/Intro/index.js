import React from 'react'
import { 
    Container, 
    ContainerImagem, 
    DivImagem, 
    DivImagem2, 
    DivPai, 
    Paragrafo, 
    ImageDireita, 
    ImageDireita2, 
    ImageEsquerda, 
    ImageEsquerda2,
    Paragrafo2, 
    DivMeio,
    DivForm,
    Formulario,
    TituloForm,
    Description,
    DivInput,
    InputForm,
    TextArea,
    ContainerBotao,
    Enviar,
    ContainerForm,
    Footer,
    ScrollTop,
    SliderEspaco
} from './style'
import Header from '../../components/Header'
import Slide from '../../components/Slider'

import Imagem3 from '../../assets/img/campeao1.png'
import Imagem4 from '../../assets/img/direitaMaior.png'
import Imagem5 from '../../assets/img/direitaMenor.png'
import Imagem7 from '../../assets/img/esquerdaMenor.png'
import Imagem6 from '../../assets/img/esquerdaMaior.png'



const Intro = () =>{
    return(
        <Container>
            <Header/>
            <DivPai>
                <ContainerImagem> 
                    <DivImagem>
                        <Paragrafo>TRANSISTOR - RED THE SINGER</Paragrafo>
                        <DivImagem2 src={Imagem3}/>
                        <ImageDireita src={Imagem4} />
                        <ImageDireita2 src={Imagem5}/>
                        <ImageEsquerda src={Imagem6}/>
                        <ImageEsquerda2 src={Imagem7}/>
                        <Paragrafo2>"Olha, o que quer que você esteja pensando, me faça um favor, não solte."</Paragrafo2>
                    </DivImagem>
                </ContainerImagem>
                <SliderEspaco>
                    <Slide />
                </SliderEspaco>
                <DivForm>
                    <Formulario>
                        <TituloForm>Formúlario</TituloForm>
                        <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Description>
                        <ContainerForm>
                            <DivInput>
                                <InputForm placeholder="Nome" margin="20"  />
                                <InputForm placeholder="Email" margin="" />
                            </DivInput>
                            <TextArea placeholder="Mensagem" rows="5" cols="51" />
                            <ContainerBotao>
                                <Enviar>Enviar</Enviar>
                            </ContainerBotao>
                        </ContainerForm>
                    </Formulario>
                </DivForm>
                <Footer>
                    <ScrollTop>^</ScrollTop>
                </Footer>
            </DivPai>
        </Container>
    );
}
export default Intro;