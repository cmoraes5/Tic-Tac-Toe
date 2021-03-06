// * Arquivo responsável por fazer o "meio de campo" entre
// * o HTML e a parte lógica do jogo

// todo => Criar evento nos quadrados, se algm clicar em um qdrdo, quero saber qual foi
// todo => Mostrar de quem é a vez

// ! <><><><><><> TESTE <><><><><><><><>
console.log(playerBeggin);


    const winningMessageElement = document.querySelector('#winningMessage');
    const winningMessageText = document.querySelector('[data-winning-message]');
    
    const playerDisplay = document.querySelector('[data-player-time]');
    const DDisplay = document.querySelector('[data-playerBg]');

    function newPlayerBeggin(){
        playerTime == playerBeggin;
        DDisplay.innerHTML = `player ${teste} starts`;
    }


    function reset(){
            gameOver = false
            board = ["", "", "", "", "", "", "", "", ""]
            let squares = document.querySelectorAll(".square");
            
            for (let square of squares) {
                square.innerHTML = ""
                
                nameSection.style.display = "none"
            }
            winningMessageElement.classList.remove('show');
            count = [];
    }

function back(){
    reset();
    count = [];
    nameSection.style.display = "flex";
    x[0].value = '';
    x[1].value = '';
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
var x = document.getElementsByTagName("input");

let nameSection = document.querySelector('.nomePlayer-Display');

function comecarFun(){
    
    //  ?
    let body = document.getElementById("body");
    newPlayerBeggin();
    
    // let placarDisplay = document.querySelector(".placarDisplay")
    
    
    if (x[0].value == "" &&
    x[1].value == "") {
        // swal("Ops!", "Preencha os dois Campos",{
        swal("Ops!", "Fill in both fields",{
            className: "colorAlert",
        });
    }
    
    else if (x[0].value == x[1].value) {
        // swal("Xii!", "Não pode haver nomes iguais",{
        swal("Sorry", "Can't have the same name twice",{
            className: "colorAlert",
        });
    }
    
    else if (x[0].value == "") {
        // swal("Tem coisa faltando...", "Escreva o nome do Primeiro Player",{
        swal("Wait...", "Type the fisrt player name",{
            className: "colorAlert",
        });
    }
    
    else if (x[1].value == "") {
        // swal("Tem coisa faltando...", "Escreva o nome do Segundo Player",{
        swal("Wait...", "Type the second player name",{
            className: "colorAlert",
        });
    }
    
    else {
        nameSection.style.display = "none";
        placarDisplay.style.display = "block";
        body.style.height = "112vh";
    }
    
    //  ?
    
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
        }
        else{
            playerTime = 0;
        }

        
        
        setTimeout(() => {
            winningMessageText.innerText = `${playerName} is the winner!`
            
            winningMessageElement.classList.add('show')
        }, 100);
    };
    updateSquare(position);
}

function updateSquare(position){
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}'></div>`
    playerDisplay.innerHTML = `It's ${playerName} turn`
}

function isDraw(){
    setTimeout(() => {
        winningMessageText.innerText = `Draw...`

        winningMessageElement.classList.add('show')
    }, 100);
}

let teste;
if(playerTime == 0){
    teste = 1;
}else{
    teste = 2;
}


function easterEgg(){
    setTimeout(() => {
        shine.innerHTML = "Congratulations, you found the easter egg! 🥚"
        }, 15000);
    }




// todo ==> Write the winner on the screen
// todo ==> Receive players name