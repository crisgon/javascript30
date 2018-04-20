const $panel = document.querySelectorAll('.panel');

function toggleOpen () {
  console.log('Hello!');
  this.classList.toggle('open');
}

function toggleActive (event) {
  console.log(event.propertyName);
  if(event.propertyName.includes('flex'))
    this.classList.toggle('open-active');
}

$panel.forEach(panel => panel.addEventListener('click', toggleOpen));
$panel.forEach(panel => panel.addEventListener('transitionend', toggleActive));