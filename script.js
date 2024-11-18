let left =document.querySelector (".left");
let right =document.querySelector (".right");
let leftRight =document.querySelector (".leftRight");
let village=document.querySelector (".village");
let castle =document.querySelector (".castle");
let text =document.querySelector ("p");


village.style.display= "none";
castle.style.display= "none";


left.addEventListener ("click", function(){
leftRight.style.display= "none";
left.style.display= "none";
right.style.display= "none";
village.style.display= "block";
text.innerHTML="You run into a village! To talk to villagers double click the image"

});

right.addEventListener ("click", function(){
    leftRight.style.display= "none";
    left.style.display= "none";
    right.style.display= "none";

    castle.style.display= "block";
text.innerHTML="You run into a castle!"
});