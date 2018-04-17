const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');


function getVideo() {
  navigator.mediaDevices.getUserMedia({ video: true, audio: false })
  .then(mediaStream => {
    video.src = window.URL.createObjectURL(mediaStream);
    video.play();
  })
  .catch(e => console.log(e));
}

function paintCanvas() {
  const width = video.videoWidth;
  const height = video.videoHeight;
  canvas.width = width;
  canvas.height = height;
  
  return setInterval(() => {
    ctx.drawImage(video, 0, 0, 650, 450);
    // let pixels = rgbEffect(pixels,0,0,0);
    // ctx.putImageData(pixels, 0, 0);
    // ctx.globalAlpha = 0.7;
  }, 16);
}

function takePhoto() {
  // Play the sound
  snap.currentTime = 0;
  snap.play();

  // take the data out of the canvas
  const data = canvas.toDataURL('image/jpg');
  const link = document.createElement('a');
  link.href = data;
  link.setAttribute('download', 'handsome');
  link.innerHTML = `<img src="${data}" alt="Handsome"/>`;
  strip.insertBefore(link, strip.firstChild);
}


// function rgbEffect(pixels, r = 0, g = 0, b = 0) {
//   for(let i = 0; i < pixels.data.length; i+=4) {
//     pixels.data[i + 0] = pixels.data[i + 0] + r; // RED
//     pixels.data[i + 1] = pixels.data[i + 1] - g; // GREEN
//     pixels.data[i + 2] = pixels.data[i + 2] * b; // Blue
//   }
//   return pixels;
// }



getVideo();

video.addEventListener('canplay', paintCanvas);