//select all squares on board
let squares = document.querySelectorAll(".square");
let resetButton = document.querySelector("#resetBtn");
let playerTurn = 0;
let currentPlayer;


function isCurrentPlayer(){
    if(playerTurn % 2 !== 0){
     currentPlayer  = "O";
	 return currentPlayer;
}else{
    currentPlayer = "X";
	return currentPlayer;
}
}

resetButton.addEventListener("click", function(){
    console.log("the reset button was clicked");
});

for (let i = 0; i < squares.length; i++) {
    const square = squares[i];
    square.addEventListener("click", function(){
        if(playerTurn % 2 === 0 && this.textContent === ""){    
            this.textContent = "X";
            isCurrentPlayer();
            isWinner();
            playerTurn++;
        }else if(this.textContent === ""){
            this.textContent = "O";
            isCurrentPlayer();
            isWinner();
            playerTurn++;
        }
    })
};



function isWinner() {
    //check if player has won either vertically, horizontally or diagonally 
    //check for horizontal win
    for(let i = 0; i <= 6; i += 3) {
       if( (squares[i].textContent !== "") && (squares[i].textContent === squares[i + 1].textContent) && 
            (squares[i].textContent === squares[i + 2].textContent)){
                console.log("player " + currentPlayer + " has won!!");
            }
    }
    //check for vertical win
    for(let i = 0; i < 3; i++) {
        if( (squares[i].textContent !== "") && (squares[i].textContent === squares[i + 3].textContent) && 
        (squares[i].textContent === squares[i + 6].textContent)){
            console.log("player " + currentPlayer + " has won!!");
        }  
    }
    //check for left diagonal win
     for(let i = 0; i <  1; i++) {
        if( (squares[i].textContent !== "") && (squares[i].textContent === squares[i + 4].textContent) && 
        (squares[i].textContent === squares[i + 8].textContent)){
            console.log("player " + currentPlayer + " has won!!"); 
        } 
    }
        //check for right diagonal win
        for(let i = 2; i < 3; i++) {
            if( (squares[i].textContent !== "") && (squares[i].textContent === squares[i + 2].textContent) && 
            (squares[i].textContent === squares[i + 4].textContent)){
                console.log("player " + currentPlayer + " has won!!"); 
            } 
        }
} 
 



