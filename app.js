let listaNumerosSorteados = [];
let numeroLimite = 10;
let numSecreto = gerarNumAleatorio();
let tentativas = 1


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto ;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function mensagemInicial() {
    exibirTextoNaTela('h1','Jogo do número secreto' );
exibirTextoNaTela('p','Escolha um número entre 1 e 10');
}

mensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value; 
    
    if (chute==numSecreto){
        exibirTextoNaTela('h1','Acertou!');
        let palavraTentativa = tentativas>1? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto, com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p',mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
 
    else {
    if (chute > numSecreto){
        exibirTextoNaTela('p','O número secreto é menor');
    }
    else{
        exibirTextoNaTela('p','O número secreto é maior');
    }
    tentativas++;
    limparCampo()
}
}
function gerarNumAleatorio() {
   let numeroEscolhido = parseInt(Math.random() * numeroLimite +1);
   let quantidadeElementosListas = listaNumerosSorteados.length;

   if (quantidadeElementosListas == numeroLimite) {
    listaNumerosSorteados = [];
   }

   if (listaNumerosSorteados.includes(numeroEscolhido)){ 
    return gerarNumAleatorio();} 
    else { 
        listaNumerosSorteados.push(numeroEscolhido);
        console.log(listaNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value='';
}
function reiniciarJogo(){
    numSecreto = gerarNumAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
