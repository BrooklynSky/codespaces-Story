let left =document.querySelector (".left");
let right =document.querySelector (".right");
let leftRight =document.querySelector (".leftRight");
let village=document.querySelector (".village");
let castle =document.querySelector (".castle");
let text =document.querySelector ("p");
let emoji =document.querySelector (".emoji");
let eat =document.querySelector (".eat");
let end =document.querySelector (".end");


village.style.display= "none";
castle.style.display= "none";
emoji.style.display="none";
eat.style.display="none";
end.style.display="none";

// Left choice

left.addEventListener ("click", function(){

leftRight.style.display= "none";
left.style.display= "none";
right.style.display= "none";

village.style.display= "block";
text.innerHTML="You run into a village! To talk to villagers double click the image"
});


village.addEventListener ("dblclick", function(){
    leftRight.style.display= "none";
    left.style.display= "none";
    right.style.display= "none";
    village.style.display= "none";
    eat.style.display= "block";
    emoji.style.display= "block";
    text.innerHTML="Villagers! They lead you to mushrooms that will give you powers. Press enter to eat them."
    });

emoji.addEventListener ("mouseenter", function(){
    leftRight.style.display= "none";
    left.style.display= "none";
    right.style.display= "none";
    village.style.display= "none";
    emoji.style.display= "none";
    eat.style.display= "none";
    end.style.display= "block";
    text.innerHTML="The mushrooms were poisonous"
    });




// Right choice
right.addEventListener ("click", function(){
    leftRight.style.display= "none";
    left.style.display= "none";
    right.style.display= "none";

    castle.style.display= "block";
text.innerHTML="You run into a castle!"
});

