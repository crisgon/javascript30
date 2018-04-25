let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

function  timer(seconds) {
  const now = Date.now();
  const then = now + seconds * 1000;
  
  clearInterval(countdown);

  displayTimeLeft(seconds);
  displayEndTime(then);

  countdown = setInterval(()=> {
    const secondsLeft = Math.round((then - Date.now()) / 1000);

    if(secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${remainderSeconds < 10 ? '0' : '' }${remainderSeconds}`;
  timerDisplay.textContent = display;
  document.title = display;
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const minute = end.getMinutes();
  endTime.textContent = `Be Back At ${hour}:${minute < 10 ? '0' : ''}${minute}`;
}

function startTime() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTime));
document.customForm.addEventListener('submit', function(e){
  e.preventDefault();
  const min = this.minutes.value;
  timer(min * 60);
});