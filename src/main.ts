import "./style.css";
import { renderGameBoard, updateGameBoardContent } from "./gameLoop";

// Render the board
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
