interface IGameCell {
	content: string;
	isExist: boolean;
	isCorrect: boolean;
	isReady: boolean;
}

const gameBoard: IGameCell[][] = [
	[
		{ content: "", isExist: false, isCorrect: false, isReady: true },
		{ content: "", isExist: false, isCorrect: false, isReady: true },
		{ content: "", isExist: false, isCorrect: false, isReady: true },
		{ content: "", isExist: false, isCorrect: false, isReady: true },
		{ content: "", isExist: false, isCorrect: false, isReady: true },
	],
	[
		{ content: "", isExist: false, isCorrect: false, isReady: true },
		{ content: "", isExist: false, isCorrect: false, isReady: true },
		{ content: "", isExist: false, isCorrect: false, isReady: true },
		{ content: "", isExist: false, isCorrect: false, isReady: true },
		{ content: "", isExist: false, isCorrect: false, isReady: true },
	],
	[
		{ content: "", isExist: false, isCorrect: false, isReady: true },
		{ content: "", isExist: false, isCorrect: false, isReady: true },
		{ content: "", isExist: false, isCorrect: false, isReady: true },
		{ content: "", isExist: false, isCorrect: false, isReady: true },
		{ content: "", isExist: false, isCorrect: false, isReady: true },
	],
	[
		{ content: "", isExist: false, isCorrect: false, isReady: true },
		{ content: "", isExist: false, isCorrect: false, isReady: true },
		{ content: "", isExist: false, isCorrect: false, isReady: true },
		{ content: "", isExist: false, isCorrect: false, isReady: true },
		{ content: "", isExist: false, isCorrect: false, isReady: true },
	],
	[
		{ content: "", isExist: false, isCorrect: false, isReady: true },
		{ content: "", isExist: false, isCorrect: false, isReady: true },
		{ content: "", isExist: false, isCorrect: false, isReady: true },
		{ content: "", isExist: false, isCorrect: false, isReady: true },
		{ content: "", isExist: false, isCorrect: false, isReady: true },
	],
	[
		{ content: "", isExist: false, isCorrect: false, isReady: true },
		{ content: "", isExist: false, isCorrect: false, isReady: true },
		{ content: "", isExist: false, isCorrect: false, isReady: true },
		{ content: "", isExist: false, isCorrect: false, isReady: true },
		{ content: "", isExist: false, isCorrect: false, isReady: true },
	],
];

const firstGameBoardRow = document.querySelectorAll(".first__row");
const secondGameBoardRow = document.querySelectorAll(".second__row");
const thirdGameBoardRow = document.querySelectorAll(".third__row");
const fourthGameBoardRow = document.querySelectorAll(".fourth__row");
const fifthGameBoardRow = document.querySelectorAll(".fifth__row");
const sixthGameBoardRow = document.querySelectorAll(".sixth__row");

const gameBoardHTML = [
	firstGameBoardRow,
	secondGameBoardRow,
	thirdGameBoardRow,
	fourthGameBoardRow,
	fifthGameBoardRow,
	sixthGameBoardRow,
];

function renderGameBoard() {
	gameBoard.forEach((row, i) => {
		row.forEach((cell, j) => {
			gameBoardHTML[i][j].innerHTML = cell.content;

			if (cell.isExist) {
				gameBoardHTML[i][j].classList.add("letter__exist");
			}

			if (cell.isCorrect) {
				gameBoardHTML[i][j].classList.add("letter__correct");
			}

			if (!cell.isReady) {
				gameBoardHTML[i][j].classList.add("cell__done");
			}
		});
	});
}

let inputIndex = 0;
let rowIndex = 0;

function updateGameBoardContent(content: string) {
	const isRowEmpty = !gameBoard[rowIndex].every((row) => row.content !== "");

	if (content.length === 1 && inputIndex <= 4) {
		if (isRowEmpty) {
			gameBoard[rowIndex][inputIndex].content = content;
		}

		if (inputIndex < 4) {
			inputIndex++;
		}

		renderGameBoard();
	}

	if (content === "ENTER" && !isRowEmpty && rowIndex <= 5) {
		inputIndex = 0;

		if (rowIndex < 5) {
			rowIndex++;
		}
	}

	if (content === "DEL" && inputIndex > -1) {
		if (!gameBoard[rowIndex][inputIndex].content && inputIndex !== 0) {
			let tempIndex = inputIndex - 1;
			gameBoard[rowIndex][tempIndex].content = "";
		} else if (inputIndex == 4) {
			gameBoard[rowIndex][inputIndex].content = "";
			renderGameBoard();
			return;
		} else {
			gameBoard[rowIndex][inputIndex].content = "";
		}

		if (inputIndex >= 1) {
			inputIndex--;
		}

		renderGameBoard();
	}
}

export { renderGameBoard, updateGameBoardContent, gameBoard };
