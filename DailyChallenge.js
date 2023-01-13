/*
Create an input type text that takes/shows only letters. (ie. numbers and special characters won’t be accepted)

Hint: use one of the following events to remove any character that is not a letter

keyup event
or keypress event
or keydown event
or input event

Hint : Check out keycodes in Javascript or Regular Expressions
*/ 
let input = document.querySelector("#text"); // We could use "document.getElementById('text')"
let display = document.querySelector("#display");

input.addEventListener("keypress",lettersOutput);

function lettersOutput(e){
   let letters=e.target.value;
   if (e.keyCode<65 || e.keyCode>122 || (90<e.keyCode && e.keyCode<97)){ // the input will not take care of keys out of "a-z-A-Z"
       e.preventDefault();
       console.log(e.keyCode)
   }
    else{
       letters=letters+ e.key;
       display.innerHTML=letters
       display.style.fontSize="60px";
   }
}
