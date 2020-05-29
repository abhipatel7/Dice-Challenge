var imagesArray = ["images/dice 1.png", "images/dice 2.png", "images/dice 3.png", 
    "images/dice 4.png", "images/dice 5.png", "images/dice 6.png"];

var randomNumber1 = Math.floor(Math.random() * imagesArray.length);
document.querySelector(".img1").setAttribute("src", imagesArray[randomNumber1]);

var randomNumber2 = Math.floor(Math.random() * imagesArray.length);
document.querySelector(".img2").setAttribute("src", imagesArray[randomNumber2]);

if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "<img class='victory' src='images/victory.png'>Player1 Wins!";
} if(randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player2 Wins!<img class='victory' src='images/victory.png'>";
} if(randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "It's a Draw!";
}
