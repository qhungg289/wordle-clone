import "./style.css";
import dictionary from "./dictionary.json";
import { renderGameBoard, updateGameBoardContent } from "./gameBoard";
import { getRandomWordFromDict } from "./utils";

// First, get a new random word from the dictionary
let selectedWord = getRandomWordFromDict(dictionary);
console.log(selectedWord);

// Then, render the board
renderGameBoard();

// Get all the keyboard elements
const keyboard = document.querySelectorAll<HTMLDivElement>(".keyboard__key");

// Assign event listeners for all the on screen keyboard elements
keyboard.forEach((key) => {
	key.onclick = () => {
		updateGameBoardContent(key.innerHTML);
	};
});

// Assign event listener for hardware keyboard
document.onkeydown = (event: KeyboardEvent) => {
	const keyName = event.key.toUpperCase();
	const regex = /[a-zA-Z]/;

	if (
		(regex.test(keyName) && keyName.length === 1) ||
		keyName === "ENTER" ||
		keyName === "BACKSPACE"
	) {
		updateGameBoardContent(keyName);
	}
};
