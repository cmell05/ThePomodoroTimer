# Pomodoro Timer

A productivity web application that implements the **Pomodoro Technique**, helping users manage their time and tasks efficiently. This project includes a **frontend** (built with HTML, CSS, and JavaScript) and a **backend** (powered by Node.js and MongoDB).

---

## 🌟 Features

### **Frontend**
- Intuitive timer with start, stop, and reset functionality.
- Task management: Add, view, and delete tasks.
- Analytics section: Track session data (number of sessions and tasks completed)
- Responsive design for desktop users.

### **Backend**
- **User Authentication**: Signup, login, and secure session handling.
- **Task Management**: Save, retrieve, and delete user tasks.
- **Session Tracking**: Log completed Pomodoro sessions for analytics.
- **Database**: MongoDB for storing user and task data.

---

## 🚀 Getting Started

### Prerequisites
1. **Node.js**: Install from [Node.js Official Site](https://nodejs.org/).
2. **MongoDB**: Install and set up a MongoDB instance.

---

### **Setup**
1. Open `index.html` in your browser to use the app.
---

## 🛠️ Built With

**Frontend:** HTML, CSS, JavaScript  
**Backend:** Node.js, Express.js, MongoDB (Mongoose for schema modeling), JSON Web Tokens (JWT) for authentication

---
    
## 📖 How to Use

1. **Sign Up and Login**  
   - Navigate to the signup page  
   - Create an account and log in

2. **Use the Timer**  
   - Click **Start** to begin the timer  
   - The timer starts with 25 minutes for Work Time  
   - After 25 minutes, it automatically switches to a 5-minute Break Time  
   - Use the **Reset** button to stop and reset the timer

3. **Manage Tasks**  
   - Add tasks using the input field  
   - Mark tasks as complete  
   - Track task completion

4. **View Analytics**  
   - Click on **View Analytics**  
   - See completed session data including the number of Pomodoro sessions completed and associated tasks
