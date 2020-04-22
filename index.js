var numberOfDrumBotton = document.querySelectorAll(".drum").length;
var sound = new Audio ();

for(var i=0; i < numberOfDrumBotton; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
var buttonInnerHtml = this.innerHTML;
makeSound(buttonInnerHtml);
buttonAnimation(buttonInnerHtml);
});
}

document.addEventListener("keydown", function(event){
  var keyPressed = event.key;
  makeSound(keyPressed);
  buttonAnimation(keyPressed);
});


function makeSound(key){
  var keyPressed = key;
  switch (keyPressed) {
    case "w":
    sound.src= ("sounds/crash.mp3");
    sound.play();
      break;
    case "a":
    sound.src= ("sounds/kick-bass.mp3");
    sound.play();
      break;
    case "s":
    sound.src= ("sounds/snare.mp3");
    sound.play();
      break;
    case "d":
    sound.src= ("sounds/tom-1.mp3");
    sound.play();
    break;
    case "j":
    sound.src= ("sounds/tom-2.mp3");
    sound.play();
    break;
    case "k":
    sound.src= ("sounds/tom-3.mp3");
    sound.play();
    break;
    case "l":
    sound.src= ("sounds/tom-4.mp3");
    sound.play();
    break;
    default:
    console.log(keyPressed);
  }
}

function buttonAnimation(cureentKey){
  var activeButton = document.querySelector("."+cureentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);
}
