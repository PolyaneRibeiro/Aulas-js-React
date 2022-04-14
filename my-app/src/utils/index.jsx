export const msgConsoleIf = (valorDigitado) => {
    if (valorDigitado === 'Guitarra') {
        console.log('tem cordas')
    }
    else if (valorDigitado === 'Bateria') {
        console.log('tem pedal')
    }
    else if (valorDigitado === 'Microfone') {
        console.log('tem fios')
    }
    else {
        console.log('não existe esse instrumento')
    }
}

export const Click = (valorDigitado) => {
    switch (valorDigitado) {
        case 'Lana': console.log('tem 11 messes'); break;
        case 'Poly': console.log('tem 33 anos'); break;
        case 'Felipe': console.log('tem 30 anos'); break;
        default: console.log('esse nome não está cadastrado')
    }
}