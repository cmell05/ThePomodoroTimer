// Pomodoro Timer Setup
let workDuration = 25 * 60; 
let breakDuration = 5 * 60;
let isWorkTime = true; 
let timer; 
let currentTime = workDuration; 

const sessionDisplay = document.getElementById("sessionDisplay");
const statusDisplay = document.getElementById("status");
const startStopBtn = document.getElementById("startStopBtn");
const resetBtn = document.getElementById("resetBtn");

let isRunning = false;

// Format time for display (MM:SS)
function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, "0")}:${secs
    .toString()
    .padStart(2, "0")}`;
}

// Update the timer display
function updateDisplay() {
  sessionDisplay.textContent = formatTime(currentTime);
  statusDisplay.textContent = isWorkTime ? "Work Time" : "Break Time";
}

// Start/stop timer functionality
function toggleTimer() {
  if (isRunning) {
    clearInterval(timer);
    isRunning = false;
    startStopBtn.textContent = "Start";
  } else {
    timer = setInterval(() => {
      if (currentTime > 0) {
        currentTime--;
        updateDisplay();
      } else {
        // Switch between work and break
        isWorkTime = !isWorkTime;
        currentTime = isWorkTime ? workDuration : breakDuration;
        updateDisplay();
        alert(
          isWorkTime
            ? "Work session complete! Time for a break!"
            : "Break over! Back to work!"
        );
      }
    }, 1000);
    isRunning = true;
    startStopBtn.textContent = "Pause";
  }
}
