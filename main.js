import jsQR from 'jsqr';

const video = document.getElementById('qr-video');
const resultElement = document.getElementById('scanned-result');

async function setupCamera() {
  const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } });
  video.srcObject = stream;
  video.setAttribute("playsinline", true);
  video.play();
  requestAnimationFrame(tick);
}

function tick() {
  if (video.readyState === video.HAVE_ENOUGH_DATA) {
    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const code = jsQR(imageData.data, imageData.width, imageData.height);
    
    if (code) {
      resultElement.textContent = code.data;
    }
  }
  requestAnimationFrame(tick);
}

setupCamera();