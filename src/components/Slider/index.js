import React from 'react'
import {
    Container,
     Imagem , 
     Bloco1,
     Bloco2,
     Componentes,
     Paragrafos,
     SliderTodo
    } from './style'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Imagem8 from '../../assets/img/campeao2.png'
import Imagem9 from '../../assets/img/campeao3.png'
import Imagem10 from '../../assets/img/campeao4.png'


const Slide = () =>{
    var settings = {
        dots: true,
        lazyLoad: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        arrows:true,
        slidesToScroll: 4
    };
    return (
        <SliderTodo>
          <Slider {...settings}>
            <Componentes >
                <Imagem src={Imagem8}/>
                <Bloco2/>
                <Bloco1/>
                <Paragrafos>A Camerata foi apenas os dois no início, e suas fileiras nunca foram destinadas a exceder um número a ser contado em uma mão.</Paragrafos>
            </Componentes>
            <Componentes >
                <Imagem src={Imagem9}/>
                <Bloco2/>
                <Bloco1/>
                <Paragrafos>Red, uma jovem cantora, entrou em posse do Transistor. Sendo a poderosa espada falante. O grupo Possessores quer tanto ela quanto o Transistor e está perseguindo implacavelmente a sua procura.</Paragrafos>
            </Componentes>
            <Componentes >
                <Imagem src={Imagem10}/>
                <Bloco2/>
                <Bloco1/>
                <Paragrafos>Sybil é descrita pelo Transistor como sendo os "olhos e ouvidos" da Camerata.</Paragrafos>
            </Componentes>
            <Componentes >
                <Imagem src={Imagem8}/>
                <Bloco2/>
                <Bloco1/>
                <Paragrafos>A Camerata foi apenas os dois no início, e suas fileiras nunca foram destinadas a exceder um número a ser contado em uma mão.</Paragrafos>
            </Componentes>
            <Componentes >
                <Imagem src={Imagem9}/>
                <Bloco2/>
                <Bloco1/>
                <Paragrafos>Red, uma jovem cantora, entrou em posse do Transistor. Sendo a poderosa espada falante. O grupo Possessores quer tanto ela quanto o Transistor e está perseguindo implacavelmente a sua procura.</Paragrafos>
            </Componentes>
            <Componentes >
                <Imagem src={Imagem10}/>
                <Bloco2/>
                <Bloco1/>
                <Paragrafos>Sybil é descrita pelo Transistor como sendo os "olhos e ouvidos" da Camerata.</Paragrafos>
            </Componentes>
          </Slider>
        </SliderTodo>
      );
    }
  

export default Slide;
