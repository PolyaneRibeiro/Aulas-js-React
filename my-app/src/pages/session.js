import React from "react";

function Session() {

    const valor = sessionStorage.getItem("valor");
    return <h1>Seu resultado foi {valor}</h1>
}

export default Session;