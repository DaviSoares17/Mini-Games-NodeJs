const prompt = require("prompt-sync")();

let chute = "";
console.log("\n\nBem vindo ao jogo. O objetivo do jogo é adivinhar o numero sortido entre 1 e 100, a máquina ira te falar se você esta quente ou frio dependendo do palpite. Quanto menos tentativas melhor.\n\nResponda 'sim' para começar\n\n")
let cond = prompt("Vamos começar? ");
let resp = 0;
let placar = 0;


while (cond == "S" || cond == "sim" || cond == "s"){

    resp = Math.floor(Math.random() * 100); //funcao math rando gera um numero racional aleatorio entre 0 e 1 Ex: 0,489127491273
                                        //multiplica-se por 100 para definir o numero maximo do intervalo (logo, de 0 a 100)
                                        //função math.floor arredonda o numero, entao o que era 38,32189374 passa a ser 38
    placar = 1;
    chute = prompt("Digite seu palpite: ");

    while(chute != resp){

        quenteFrio();//função que valida quao perto o chute esta do acerto

        chute = prompt("Digite seu novo palpite: ");

        if(chute == "nsei"){
            console.log(resp);
        }


    }

    if(placar == 1){
        console.log("VOCE VENCEU!\nnossa.. FOI UMA PONTUAÇÃO PERFEITA\nMANDOU BEM!\n\n");
    }else{
        console.log(`Você venceu!!\ncom uma pontuação de ${placar}`);
    }
    cond = prompt("Jogar novamente?(S/N): ");
    console.log("\n\n\n");
}

function quenteFrio(){

    if(chute != resp){

        if(chute > resp - 5 && chute < resp + 5){

            console.log("Esta MUITO quente");

        }else{

            if(chute > resp - 10 && chute < resp + 10){

                console.log("Esta quente");

            }else{

                if(chute > resp - 20 && chute < resp + 20){
                    console.log("Esta frio");
                }else{
                    console.log("Esta MUITO frio");
                }

            }
        }
        placar++;
    }

}