
var begin = 0;
var turn ;
var listCells = document.getElementsByClassName('cell');

document.addEventListener('DOMContentLoaded', function(){
	console.log('Dom got loaded');
	document.getElementById('play').addEventListener('click', start);	
});


function start(){
	begin = 1;
	turn = 'X';
	for(var i = 0; i<9; i++){
		document.getElementById('c' + i).textContent = '';
		document.getElementById('c' + i).style.backgroundColor = 'yellow';
	}
	document.getElementById('play').textContent = 'Reset';
	console.log('let\'s play');

	for(var i = 0; i < 9; i++){
		listCells[i] = listCells[i].addEventListener('click', nextMove);
	}

}


function nextMove(){
	if (begin === 1){

		if (this.textContent == ''){
			this.textContent = turn;
			if(turn == 'X'){
				this.style.backgroundColor = 'red';
			}else{
				this.style.backgroundColor = 'green';
			}

			if (checkWin(turn)){
				document.getElementById("message").textContent = turn + " win. Congrats!";
				begin = 0;
			}else if(checkTie()){
				document.getElementById("message").textContent = "It's a tie game!!!";
				begin = 0;
			}else{
			switchTurn();
			}
		}else{
			document.getElementById("message").textContent = "this cell is already placed!";
		}
	}
}

function switchTurn(){
	if (turn === 'X'){
		turn = 'O';
	}else{
		turn = 'X';
	}
}

function checkWin(turn){
	if (checkThreeCells(0, 1, 2, turn) || checkThreeCells(3, 4, 5, turn) ||
		checkThreeCells(6, 7, 8, turn) || checkThreeCells(0, 3, 6, turn) ||
		checkThreeCells(1, 4, 7, turn) || checkThreeCells(2, 5, 8, turn) ||
		checkThreeCells(0, 4, 8, turn) || checkThreeCells(2, 4, 6, turn)
		) {
		return true;
	}else{
		return false;
	}
	
}

function checkTie(){
	for (var i = 0; i < 9; i++){
		if (document.getElementById('c' + i).textContent == ''){
			return false;
		}
	}
	return true;
}

function checkThreeCells(a,b,c,turn){
	if ( listCells[a].textContent === turn &&
		 listCells[b].textContent === turn &&
		 listCells[c].textContent === turn ) {
		return true;
	} 
		return false;
}

