import React from "react";

const url = window.location.href
const splitUrl = url.split('&')
const splitPersonagem = splitUrl[0].split('personagem=')[1]
const splitElemento = splitUrl[1].split('elemento=')[1]
const splitPersonalidade = splitUrl[2].split('personalidade=')[1]

console.log(splitPersonalidade, 'url')

const personagem = () => {
    switch (splitPersonagem) {
        case 'aang': return (
            <>
                <h3>Personagem: Aang</h3>
                <img src='http://pm1.narvii.com/6512/dfe52ce02be01bf26fcfff3c82657b635b88ff83_00.jpg' />
            </>
        );
        case 'katara': return (
            <>
                <h3>Personagem: Katara</h3>
                <img src='https://i.pinimg.com/550x/4a/e9/b9/4ae9b96df3b7b721512ad89113b318fb.jpg' />
            </>
        );
        case 'zuko': return (
            <>
                <h3>Personagem: Zuco</h3>
                <img src='https://i.pinimg.com/474x/a2/1b/bb/a21bbbd1a1903a4263c09473ccb131bb.jpg' />
            </>
        );
        default: (
            <h3>Personagem inválido</h3>
        );
    }
}

function Avatar() {
    return (
        <div className="">
            <h1>Avatar</h1>
            {personagem()}
            {splitElemento === 'ar' &&
                <>
                    <h3>Elemento: ar</h3>
                </>
            }
            {splitElemento === 'ar' &&
                <>
                    <h3>Personalidade: calmo e sereno</h3>
                </>}
        </div>
    );
}

export default Avatar;