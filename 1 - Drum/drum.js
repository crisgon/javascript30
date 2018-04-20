window.addEventListener('keydown', playSound); 
window.addEventListener('keyup', removeClass);

function playSound (event){
  var audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  var key = document.querySelector(`div[data-key="${event.keyCode}"]`);
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
}

function removeClass (){
  var keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(function(item){
    item.classList.remove('playing');
  });
}
