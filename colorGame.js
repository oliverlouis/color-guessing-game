var numSquares = 6;
var colors = generateRandomColors(numSquares);
//Assign a variable to store the squares
var squares = document.querySelectorAll(".square");
//Assign a Picked Color to one of the sqaures(Hard Coded)
var pickedColor = pickColor();
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click", function() {
  //add or remove button background color
  easyBtn.classList.add("selected");
  hardBtn.classList.remove("selected");
  numSquares = 3;
  //generate 3 new random colors
  colors = generateRandomColors(numSquares);
  //choose new winning color
  pickedColor = pickColor();
  //set message display to display new winning color
  colorDisplay.textContent = pickedColor;
  //loop through squares and assign 3 new colors to first 3 squares and hide last 3 squares
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
});

hardBtn.addEventListener("click", function() {
  hardBtn.classList.add("selected");
  easyBtn.classList.remove("selected");
  numSquares = 6;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.display = "block";
  }
});

resetButton.addEventListener("click", function() {
  //generate all new colors
  colors = generateRandomColors(numSquares);
  //pick new random color from array
  pickedColor = pickColor();
  //change color display to match pickedColor
  colorDisplay.textContent = pickedColor;
  //change h1 color back to the color of the body
  h1.style.backgroundColor = "#232323";
  //change colors of squares
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
});

//Loop through the squares and assign a hard coded color to each square
for (var i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i];
  //add click listeners to all the squares
  squares[i].addEventListener("click", function() {
    //grab color of picked square
    var clickedColor = this.style.backgroundColor;
    // compare color to pickedColor
    if (clickedColor === pickedColor) {
      //display "correct" in the message display
      messageDisplay.textContent = "Correct!";
      //change text content of reset button to "Play Again?"
      resetButton.textContent = "Play Again?";
      //change the color of all squares to match the correct color when clicked
      changeColors(clickedColor);
      //change h1 background to match correct color
      h1.style.background = clickedColor;
    } else {
      //make clicked squares disappear by changing their background to match color of the body
      this.style.background = "#232323";
      //display "Try Again!" in the message display
      messageDisplay.textContent = "Try Again!";
    }
  });
}

var colorDisplay = document.getElementById("colorDisplay");
//Change the Displayed color in the title to match the picked color
colorDisplay.textContent = pickedColor;

// ************************************FUNCTIONS********************************************

function changeColors(color) {
  //loop through squares in order to change each color to match correct color
  for (var i = 0; i < squares.length; i++) {
    //change each square to match given color
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  //Generate a random number between 0 and the length of the colors Array
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  //Make and array
  var arr = [];
  //add "num" random colors to array
  for (var i = 0; i < num; i++) {
    //get random color and push into arr
    arr.push(randomColor());
  }
  // return array
  return arr;
}

function randomColor() {
  //pick red from 0 - 255
  var r = Math.floor(Math.random() * 256);
  //pick green from 0 - 255
  var g = Math.floor(Math.random() * 256);
  //pick blue from 0 - 255
  var b = Math.floor(Math.random() * 256);
  //Return "rgb(r, g, b)"
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
