import "./style.css";
import dictionary from "./dictionary.json";

function getRandomWordFromDict(dict: string[]): string {
	return dict[Math.floor(Math.random() * dict.length)].toUpperCase();
}

const selectedWord = getRandomWordFromDict(dictionary);
console.log(selectedWord);

const keyboard = document.querySelectorAll<HTMLDivElement>(".keyboard__key");

keyboard.forEach((key) => {
	if (key.innerHTML.length == 1) {
		key.onclick = () => {
			console.log(key.innerHTML);
		};
	}
});

document.onkeydown = (event: KeyboardEvent) => {
	const keyName = event.key.toUpperCase();

	if (keyName.length === 1 && !parseInt(keyName)) {
		console.log(keyName);
	}
};
