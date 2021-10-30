let myImage = document.querySelector('img');

myImage.addEventListener('click', function(){
	let mySrc = myImage.getAttribute('src');
	if (mySrc === 'images/main-image.jpg') {
		myImage.setAttribute('src', 'images/second-image.jpg');
	} else {
		myImage.setAttribute('src', 'images/main-image.jpg');
	}
});