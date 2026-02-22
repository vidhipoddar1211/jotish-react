You are GitHub Copilot acting as a senior React developer.

Build a complete ReactJS internship assignment application.

Tech stack:
- React (Vite)
- JavaScript
- react-router-dom
- axios
- recharts
- react-webcam

Application requirements:

1) Login Page
- Two inputs: username and password
- Hardcoded credentials:
  username: testuser
  password: Test123
- Show error message if invalid
- On success navigate to /list

2) List Page
- Fetch data using axios POST request
- API URL: https://backend.jotish.in/backend_dev/gettabledata.php
- POST body:
  {
    "username": "test",
    "password": "123456"
  }
- Display API response in a table
- Each row must be clickable
- On row click navigate to /details and pass selected row data via router state
- Add a button to navigate to /chart page

3) Details Page
- Read selected row data from router state
- Display all fields clearly
- Add webcam functionality using react-webcam
- Capture photo and navigate to /photo page with captured image

4) Photo Result Page
- Display captured image
- Add a button to go back to list page

5) Salary Bar Chart Page
- Use Recharts
- Plot salary of first 10 employees
- X-axis: employee names
- Y-axis: salary

General rules:
- Use functional components
- Use React hooks
- Use clean and readable code
- Beginner-friendly and fully working
- Use React Router for navigation

Folder structure:
src/
 ├─ components/
 │   ├─ Login.jsx
 │   ├─ List.jsx
 │   ├─ Details.jsx
 │   ├─ PhotoResult.jsx
 │   ├─ SalaryChart.jsx
 ├─ services/
 │   └─ api.js
 ├─ App.jsx
 ├─ main.jsx