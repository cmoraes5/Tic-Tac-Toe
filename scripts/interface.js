// * Arquivo responsável por fazer o "meio de campo" entre
// * o HTML e a parte lógica do jogo

// todo => Criar evento nos quadrados, se algm clicar em um qdrdo, quero saber qual foi

document.addEventListener('DOMContentLoaded', ()=>{

    let squares =  document.querySelectorAll(".square");

    squares.forEach((square)=>{
        square.addEventListener('click', handleClick);
    })

});


function handleClick(event){

    console.log(event.target);
    console.log(board);

    let square = event.target;
    let position = square.id;

    if(handleMove(position)){
        if(playerTime == 0){
            playerTime = 1;
        }
        else{
            playerTime = 2;
        }

        setTimeout(() => {
            alert("O Jogo acabou - O vencedor foi o player " + playerTime)
        }, 11);
    };
    updateSquare(position);
}

function updateSquare(position){
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}'></div>`
}

function reset(){
    window.location.reload();
}

// todo ==> Write the winner on the screen
// todo ==> Receive players name