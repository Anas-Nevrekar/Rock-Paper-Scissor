var randomNumber = Math.floor(Math.random()*3)+1;
// alert(randomNumber);
document.querySelectorAll("img")[1].src = "image"+randomNumber+".png";
// document.querySelector("h1").innerHTML="Bye";
if(randomNumber===2)
{
    document.querySelector("h1").innerHTML="You won";
}
else if(randomNumber===1)
{
    document.querySelector("h1").innerHTML="You lose";
}
else
{
    document.querySelector("h1").innerHTML="Withdraw";
}