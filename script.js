let botao = document.querySelector("button");
let coluna1 = document.querySelector('#coluna1')
let coluna2 = document.querySelector('#coluna2')
let coluna3 = document.querySelector('#coluna3')
let coluna4 = document.querySelector('#coluna4')
let coluna5 = document.querySelector('#coluna5')
let coluna6 = document.querySelector('#coluna6')
let coluna7 = document.querySelector('#coluna7')
let coluna8 = document.querySelector('#coluna8')
let coluna9 = document.querySelector('#coluna9')

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
        coluna1.onclick = X1;
        coluna2.onclick = X2;
        coluna3.onclick = X3;
        coluna4.onclick = X4;
        coluna5.onclick = X5;
        coluna6.onclick = X6;
        coluna7.onclick = X7;
        coluna8.onclick = X8;
        coluna9.onclick = X9;
    }else{
        alert(`O jogador ${j2} Irá começar`);
        coluna1.onclick = O1;
        coluna2.onclick = O2;
        coluna3.onclick = O3;
        coluna4.onclick = O4;
        coluna5.onclick = O5;
        coluna6.onclick = O6;
        coluna7.onclick = O7;
        coluna8.onclick = O8;
        coluna9.onclick = O9;
    }
}

function X1(){
    coluna1.innerHTML = ("X");
}

function X2(){
    coluna2.innerHTML = ("X");
}

function X3(){
    coluna3.innerHTML = ("X");
}

function X4(){
    coluna4.innerHTML = ("X");
}

function X5(){
    coluna5.innerHTML = ("X");
}

function X6(){
    coluna6.innerHTML = ("X");
}

function X7(){
    coluna7.innerHTML = ("X");
}

function X8(){
    coluna8.innerHTML = ("X");
}

function X9(){
    coluna9.innerHTML = ("X");
}

function O1(){
    coluna1.innerHTML = ("O");
}

function O2(){
    coluna2.innerHTML = ("O");
}

function O3(){
    coluna3.innerHTML = ("O");
}

function O4(){
    coluna4.innerHTML = ("O");
}

function O5(){
    coluna5.innerHTML = ("O");
}

function O6(){
    coluna6.innerHTML = ("O");
}

function O7(){
    coluna7.innerHTML = ("O");
}

function O8(){
    coluna8.innerHTML = ("O");
}

function O9(){
    coluna9.innerHTML = ("O");
}    

botao.onclick = Selecao;