let botao = document.querySelector("button");
var vezJogador = getRandomInt(1,2);

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function Selecao(){
    alert('Bem vindo ao jogo da velha');
    var j1 = prompt('Nome do jogador 1');
    var j2 = prompt('Nome do jogador numero 2'); 
    if(vezJogador > 1){
        alert(`O jogador ${j1} Irá começar`);
    }else{
        alert(`O jogador ${j2} Irá começar`);
    }
}

botao.onclick = Selecao;

