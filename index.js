

var random = Math.random();
var randomNumber1 = (random*6) + 1;
Math.floor(randomNumber1);


var random1 = Math.random();
var randomNumber2 = (random1*6) +1 ;
Math.floor(randomNumber2);



var randomDiceImage = "./images/dice" + Math.floor(randomNumber1) + ".png";


document.querySelector(".dice  .img1").setAttribute("src",randomDiceImage);


var randomDiceImage1 = "./images/dice" + Math.floor(randomNumber2) + ".png";


document.querySelector(".dice  .img2").setAttribute("src",randomDiceImage1);


if (randomDiceImage === randomDiceImage1) {
    document.querySelector("h1").textContent="DRAW";
}

else if (randomDiceImage > randomDiceImage1) {
    document.querySelector("h1").textContent="player 1 WINS ";
}

else if (randomDiceImage < randomDiceImage1) {
    document.querySelector("h1").textContent="Player 2 WINS ";
}
