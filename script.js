
document.getElementById("solve-button").addEventListener("click", solveSudoku);
document.getElementById("reset-button").addEventListener("click", resetSuduko);

function solveSudoku() {
	console.log(arguments);
}

function resetSuduko() {
	console.log(arguments);
}

let sudokuTable = [];

for (let i = 0; i < 9; i++) {
	sudokuTable.push([])
	for (let j = 0; j < 9; j++) {
		sudokuTable[i].push((j + 1) + (i * 9));
		document.getElementById(`cell-${sudokuTable[i][j]}`).innerHTML = j + 1;
	}
}

