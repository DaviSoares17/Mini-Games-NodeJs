const prompt = require("prompt-sync")();

let resposta = prompt("Digite a palavra que os outros terão que adivinhar: ");//recebe a resposta do jogo
let boneco = [" "," "," "," "," "," "];//cria o boneco com as partes vazias, conforme erra as partes sao adicionadas
let respLista = [];//variavel que recebera a resposta do jogo em forma de lista
let respListaSolved = [];//lista que recebera espaços vazios de acordo com o tamanho da resposta, que serão substituidos
                        //pelas letras conforme os palpites forem corretos
let chute = "";
let contErros = 0;//placar de erros
let contAcertos = 0;//placar de acertos
let chutesErrados = "";//string com os palpites errados
let resultado = "";//variavel que definirá a mensagem final

for(let i = 0; i<resposta.length ; i++){ //coloca a resposta nas listas

    respLista.push(resposta[i]);
    respListaSolved.push(" - "); //coloca um traço para cada letra que houver na resposta

}

for (let i = 0;i<20;i++){  //da espaço pra palavra sumir
    console.log("\n");
}



while(chute != "Finalizar"){ //loop para o jogo acontecer, se sair dele é porque os jogadores ganharam ou perderam

    imprimeForca(); //funcao q imprime a forca com os palpites errados e os acertos

    chute = prompt("Digite a letra palpite: "); // recebe o palpite do jogador


    if (validaLetra(respLista, chute) != ""){ //chama a função validaLetra para saber se houve algum acerto, se sim, segue
                                            //para a sessão de acerto, se não, passa para a sessao de erro

        let indice = validaLetra(respLista, chute);//chama a função validaLetra, passando a resposta, e o chute, se houver algum
                                              //acerto ela retornará uma string com as posições que houve acerto. EX:
                                              //a palavra era "faca", se o chute for "a" retorna 13 (posiçoes com "a")

        for(let i = 0;i < indice.length;i++){//utiliza o indice (q contem as posiçoes que houveram acerto) para passar as
                                             //letras da lista q contem a resposta, para a lista que exibe só as respostas
                                            // certas e soma 1 ponto ao placar de acertos, de acordo com o numero de acertos

            contAcertos++; //contador de acertos recebendo um ponto para cada vez q o loop ocorre
            respListaSolved[indice[i]] = " " + respLista[indice[i]] + " ";//atribuindo a letra da resposta, na lista que
                                                                        //exibe as respostas

        }

        if(contAcertos == resposta.length){//se o contador de acertos for igual o tamanho da resposta, quer dizer que os
                                        //jogadores acertaram a resposta

            chute = "Finalizar";//finaliza o loop
            resultado = "V";//diz que foi uma vitoria

        }
        //(!= de finalizar, pois quando o jogo finalizava, mesmo que nao houvesse erros ele imprimia a cabeça, não mais)
    }else if (chute != "Finalizar"){//se a função validaLetra nao retornar nada, quer dizer que nao houve acerto entao vem pra ca

        chutesErrados = chutesErrados + chute + " - ";//a string que imprime os erros ao lado da forca recebendo a letra errada
        contErros++;//contador de erros somando 1 para cada letra errada
        
        if(contErros == 1){ //imprime as partes do corpo de acordo com o numero de erros
            boneco.splice(0,1,"O");
        }else if(contErros == 2){
            boneco.splice(1,1,"|");
        }else if(contErros == 3){
            boneco.splice(2,1,"/");
        }else if(contErros == 4){
            boneco.splice(3,1,"\\");
        }else if(contErros == 5){
            boneco.splice(4,1,"/");
        }else if(contErros == 6){
            boneco.splice(5,1,"\\");
            resultado = "D";         //ultimo erro, imprime ultima perna, finaliza o jogo, e passa o resultado de derrota 
            chute = "Finalizar";
        }


    }


    

}
imprimeForca(); //imprime a forca uma ultima vez

if (resultado == "V"){

    console.log("\n\nOS JOGADORES VENCERAM!!!\n\n");
                                                       //exibe a mensagem do resultado do jogo
}else{ 

    console.log("\n\nOS JOGADORES PERDERAM :(\n\n");

}






function validaLetra(palavra, chute){//função que valida se o chute, esta contido na resposta

    let indice = "";//cria o indice que sera o retorno da função, se for vazio ao final quer dizer q n houve acertos
                   //se for != de vazio quer dizer que houve acertos, e retorna uma string com as posições corretas
                  //Ex: a palavra era "faca", se o chute for "a" retorna 13 (posiçoes com "a")

    for(let i = 0;i < palavra.length; i++){

        if(palavra[i] == chute){
            indice = indice + i.toString();//concatena as posições(convertendo elas para string antes)
        }

    }
    return indice;

}


function imprimeForca(){//imprime o desenho da forca, junto do corpo, das respostas erradas, e das respostas certas
    console.log(`\n\n\n\n\n\n  ________     ${chutesErrados}\n  |       |\n  |       ${boneco[0]}\n  |      ${boneco[2]}${boneco[1]}${boneco[3]}
  |      ${boneco[4]} ${boneco[5]}\n  |\n  |__________`); 
    console.log(`\n\n`);

    let respImpressa = "";

    for (let i = 0;i < respListaSolved.length;i++){//loop para colocar as respostas certas lado a lado
        respImpressa = respImpressa + respListaSolved[i];
    }
    console.log(respImpressa);

}