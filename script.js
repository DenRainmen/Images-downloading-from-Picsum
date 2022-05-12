function changePicture() {

	let myData = +prompt("Input picture ID:  ");

	let myUrl = `url(https://picsum.photos/id/${myData}/1200)`;

	let html = document.documentElement;

	html.style.setProperty('--baseUrl', myUrl);

}