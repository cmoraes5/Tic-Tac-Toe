// A REGRA DO NEGÓCIO
// * Arquivo responsável apenas pela lógica do jogos
// * Tudo que não tem a ver com a interface gtráfica

// => Iniciar minhas variáveis
// => Board representa cada um dos quadrados, podendo ter 3 estados: X, O e Vazio
// => PlayerTime diz de quem é a vez, sendo 0 para o player 1 e 1 par o player 2
// - 25 => Verificar se há vencedor

// * existe somente 8 opções de vitória

// todo ==> Mostrar o nome de quem ganhou 
// todo ==> Mostrar o movimento



let board = ['','','','','','','','',''];
let playerBeggin = Math.random();
let gameOver = false;
let count = [];


let symbols = ['o', 'x'];

var x = document.getElementsByTagName("input");
let playerName = x[0].value;


if(playerBeggin < 0.5){
    playerBeggin = 0;
}else{
    playerBeggin = 1;
}


let playerTime = playerBeggin; 


let winStates = [

    // Horizontal - ways to win
    [0,1,2],
    [3,4,5],
    [6,7,8],

    // Vertical - ways to win 
    [0,3,6],
    [1,4,7],
    [2,5,8],

    // Diagonal - ways to win
    [0,4,8],
    [6,4,2],
]

function handleMove(position){

        if (board[position] == ''){
            board[position] = symbols[playerTime];

            gameOver = isWin();

        if(gameOver == false){
        
        // * Verificar se playerTime é = 0, se for Vdd, colocar 1 no pT, se ñ, colocar 0
            // ? playerTime = (playerTime == 0) ? 1 : 0; // condição ternária

            if(playerTime == 0){
                playerTime = 1,
                playerName = x[1].value;
                count.push(".");
                console.log(count.length)
            }else{
                playerTime = 0,
                playerName = x[0].value;
                count.push(".");
                console.log(count.length)
            }
            // if(gameOver == false && count == 9){
            //     return console.log("empate")
            // }
        }if(count.length >= 9){
            isDraw();
            console.log("empate");
        }
    }

    return gameOver;
}

function isWin() {


    for(let i =0; i<winStates.length; i++){
        let seq = winStates[i];

        let pos1 = seq[0];
        let pos2 = seq[1];
        let pos3 = seq[2];

        if(board[pos1] == board[pos2] &&
            board[pos1] == board[pos3] &&
            board[pos1] != ''){
                
                playerTime = playerBeggin;
                return true;
            }
    }

    return false;
}


//! |- Criar uma variavél que receberá aleátório entre 0 e 1 
//! |- Escreve-la no display depois de apertar iniciar
//! |- Apaga-la quando o joagador clicar no quadrado