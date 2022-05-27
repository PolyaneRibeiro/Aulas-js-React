import React, { useState, useEffect } from "react";
import axios from 'axios'


function Aula() {
    const [resposta, setResposta] = useState()
    const [respostaAxios, setRespostaAxios] = useState()


    useEffect(() => {
        fetch('https://teste-aula-metodos-3b964-default-rtdb.firebaseio.com/roupas.json')
            .then(response => response.json())
            .then(data => setResposta(data))
    }, []);

    useEffect(() => {
        axios.get('https://teste-aula-metodos-3b964-default-rtdb.firebaseio.com/roupas.json')
            .then((response) => setRespostaAxios(response.data))
    }, []);


    console.log(resposta, 'roupas')
    console.log(respostaAxios, 'roupas Axios')

    return (
        <>

            {resposta?.masculina.tipo}
            {respostaAxios?.masculina.tipo}

            {respostaAxios && Object.values(respostaAxios.femininas).map(roupa => {
                return (
                    <p>{roupa.tipo}</p>
                )
            })}

        </>
    );
}

export default Aula;