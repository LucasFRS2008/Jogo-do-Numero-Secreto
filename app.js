let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag,texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Femela',{rate:1.2});
}

function exibirTextoInicial(){
    exibirTextoNaTela('h1','Jogo do Numero Secreto');
    exibirTextoNaTela('p','Escolha um numero entre 1 e 10'); 
}
exibirTextoInicial();

function verificarChute() {
    let chute = document.querySelector ('input').value;

    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentatiiva';
        let mensagemTetativas = `Voce Descobriu o Numero Secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p',mensagemTetativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p','O numero secreto e menor!');
        }else{
            exibirTextoNaTela('p','O numero secreto e maior!');
        }
        tentativas = tentativas + 1;
        
        limparCampo();
    }


}
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random()* numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }
    
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio ();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute=document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirTextoInicial();
    document.getElementById('reiniciar').setAttribute('disable',true);
}