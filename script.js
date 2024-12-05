let left =document.querySelector (".left");
let right =document.querySelector (".right");
let leftRight =document.querySelector (".leftRight");
let village=document.querySelector (".village");
let castle =document.querySelector (".castle");
let text = document.querySelector ("p");
let emoji =document.querySelector (".emoji");
let eat =document.querySelector (".eat");
let end =document.querySelector (".end");
let dragon = document.querySelector (".dragon");
let dragon2 = document.querySelector (".dragon2");
let run = document.querySelector (".run");
let king = document.querySelector (".king");
let action = document.querySelector (".action");

village.style.display= "none";
castle.style.display= "none";
emoji.style.display="none";
eat.style.display="none";
end.style.display="none";
dragon.style.display="none";
dragon2.style.display="none";
run.style.display="none";
king.style.display="none";
action.style.display="none";





// Left choice  Left choice  Left choice  Left choice  Left choice  Left choice  Left choice  Left choice  Left choice  Left choice

left.addEventListener ("click", function(){
    leftRight.style.display= "none";
    left.style.display= "none";
    right.style.display= "none";
    village.style.display= "block";
text.innerHTML="You run into a village! Double click to talk to the villagers"
});



village.addEventListener ("dblclick", function(){
    leftRight.style.display= "none";
    left.style.display= "none";
    right.style.display= "none";
    village.style.display= "none";
    eat.style.display= "block";
    emoji.style.display= "block";
    text.innerHTML="Villagers! They lead you to mushrooms that will give you powers. Hover over one to eat it."
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




// Right choice Right choice Right choice Right choice Right choice Right choice Right choice Right choice Right choice Right choice
right.addEventListener ("click", function(){
    leftRight.style.display= "none";
    left.style.display= "none";
    right.style.display= "none";
    castle.style.display= "block";
text.innerHTML="You run into a castle! Double click to get closer to the castle."
});

castle.addEventListener ("dblclick", function(){
    leftRight.style.display= "none";
    left.style.display= "none";
    right.style.display= "none";
    castle.style.display= "none";
    dragon.style.display= "block";
    run.style.display= "block";
text.innerHTML="Oh no theres a dragon! Hover over the arrow to sneak past it."
});


run.addEventListener ("mouseenter", function(){
    leftRight.style.display= "none";
    left.style.display= "none";
    right.style.display= "none";
    castle.style.display= "none";
    dragon.style.display= "none";
    dragon2.style.display= "block";
    run.style.display= "none";
    text.innerHTML="Oh no it woke up, now it wants to eat you! Click it to kill it before it kills you."
    });

    dragon2.addEventListener ("mouseenter", function(){
        leftRight.style.display= "none";
        left.style.display= "none";
        right.style.display= "none";
        castle.style.display= "none";
        dragon.style.display= "none";
        dragon2.style.display= "none";
        run.style.display= "none";
        king.style.display= "block";
        text.innerHTML="Congrats you killed the dragon and the king gives you his respect. You win!"
        });
    