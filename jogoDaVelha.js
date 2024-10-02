const prompt = require("prompt-sync")();


let casas = [" "," "," "," "," "," "," "," "," "];
let casasDisp = ["1","2","3","4","5","6","7","8","9"];

let jogador = "X";
let jogada;

let vitoria = "";

while(vitoria == ""){

    imprimeTabuleiro();

    jogada = prompt(`Onde deseja jogar, jogador ${jogador}?`);

    if (jogada == "f"){
        vitoria = "f";
    }

    if(casas[jogada - 1] != " "){

        console.log("\n\nCASA JA OCUPADA OU INVALIDA");

    }else{

        for(let i = 0 ; i<9 ; i++){//passa por todas as casas procurando onde foi a jogada

            if(i == jogada - 1){ // se o indice do loop for igual a jogada ( - 1, pois o indice da lista começa em zero)
                casas[i] = jogador;//coloca a letra do jogador na casa na posição do indice do loop
                casasDisp[i] = " ";//remove o valor correspondente das casas disponiveis
            }

        }

        condVitoria();


        if(jogador == "X"){
            jogador = "O";
        }else{
            jogador = "X";
        }
    }

}
imprimeTabuleiro();
console.log(`O jogador ${vitoria} venceu\n\n\n`);

function condVitoria(){

    if(casas[0] == "X" && casas[1] == "X" && casas[2] == "X"){
        vitoria = "X";
    }else if(casas[3] == "X" && casas[4] == "X" && casas[5] == "X"){
        vitoria = "X";
    }else if(casas[6] == "X" && casas[7] == "X" && casas[8] == "X"){
        vitoria = "X";
    }else if(casas[0] == "X" && casas[3] == "X" && casas[6] == "X"){
        vitoria = "X";
    }else if(casas[1] == "X" && casas[4] == "X" && casas[7] == "X"){
        vitoria = "X";
    }else if(casas[2] == "X" && casas[5] == "X" && casas[8] == "X"){
        vitoria = "X";
    }else if(casas[0] == "X" && casas[4] == "X" && casas[8] == "X"){
        vitoria = "X";
    }else if(casas[2] == "X" && casas[4] == "X" && casas[6] == "X"){
        vitoria = "X";
    }

    if(casas[0] == "O" && casas[1] == "O" && casas[2] == "O"){
        vitoria = "O";
    }else if(casas[3] == "O" && casas[4] == "O" && casas[5] == "O"){
        vitoria = "O";
    }else if(casas[6] == "O" && casas[7] == "O" && casas[8] == "O"){
        vitoria = "O";
    }else if(casas[0] == "O" && casas[3] == "O" && casas[6] == "O"){
        vitoria = "O";
    }else if(casas[1] == "O" && casas[4] == "O" && casas[7] == "O"){
        vitoria = "O";
    }else if(casas[2] == "O" && casas[5] == "O" && casas[8] == "O"){
        vitoria = "O";
    }else if(casas[0] == "O" && casas[4] == "O" && casas[8] == "O"){
        vitoria = "O";
    }else if(casas[2] == "O" && casas[4] == "O" && casas[6] == "O"){
        vitoria = "O";
    }


}


function imprimeTabuleiro(){

    console.log("\n\n\n\n                     casas\n                  disponiveis:");
    console.log(`\n     ${casas[0]} | ${casas[1]} | ${casas[2]}       ${casasDisp[0]} ${casasDisp[1]} ${casasDisp[2]}
    -----------
     ${casas[3]} | ${casas[4]} | ${casas[5]}       ${casasDisp[3]} ${casasDisp[4]} ${casasDisp[5]}
    -----------
     ${casas[6]} | ${casas[7]} | ${casas[8]}       ${casasDisp[6]} ${casasDisp[7]} ${casasDisp[8]}\n\n`);



}