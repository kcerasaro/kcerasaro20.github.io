let menuOpened = false;

let menu = document.getElementById("menu");
let main = document.getElementById("main");

function showMenu() {
	if (menuOpened) {
		menuOpened = false;
		menu.style.display = "none";
	} else {
		menuOpened = true;
		menu.style.display = "flex";
	}
};