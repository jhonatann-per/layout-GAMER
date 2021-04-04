import React from 'react'
import {Container} from './style'
import image1 from '../../assets/img/header.png'

const Header = () =>{
    return(
        <Container>
                <img className="imagem1" src={image1}></img>
                <h1 className="h1" >SUPERGIANTGAMES</h1>
        </Container>
    )
}
export default Header;