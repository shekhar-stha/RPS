function imageChange(){
    var randomNumber1 = Math.floor(Math.random() * 3)+1;
    var randomImage1 = "images/rps" + randomNumber1 + ".png";
    
    var image1 = document.querySelectorAll("img") [0];
    
    image1.setAttribute("src", randomImage1);
    
    var randomNumber2 = Math.floor(Math.random() * 3)+1;
    var randomImage2 = "images/rps" + randomNumber2 + ".png";
    
    var image2 = document.querySelectorAll("img") [1];
    
    image2.setAttribute("src", randomImage2);
}

/**var Player1 = prompt("Enter Player 1 Name")
document.getElementById("player1").innerHTML = Player1;

var Player2 = prompt("Enter Player 2 Name")
document.getElementById("player2").innerHTML = Player2;