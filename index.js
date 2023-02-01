var random = Math.floor((Math.random()*6)+1);
if(random === 1)
{
    document.querySelector(".img1").setAttribute("src","images/dice1.png")
}
else if(random === 2)
{
    document.querySelector(".img1").setAttribute("src","images/dice2.png")
}
else if(random === 3)
{
    document.querySelector(".img1").setAttribute("src","images/dice3.png")
}
else if(random === 4)
{
    document.querySelector(".img1").setAttribute("src","images/dice4.png")
}
else if(random === 5)
{
    document.querySelector(".img1").setAttribute("src","images/dice5.png")
}
else if(random === 6)
{
    document.querySelector(".img1").setAttribute("src","images/dice6.png")
}


var random1 = Math.floor((Math.random()*6)+1);
if(random1 === 1)
{
    document.querySelector(".img2").setAttribute("src","images/dice1.png")
}
else if(random1 === 2)
{
    document.querySelector(".img2").setAttribute("src","images/dice2.png")
}
else if(random1 === 3)
{
    document.querySelector(".img2").setAttribute("src","images/dice3.png")
}
else if(random1 === 4)
{
    document.querySelector(".img2").setAttribute("src","images/dice4.png")
}
else if(random1 === 5)
{
    document.querySelector(".img2").setAttribute("src","images/dice5.png")
}
else if(random1 === 6)
{
    document.querySelector(".img2").setAttribute("src","images/dice6.png")
}

if(random === random1)
{
    document.querySelector("h1").textContent = "Draw !";
}
else if(random > random1)
{
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
    // document.querySelector("h1").textContent = "Player 1 Wins!";
}
else if(random < random1)
{
    document.querySelector("h1").textContent = "🚩Player 2 Wins!";
}