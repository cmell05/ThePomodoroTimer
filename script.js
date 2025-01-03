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

// Reset timer functionality
function resetTimer() {
  clearInterval(timer);
  isRunning = false;
  isWorkTime = true;
  currentTime = workDuration;
  startStopBtn.textContent = "Start";
  updateDisplay();
}

// Initialize display
updateDisplay();

// Add event listeners for the timer
startStopBtn.addEventListener("click", toggleTimer);
resetBtn.addEventListener("click", resetTimer);

// Task (Project) Management
const projectInput = document.getElementById("projectInput");
const addProjectBtn = document.getElementById("addProjectBtn");
const projectList = document.getElementById("projectList");

// Add task functionality
async function addTask() {
  const taskText = projectInput.value.trim();
  if (taskText) {
    try {
      const response = await fetch('https://modify-backend-podomoro-cmell05.replit.app/api/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        credentials: 'include',
        body: JSON.stringify({ task: taskText })
      });

      if (response.ok) {
        const listItem = document.createElement("li");
        listItem.textContent = taskText;
        projectList.appendChild(listItem);
        projectInput.value = ""; // Clear input field
      } else {
        alert('Failed to add task');
      }
    } catch (error) {
      console.error('Error adding task:', error);
      alert('Failed to add task');
    }
  }
}

// Event listener for adding a task
addProjectBtn.addEventListener("click", addTask);

// Optional: Allow pressing 'Enter' to add task
projectInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});

// Analytics functionality
const analyticsBtn = document.getElementById("analyticsBtn");
const analyticsSection = document.getElementById("analyticsSection");
const mainContainer = document.querySelector(".container");
const backBtn = document.getElementById("backBtn");

analyticsBtn.addEventListener("click", () => {
  const token = localStorage.getItem('token');
  if (!token) {
    alert('Please login or sign up to view analytics');
    return;
  }
  if (analyticsSection.style.display === "none") {
    analyticsSection.style.display = "block";
    mainContainer.style.display = "none";
    analyticsBtn.style.display = "none";
    document.querySelector('.project').style.display = "none";
   
    // Fetch analytics data
    fetch("https://modify-backend-podomoro-cmell05.replit.app/api/analytics", {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    })
      .then(response => {
        if (response.status === 401) {
          const analyticsDiv = document.getElementById('analyticsData');
          analyticsDiv.innerHTML = `
            <h2>Please Login to View Analytics</h2>
            <p>To track your progress, please <a href="login.html">login</a> or <a href="signup.html">sign up</a>.</p>
          `;
          throw new Error('Unauthorized');
        }
        return response.json();
      })
      .then(data => {
        console.log("Analytics data fetched successfully:", data);
      })
      .catch(error => {
        console.error("Error fetching analytics:", error);
      });

  }
});

backBtn.addEventListener("click", () => {
  analyticsSection.style.display = "none";
  mainContainer.style.display = "block";
  analyticsBtn.style.display = "block";
  document.querySelector('.project').style.display = "block";
});


