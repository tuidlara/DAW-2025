//função sem retorno
function inicio() {
    const mensagem = 'Estou iniciando...';
    console.log(mensagem);
}

//função com retorno
function processa() {
    const mensagem = 'Estou procesando...';
    return mensagem;
}

inicio();

const processado = processa();
console.log(processado);