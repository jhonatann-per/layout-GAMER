import Styled from 'styled-components'
import Image2 from '../../assets/img/fundoverde.png'

export const Container = Styled.div`
    background:#363636;
`;

export const ContainerImagem = Styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    background-image: url('${Image2}');
    background-size: cover;
    background-repeat:no-repeat;
    object-fit:cover;
    div {
        display:flex;
        width:35%;
        height:1080px;
        object-fit:cover;
        justify-content:center;
        padding: 75px 10px;
        margin: 0 0 20px 0;
        background: linear-gradient(180deg, rgba(156,2,4,0.5) 0%, rgba(77,16,16,0.45) 100%);
    @media (max-width:1230px){
        width: 75%;
    }
    @media (max-width:414px){
        height: 486px;
    }
    }

`;

export const DivImagem = Styled.div`
    display:flex;
    position:relative;
    width:30%;
`;

export const DivImagem2 = Styled.img`
    z-index:1;
    position:absolute;
    width:93%;
    height: 880px;
    object-fit:cover;

    @media (max-width:414px){
        height: 370px;
    }
`;

export const DivPai = Styled.div`
    position:relative;
    width:100vw;
    height:auto;
`;

export const Paragrafo = Styled.p`
    z-index:2;
    position:absolute;
    font-size:18px;
    color:white;
    left:30px;
    top:17px;
`;

export const ImageDireita = Styled.img`
    z-index:3;
    position:absolute;
    width:33.5%;
    height:155px;
    top: 397px;
    right:-26px;
    object-fit:cover;

    @media (max-width:414px){
    width: 34.5%;
    height: 87px;
    top: 201px;
    }
`;

export const ImageDireita2 = Styled.img`
    z-index:3;
    position:absolute;
    top: 587px;
    right:-90px;
    object-fit:cover;

    @media(max-width:414px){
    top: 275px;
    width: 101px;
    right: -55px;
    }
`;

export const ImageEsquerda = Styled.img`
    z-index:3;
    position:absolute;
    width:28%;
    height:170px;
    top: 433px;
    left:-74px;
    object-fit:cover;

    @media (max-width:414px){
    width: 28%;
    height: 87px;
    top: 216px;
    left: -36px;
    }
`;

export const ImageEsquerda2 = Styled.img`
    z-index:3;
    position:absolute;
    width:20%;
    height:145px;
    top: 565px;
    left:11px;
    object-fit:cover;

    @media (max-width:414px){
    width: 21%;
    height: 76px;
    top: 278px;
    left: 1px;
    }
`;

export const Paragrafo2 = Styled.p`
    z-index:3;
    width:46%;
    position:absolute;
    color:#F0F0F2;
    font-size:21px;
    bottom:38px;

    @media(max-width:1200px){
        width: 50%;
    }

    @media (max-width:414px){
        font-size: 9px;
        bottom: 3px;
    }
`;

export const DivMeio = Styled.div`
    display:flex;
    width:100%;
    height:1147px;
    background:#363636;

`;

export const DivForm = Styled.div`
    width: 100%;
    height: 605px;
    background: #58B790;
    display: flex;
    justify-content: center;
    align-items: center;

`;
export const Formulario = Styled.form`
    background: #ffffff;
    width:45%;
    padding: 40px 100px;;
    border-radius: 10px;
    height: 115%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;


@media (max-width:1024px){
    width: 70%;
    font-size:18px;
}

@media (max-width:414px){
    width: 80%;
    font-size: 10px;
    height: 60%;
    }
`;
export const TituloForm = Styled.p`
    color: #58B790;
    font-weight: bold;
    font-size: 30px;
    text-align: center;
    margin-bottom: 30px;
    @media(max-width:414px){
        font-size: 20px;
    }
`;
export const Description = Styled.p`
    color: #000000cc;
    font-weight: 100;

    @media(max-width:414px){
        width:250px;
    }
`;
export const DivInput = Styled.div`
    display: flex;
    justify-content: center;
    margin: 20px 0 10px;

`;
export const InputForm = Styled.input`
    border: 1px solid #00000099;
    padding: 10px;
    margin-right: ${props =>props.margin != '' ? props.margin+'px' : '0px'};
`;
export const TextArea = Styled.textarea`
    padding: 15px; 

    @media(max-width:414px){
    margin: 0px 0px 0 68px;
    width: 68%;
    }
`;

export const ContainerBotao = Styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    margin-top: 25px;
`;

export const Enviar = Styled.button`
    border: 0;
    padding: 8px 55px;
    outline: none;
    background: #58B790;
    color: #ffffff;
`;

export const ContainerForm = Styled.div`

`;

export const Footer = Styled.div`
    height: 150px;
    background: #363636;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 50px;
`;
export const ScrollTop = Styled.div`
    background: #ffffff;
    padding: 25px 30px;
    border-radius: 100%;
    box-shadow: 0 3px 10px #00000044;
`;

export const SliderEspaco = Styled.div`
    height:1180px;
    
    @media (max-width:414px){
        height: 415px;
    }
`;