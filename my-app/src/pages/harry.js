import React from "react";

const params = new URLSearchParams(window.location.search);
let urlParams = undefined;
params.forEach((value, key) => {
    urlParams = Object.assign({}, urlParams, {
        [key]: value.toString()
    });
});

console.log(urlParams, 'urlParams')

const personagem = () => {
    switch (urlParams.personagem) {
        case 'harry': return (
            <>
                <h3>Personagem: Harry Potter</h3>
                <img alt='hary' src='https://veja.abril.com.br/wp-content/uploads/2016/09/harrypotterrotter-1.jpg' />
            </>
        );
        case 'luna': return (
            <>
                <h3>Personagem: Luna Lovegood</h3>
                <img alt='luna' src='https://observatoriodocinema.uol.com.br/wp-content/uploads/2022/01/luna-lovegood.jpg' />
            </>
        );
        case 'draco': return (
            <>
                <h3>Personagem: Draco Malfoy</h3>
                <img alt='draco' src='https://i.pinimg.com/originals/ba/16/43/ba16436e242a4cf844dc122fe6d99617.jpg' />
            </>
        );
        default: return (
            <h3>Personagem inválido</h3>
        );
    }
}

const casa = () => {
    switch (urlParams.casa) {
        case 'grifinoria': return (
            <>
                <h3>Casa: Grifinória</h3>
                <img alt='grifinoria' src='https://seeklogo.com/images/G/grifinoria-logo-B5B63ED895-seeklogo.com.png' />
            </>
        );
        case 'corvinal': return (
            <>
                <h3>Personagem: Corvinal</h3>
                <img alt='corvinal' src='http://pm1.narvii.com/7577/0a1bc68ed8ee7c61b08dff4fb7de308f3296b0dfr1-554-554v2_00.jpg' />
            </>
        );
        case 'sonserina': return (
            <>
                <h3>Casa: Sonserina</h3>
                <img alt='sonserina' src='https://img1.picmix.com/output/stamp/normal/3/2/7/4/2004723_64d8f.png' />
            </>
        );
        default: return (
            <h3>Casa inválida</h3>
        );
    }
}

const patrono = () => {
    switch (urlParams.patrono) {
        case 'cervo': return <h3>Patrono: Cervo</h3>;
        case 'lebre': return <h3>Patrono: Lebre</h3>;
        case 'desconhecido': return <h3>Patrono: Desconhecido</h3>;
        default: return <h3>Patrono inválido</h3>;
    }
}
const varinha = () => {
    switch (urlParams.varinha) {
        case 'fenix': return <h3>Varinha: Feita de azevinho e tem uma pena de fênix em seu núcleo</h3>;
        case 'desconhecido': return <h3>Varinha: Desconhecida</h3>;
        case 'unicornio': return <h3>Varinha: feita de madeira de pilriteiro e possuía como núcleo pelo de unicórnio</h3>;
        default: return <h3>Varinha inválida</h3>;
    }
}

const sanguePuro = () => {
    switch (urlParams.sangue_puro) {
        case 'true': return <h3>Sangue-Puro</h3>;
        case 'false': return <h3>Mestiço</h3>;
        default: return <h3>Valor inválido</h3>;
    }
}

const Harry = () => {
    return (

        <div className="content-avatar">
            <h1>Harry Potter</h1>
            <div className="box-harry" >
                
            {personagem()}
            <div className="box-casa">
            {casa()}
            </div>
            {patrono()}
            {varinha()}
            {sanguePuro()}
            </div>
        </div>
    );
}

export default Harry;