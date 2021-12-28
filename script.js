var css = document.querySelector("h3");
var color1 = document.querySelector("#gradient1");
var color2 = document.querySelector("#gradient2");
var body = document.querySelector("#coloring");
var button = document.querySelector(".radious");

function set_gradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + "," + color2.value + ")";
 
    css.textContent = body.style.background + ";";
}

color1.addEventListener("input", set_gradient);

color2.addEventListener("input", set_gradient);


// Random color selector
button.addEventListener("click", getRandomColor);

function randomColor() {
	var color = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' 
	+ (Math.floor(Math.random() * 256)) + ',' 
	+ (Math.floor(Math.random() * 256)) + ')';
  return color;
}

color1.addEventListener("input", setGradient());
color2.addEventListener("input", setGradient());

function getRandomColor() {
	var rndColor1 = randomColor();
	var rndColor2 = randomColor();
	body.style.background = "linear-gradient(to right, " + rndColor1 + ", " 
	+ rndColor2 +")";
    css.textContent = body.style.background + ";";
}
