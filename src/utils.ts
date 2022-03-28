export function getRandomWordFromDict(dict: string[]): string[] {
	return dict[Math.floor(Math.random() * dict.length)].toUpperCase().split("");
}
