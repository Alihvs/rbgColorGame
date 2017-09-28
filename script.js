var numbSqueres = 6;
var colors =[];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons(){
	//Mode buttons
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numbSqueres = 3 : numbSqueres = 6;
			reset();
		});
	}
}

function setupSquares(){
	for(var i = 0; i < squares.length; i++) {
		//Add click listeners to squares
		squares[i].addEventListener("click", function(){
			var clickedColor = this.style.backgroundColor;
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct";
				resetButton.textContent = "Play Again!";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}		
		});
	}
}


function reset(){
	colors = generateRandomColors(numbSqueres);
	//pick a new random color from array
	pickedColor = pickColor();
	//chnage colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	//change colors of the squares on the page
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
		
	}
	h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function(){
	reset();
});

function changeColors(color){
	//loop through all squares 
	for (var i = 0; i < squares.length; i++){
		// change each color to match given color
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//Make an array
	var  arr = [];
	//Add num random colors to array
	for (var i = 0; i < num; i++){
		//get random color puch into array
		arr.push(randomColor());
	}
	//Return Array
	return arr;
}

function randomColor(){
	//Pick a "red from 0-255"
	var r = Math.floor(Math.random() * 256);
	//Pick a "green from 0-255"
	var g = Math.floor(Math.random() * 256);
	//Pick a "blue from 0-255"
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
	
}