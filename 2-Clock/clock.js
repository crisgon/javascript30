//analog
var secondsHand = document.querySelector('.second-hand');
var minHand = document.querySelector('.min-hand');
var hourHand = document.querySelector('.hour-hand');

//Digital
var secondDigital = document.querySelector('.digital-second');
var minDigital = document.querySelector('.digital-min');
var hourDigital = document.querySelector('.digital-hour');

function clock() {
  const date = new Date();
  // Seconds
  const seconds = date.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;
  if(seconds < 10)
    secondDigital.innerHTML = '0' + seconds;
  else
  secondDigital.innerHTML = seconds;


  // Minutes
  const minutes = date.getMinutes();
  const minutesDegrees = ((minutes / 60) * 360) + 90;
  minHand.style.transform = `rotate(${minutesDegrees}deg)`;
  minDigital.innerHTML = minutes;

  //Hours
  const hours = date.getHours();
  const hoursDegrees = ((hours / 60) * 360) + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
  hourDigital.innerHTML = hours;
}

setInterval(clock, 1000);