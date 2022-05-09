import React from "react";

const url = window.location.href
const splitUrl = url.split('&')
const splitPersonagem = splitUrl[0]?.split('personagem=')[1]
const splitElemento = splitUrl[1]?.split('elemento=')[1]
const splitPersonalidade = splitUrl[2]?.split('personalidade=')[1]



const personagem = () => {
    switch (splitPersonagem) {
        case 'aang': return (
            <>
                <h3>Personagem: Aang</h3>
                <img alt='aang' src='http://pm1.narvii.com/6512/dfe52ce02be01bf26fcfff3c82657b635b88ff83_00.jpg' />
            </>
        );
        case 'katara': return (
            <>
                <h3>Personagem: Katara</h3>
                <img alt='katara' src='https://i.pinimg.com/550x/4a/e9/b9/4ae9b96df3b7b721512ad89113b318fb.jpg' />
            </>
        );
        case 'toph': return (
            <>
                <h3>Personagem: Toph</h3>
                <img alt='toph' src='https://i.pinimg.com/originals/65/6f/ba/656fbad8835e21950681284e80076fb6.jpg' />
            </>
        );
        default:  return (
            <h3>Personagem inválido</h3>
        );
    }
}

const elemento = () => {
    switch (splitElemento) {
        case 'ar': return (
            <h3>Elemento: ar</h3>
        )
        case 'agua': return (
            <h3>Elemento: água</h3>
        );
        case 'terra': return (
            <h3>Elemento: terra</h3>
        );
        default: return (
            <h3>Elemento inválido</h3>
        );
    }
}

const color = (splitElemento) => {
    switch (splitElemento) {
        case 'ar': return '#FFFAFA';
        case 'agua': return '#add8e6';
        case 'terra': return '#D3B8A5';
        default: return '#FFF';
    }
}


const personalidade = () => {
    switch (splitPersonalidade) {
        case 'calmo': return (
            <h3>Personalidade: calmo e sereno</h3>
        );
        case 'extrovertido': return (
            <h3>Personalidade: extrovertida e alegre</h3>
        );
        case 'ranzinza': return (
            <h3>Personalidade: Ranzinza</h3>
        );
        default:  return (
            <h3>Personalidade inválida</h3>
        );
    }
}

const Avatar = () => {
    return (

        <div className="content-avatar">       
            <h1>Avatar</h1>
            <div className="box-avatar" style={{background: color(splitElemento)}}>
            {personagem()}
            {elemento()}
            {personalidade()}
        </div>
        </div>
    );
}

export default Avatar;