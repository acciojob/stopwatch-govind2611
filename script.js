let startTime = 0;
let interval;
let isRunning = false;

function updateDisplay() {
  const currentTime = new Date().getTime() - startTime;
  const hours = String(Math.floor(currentTime / 3600000)).padStart(2, '0');
  const minutes = String(Math.floor((currentTime % 3600000) / 60000)).padStart(2, '0');
  const seconds = String(Math.floor((currentTime % 60000) / 1000)).padStart(2, '0');
  document.getElementById('time').textContent = `${hours}:${minutes}:${seconds}`;
}

function start() {
  if (!isRunning) {
    startTime = new Date().getTime() - (startTime > 0 ? startTime : 0);
    interval = setInterval(updateDisplay, 1000);
    isRunning = true;
    document.getElementById('start').disabled = true;
    document.getElementById('pause').disabled = false;
    document.getElementById('stop').disabled = false;
  }
}

function pause() {
  if (isRunning) {
    clearInterval(interval);
    isRunning = false;
    document.getElementById('pause').textContent = 'Continue';
  } else {
    interval = setInterval(updateDisplay, 1000);
    isRunning = true;
    document.getElementById('pause').textContent = 'Pause';
  }
}

function stop() {
  clearInterval(interval);
  isRunning = false;
  startTime = 0;
  document.getElementById('time').textContent = '00:00:00';
  document.getElementById('start').disabled = false;
  document.getElementById('pause').disabled = true;
  document.getElementById('stop').disabled = true;
  document.getElementById('pause').textContent = 'Pause';
}

// Initialize the display
updateDisplay();
