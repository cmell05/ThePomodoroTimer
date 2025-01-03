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

// Initialize display
updateDisplay();
