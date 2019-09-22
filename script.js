let botao = document.querySelector("button");
let textgamer = document.querySelector('h2');
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
    // var i = 100
    // while(i != 100){
    if(vezJogador % 2 == 0){
        alert(`O JOGADOR ${j1} IRÁ INICIAR A PARTIDA !!!`);
        j1X();
    }else{
        alert(`O JOGADOR ${j2} IRÁ INICIAR A PARTIDA !!!`);
        j2O();
    }
}

function j1X(){
    let textjogador = ("Vez do  jogador X ");
    textgamer.innerHTML = textjogador;
    coluna1.onclick = X1;
    coluna2.onclick = X2;
    coluna3.onclick = X3;
    coluna4.onclick = X4;
    coluna5.onclick = X5;
    coluna6.onclick = X6;
    coluna7.onclick = X7;
    coluna8.onclick = X8;
    coluna9.onclick = X9;
}

function j2O(){
    let textjogador = ("Vez do  jogador O ");
    textgamer.innerHTML = textjogador;
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



function X1(){
    coluna1.innerHTML = ("X");
    coluna1.style.color = "red";
    var cx1 = 1;
    return cx1;
    j2O();
}

function X2(){
    coluna2.innerHTML = ("X");
    coluna2.style.color = "red";
    var cx2 = 1;
    j2O();
    
}

function X3(){
    coluna3.innerHTML = ("X");
    coluna3.style.color = "red";
    var cx3 = 1;
    j2O();
    
}

function X4(){
    coluna4.innerHTML = ("X");
    coluna4.style.color = "red";
    var cx4 = 1;
    j2O();
    
}

function X5(){
    coluna5.innerHTML = ("X");
    coluna5.style.color = "red";
    var cx5 = 1;
    j2O();
    
}

function X6(){
    coluna6.innerHTML = ("X");
    coluna6.style.color = "red";
    var cx6 = 1;
    j2O();
    
}

function X7(){
    coluna7.innerHTML = ("X");
    coluna7.style.color = "red";
    var cx7 = 1;
    j2O();
    
}

function X8(){
    coluna8.innerHTML = ("X");
    coluna8.style.color = "red";
    var cx8 = 1;
    j2O();
    
}

function X9(){
    coluna9.innerHTML = ("X");
    coluna9.style.color = "red";
    var cx9 = 1;
    j2O();
    
}

function O1(){
    coluna1.innerHTML = ("O");
    coluna1.style.color = "blue";
    j1X();
}

function O2(){
    coluna2.innerHTML = ("O");
    coluna2.style.color = "blue";
    j1X();
}

function O3(){
    coluna3.innerHTML = ("O");
    coluna3.style.color = "blue";
    j1X();
}

function O4(){
    coluna4.innerHTML = ("O");
    coluna4.style.color = "blue";
    j1X();
}

function O5(){
    coluna5.innerHTML = ("O");
    coluna5.style.color = "blue";
    j1X();
}

function O6(){
    coluna6.innerHTML = ("O");
    coluna6.style.color = "blue";
    j1X();
}

function O7(){
    coluna7.innerHTML = ("O");
    coluna7.style.color = "blue";
    j1X();
}

function O8(){
    coluna8.innerHTML = ("O");
    coluna8.style.color = "blue";
    j1X();
}

function O9(){
    coluna9.innerHTML = ("O");
    coluna9.style.color = "blue";
    j1X();
}    


function ganhou(){
    if((cx1 + cx2 + cx3) == 3){ 
        let textjogador = ("VOCÊ GANHOU!!!");
        textgamer.innerHTML = textjogador;
        alert("Parabens Você Ganhou");  
        }
    }



botao.onclick = Selecao;