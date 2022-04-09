import dictionary from "./dictionary.json";
import { getRandomWordFromDict } from "./utils";
import { IGameCell } from "./types/types";

let selectedWord = getRandomWordFromDict(dictionary);
console.log(selectedWord);

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
				gameBoardHTML[i][j].classList.add("exist");
			}

			if (cell.isCorrect) {
				gameBoardHTML[i][j].classList.add("correct");
			}

			if (!cell.isReady) {
				gameBoardHTML[i][j].classList.add("done");
			}
		});
	});
}

function checkRowInputWithSelectedWord(
	selectedWord: string[],
	row: IGameCell[]
) {
	row.forEach((cell, i) => {
		selectedWord.forEach((letter, j) => {
			if (cell.content === letter && i === j) {
				cell.isCorrect = true;
				return;
			}

			if (cell.content === letter) {
				cell.isExist = true;
				return;
			}

			cell.isReady = false;
		});
	});
}

let inputIndex = 0;
let rowIndex = 0;

// TODO: Refactor this
function updateGameBoardContent(content: string) {
	const isRowEmpty = !gameBoard[rowIndex].every((cell) => cell.content !== "");

	if (content.length === 1 && inputIndex <= 4) {
		if (isRowEmpty) {
			gameBoard[rowIndex][inputIndex].content = content;
			gameBoardHTML[rowIndex][inputIndex].classList.add("zoom__in");
		}

		if (inputIndex < 4) {
			inputIndex++;
		}

		renderGameBoard();
	}

	if (content === "ENTER" && !isRowEmpty && rowIndex <= 5) {
		inputIndex = 0;

		checkRowInputWithSelectedWord(selectedWord, gameBoard[rowIndex]);
		updateKeyboardElements();
		renderGameBoard();

		if (rowIndex < 5) {
			rowIndex++;
		}
	}

	if ((content === "DEL" || content === "BACKSPACE") && inputIndex > -1) {
		if (!gameBoard[rowIndex][inputIndex].content && inputIndex !== 0) {
			let tempIndex = inputIndex - 1;

			gameBoard[rowIndex][tempIndex].content = "";
			gameBoardHTML[rowIndex][tempIndex].classList.remove("zoom__in");
		} else if (inputIndex == 4) {
			gameBoard[rowIndex][inputIndex].content = "";
			gameBoardHTML[rowIndex][inputIndex].classList.remove("zoom__in");

			renderGameBoard();

			return;
		} else {
			gameBoard[rowIndex][inputIndex].content = "";
			gameBoardHTML[rowIndex][inputIndex].classList.remove("zoom__in");
		}

		if (inputIndex >= 1) {
			inputIndex--;
		}

		renderGameBoard();
	}
}

function updateKeyboardElements() {
	const keyboard = document.querySelectorAll<HTMLDivElement>(".keyboard__key");

	gameBoard.forEach((row) => {
		row.forEach((cell) => {
			keyboard.forEach((key) => {
				if (cell.isCorrect && cell.content === key.innerHTML) {
					key.classList.add("correct");
				}

				if (cell.isExist && cell.content === key.innerHTML) {
					key.classList.add("exist");
				}

				if (!cell.isReady && cell.content === key.innerHTML) {
					key.classList.add("done");
				}
			});
		});
	});
}

export { renderGameBoard, updateGameBoardContent, gameBoard };
