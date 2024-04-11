const slide = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let next = document.querySelector('.arrow_right');
let prev = document.querySelector('.arrow_left');
let dots = document.querySelectorAll('.dot');

var counter = 0;

next.addEventListener('click', slideRight);
function slideRight(){
if(counter >= slide.length-1){
	counter = 0;
}
else{
	counter++;
}
document.getElementById("image").src = "assets/images/slideshow/" + slide[counter]["image"];
indicators();
changeText();
}

prev.addEventListener('click', slideLeft);
function slideLeft(){
if(counter == 0){
	counter = slide.length-1;
}
else{
	counter--;
}
document.getElementById("image").src = "assets/images/slideshow/" + slide[counter]["image"];
indicators();
changeText();
}

function indicators(){
	for(i = 0; i < dots.length; i++){
		dots[i].className = dots[i].className.replace(' dot_selected', '');
	}
	dots[counter].className += ' dot_selected';
}

function changeText() {
	document.getElementById("Line").innerHTML = slide[counter]["tagLine"];
 }