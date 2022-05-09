import React from "react";

const Loja = () => {

    const params = new URLSearchParams(window.location.search);
    let urlParams = undefined;
    params.forEach((value, key) => {
        urlParams = Object.assign({}, urlParams, {
            [key]: value.toString()
        });
    });

    const loja = () => {
        switch (urlParams.loja) {
            case 'americanas': return (
                <img alt='amaericanas' src='https://logodownload.org/wp-content/uploads/2019/10/americanas-logo-1.png' />
            );
            case 'riachuelo': return (
                <img alt='riachuelo' src='https://logodownload.org/wp-content/uploads/2014/06/riachuelo-logo.png' />
            );
            case 'magazine': return (
                <img alt='magazine' src='https://logodownload.org/wp-content/uploads/2014/06/magalu-logo-1.png' />
            );
            default: return (
                <h3>Loja inválida</h3>
            );
        }
    }
    const cor = (background) => {
        switch (background) {
            case 'vermelho': return 'red';
            case 'azul': return 'blue';
            case 'amarelo': return 'yellow';
            default: return '#FFF';
        }
    }
    const comodo = () => {
        switch (urlParams.comodo) {
            case 'cozinha': return (
                <img className="banner" alt='cozinha' src='https://www.liderinteriores.com.br/wp-content/uploads/2017/05/banner-campanha-cozinhas-lider-2019.png' />
            );
            case 'sala': return (
                <img className="banner" alt='sala' src='https://www.marabraz.com.br/blog/wp-content/uploads/2020/01/banner-marabraz-sala-compressor.jpg' />
            );
            case 'quarto': return (
                <img className="banner" alt='quatro' src='https://cdn.meumoveldemadeira.com.br/fotos-moveis/banner-testeira-quarto-desk22casal.jpg' />
            );
            default: return (
                <h3>Comodo inválido</h3>
            );
        }
    }
    const fornecedor = () => {
        switch (urlParams.fornecedor) {
            case 'madeira': return <h3>Madeira Madeira - Madeira. Tão Tua</h3>;
            case 'bonato': return <h3>Bonato - Móveis Bons</h3>;
            case 'philco': return <h3>Philco - Tem coisas que só a Philco faz pra você</h3>;
            default: return <h3>Fornecedor inválido</h3>;
        }
    }
    return (
        <>
            <div className="content" style={{ background: cor(urlParams.cor) }}>
                {loja()}
                {comodo()}
                {fornecedor()}
            </div>
            <div className="app">
                <a href={`/`}>Voltar</a>
            </div>
        </>
    );
}

export default Loja;