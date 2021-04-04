import Styled from 'styled-components'


export const Container = Styled.div`

`;

export const Componentes = Styled.div`
    position:relative;
    display:flex;
    justify-content:center;
    align-items:center;
    height:1000px;
    
`;


export const Imagem = Styled.img`
  z-index:10;
  position:relative;
  width:60%;
  height:535px;
  margin: 16% 0 0 22%;

  @media (max-width:1024px){
    width: 80%;
  }
  @media (max-width:414px){
    height: 200px;
  }
 
`;

export const Bloco1 = Styled.div`
  z-index:2;
  position:relative;
  width: 55%;
  height: 450px;
  background: #363636;
  border-radius: 80px;
  top: -45%;
  left: 24.5%;
  border: 3px solid white;

  @media (max-width:1024px){
    width: 73.5%;
  }
  @media (max-width:414px){
    top:-17%;
    height: 190px;
  }
`;

export const Bloco2 = Styled.div`
  position: absolute;
  width: 58%;
  height: 64%;
  background: white;
  border-radius: 35px;
  top: 31%;
  left: 23%;

  @media(max-width:1024px){
    width: 77%;
    top: 27%;
  }
  @media(max-width:414px){
    width: 76%;
    height: 26%;
    border-radius: 11px;
    top: 10%;
    left: 23%;
  }
`;

export const Paragrafos = Styled.p`
  position: relative;
  width:50%;
  top: -39%;
  left: 27%;
  font-size:18px;

  @media (max-width:1024px){
    width: 69%;
  }
  @media (max-width:414px){
    width: 75%;
    top: -16%;
    left: 24%;
    font-size: 7px;
  }
`;

export const SliderTodo = Styled.div`
  width:100vw;
  height:1080px;
  
  .slick-slider{
    height:1000px;
  }
  .slick-dots li button{
    display:none;
  }

  .slick-slider .slick-track, .slick-slider .slick-list{
    height:950px;

 
`;
