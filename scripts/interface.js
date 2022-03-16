// * Arquivo responsável por fazer o "meio de campo" entre
// * o HTML e a parte lógica do jogo

// todo => Criar evento nos quadrados, se algm clicar em um qdrdo, quero saber qual foi
// todo => Mostrar de quem é a vez

// ! <><><><><><> TESTE <><><><><><><><>


    const winningMessageElement = document.querySelector('#winningMessage');
    const winningMessageText = document.querySelector('[data-winning-message]');
    
    const playerDisplay = document.querySelector('[data-player-time]');

    // let inputN = document.querySelectorAll(".inputUser")
    // var playerName = inputN.value;


    function reset(){
        window.location.reload();
    }

// ! <><><><><><> TESTE <><><><><><><><>


// * Initial Screen
let firstScreen = document.querySelector('.containerInicio');
function playFunc(){
    firstScreen.style.display = 'none';
}

// * Add and remove glow shadow on mouseover and onmouseleave
var shine = document.getElementById("shine");

function addGlow() {
    shine.classList.add("shine");
}
function removeGlow() {
    shine.classList.remove("shine");
}

// * Imput Name section
let nameSection = document.querySelector('.nomePlayer-Section');
function comecarFun(){
    nameSection.style.display = 'none';
}


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
            // playerName = inputN[0].value;
        }
        else{
            playerTime = 0;
            // playerName = inputN[1].value;
        }

        setTimeout(() => {
            winningMessageText.innerText = `The player ${playerTime} is the Winner!`

            winningMessageElement.classList.add('show')
        }, 400);
    };
    updateSquare(position);
}

function updateSquare(position){
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}'></div>`
    playerDisplay.innerHTML = `É a vez do jogador ${playerTime}`
    // playerDisplay.innerHTML = "É a vez do jogador " + inputN[0];
}


// todo ==> Write the winner on the screen
// todo ==> Receive players name