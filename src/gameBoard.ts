import { IGameCell } from "./types/types";

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

// Get each row in the HTML and store all of it in a 2D array
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

export { gameBoard, gameBoardHTML };
