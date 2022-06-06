export const readable = (inputText: string) => {
	return inputText.replace(/_/g, " ").replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase());
};
