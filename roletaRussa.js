const prompt = require('prompt-sync')()

console.log("\n\nBem Vindo\n\nEste jogo consiste em uma roleta russa para 2 jogadores. Na sua vez você pode: atirar no oponente (comando 'nele') ou em si mesmo (comando 'mim')\n Caso você atire no oponente, e a arma disparar, o oponente perde uma vida e agora é a vez dele.\n Caso você atire no oponente e a arma não dispare, ele não perde vida e é a vez dele.\n Caso você atire em você mesmo e a arma não dispare, você joga de novo.\n Caso você atire em você mesmo e a arma dispare, você perde uma vida e é a vez do oponente\n\n")

let jogando = prompt("Vamos jogar?");

while (jogando == "sim" || jogando == "s" || jogando == "SIM" || jogando == "S"){

    let numeroBalas = numBalas();
    let balasReais = balasR(numeroBalas);
    let balasFalsas = numeroBalas - balasReais;
    let pente = [];
    let resultado = '';
    let mensagem = '';

    let vidaJ1 = 2;
    let vidaJ2 = 2;
    let vez = 1;

    for (let i=0; i < balasFalsas; i++){
        pente.push(0);
    }
    for (let i=0; i < balasReais; i++){
        pente.push(1);
    }
    pente = shuffleArray(pente);


    limpa();
    console.log('No jogo serão:' + numeroBalas + " balas ao todo, sendo " + balasReais + " verdadeira(s)\n");

    imprimeMesa(resultado, vidaJ1, vidaJ2, mensagem);

    while (vidaJ1 > 0 && vidaJ2 > 0){
    
    let jogada = prompt('jogador '+vez+' quer atirar em "mim" ou "nele"?');

    if(vez == 1){
        if(jogada == "mim" && pente[0] == 1){
            vidaJ1 = vidaJ1 - 1;
            resultado = "💥";
            mensagem = "jogador 1 tomou um tiro"
            vez = 2;
        }else if(jogada == "nele" && pente[0] == 1){
            vidaJ2 = vidaJ2 - 1;
            resultado = "💥";
            mensagem = "jogador 2 tomou um tiro"
            vez = 2;
        }else if(jogada == "mim" && pente[0] == 0){
            resultado = "💨";
            mensagem = "Bala falsa"
            vez = 1;
        }else if(jogada == "nele" && pente[0] == 0){
            resultado = "💨";
            mensagem = "Bala falsa"
            vez = 2;
        }
    }else{
        if(jogada == "mim" && pente[0] == 1){
            vidaJ2 = vidaJ2 - 1;
            resultado = "💥";
            mensagem = "jogador 2 tomou um tiro"
            vez = 1;
        }else if(jogada == "nele" && pente[0] == 1){
            vidaJ1 = vidaJ1 - 1;
            resultado = "💥";
            mensagem = "jogador 1 tomou um tiro"
            vez = 1;
        }else if(jogada == "mim" && pente[0] == 0){
            resultado = "💨";
            mensagem = "Bala falsa"
            vez = 2;
        }else if(jogada == "nele" && pente[0] == 0){
            resultado = "💨";
            mensagem = "Bala falsa"
            vez = 1;
        }
    
    }


    pente.splice(0,1); //0 eh o primeiro indice, 1 eh a quantidade de itens tirados a partir do primeiro indice

    limpa();

    imprimeMesa(resultado, vidaJ1, vidaJ2, mensagem);

    resultado = "";
    mensagem = "";
    
    if ((pente.length == 0 && vidaJ1 > 0) || (pente.length == 0 && vidaJ2 > 0)){ //recarrega a arma
        numeroBalas = numBalas();
        balasReais = balasR(numeroBalas);
        balasFalsas = numeroBalas - balasReais;
        pente = [];
        resultado = '';
        mensagem = '';

        for (let i=0; i < balasFalsas; i++){
            pente.push(0);
        }
        for (let i=0; i < balasReais; i++){
            pente.push(1);
        }
        pente = shuffleArray(pente);
        limpa();
        console.log('No jogo serão:' + numeroBalas + " balas ao todo, sendo " + balasReais + " verdadeira(s)\n");
        imprimeMesa(resultado, vidaJ1, vidaJ2, mensagem);
    }

    if(vidaJ1 == 0){
        console.log("O JOGADOR 2 VENCEU!!!");
    }
    if(vidaJ2 == 0){
        console.log("O JOGADOR 1 VENCEU!!!");
    }

    }
    jogando = prompt("Continuar jogando?");
}





function numBalas(){
    return Math.floor(Math.random() * (8 - 3) + 3);
}

function balasR(max){
    return Math.floor(Math.random() * ((max - 1) - 1) + 1);
}

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function limpa(){
    console.log("\n\n\n\n\n\n\n\n\n\n\n");
}

function imprimeMesa(resp, vida1, vida2, msg){

    console.log("      J1");
    console.log("           O          vidas: " + vida1);
    console.log("          /|\\ ");
    console.log("          / \\ \n\n")
    console.log("       ▄︻デ══━一" + resp);
    console.log("\n");
    console.log("           O              vidas: " + vida2);
    console.log("          /|\\ ");
    console.log("          / \\ ");
    console.log("      J2\n\n    " + msg);

}