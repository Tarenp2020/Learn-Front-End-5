4-Week React Learning Plan (Weeks 2–5)

You already have the right foundation for React: HTML/CSS, some JavaScript, and Git.
This plan focuses on building practical frontend skills that directly support your final goal:

A React frontend connected to a REST API with authentication, forms, and authenticated requests.

With 5–8 hours/week, the key is consistent hands-on practice rather than trying to learn every React feature.

Recommended Core Stack

Use these tools throughout the plan:

React + Vite
JavaScript (not TypeScript yet)
React Router
Fetch API or Axios
Context API for auth state
LocalStorage for token persistence
Week 2 — React Fundamentals + Component Thinking
Main Goals

By the end of this week, you should understand:

JSX
Components
Props
State with useState
Event handling
Conditional rendering
Rendering lists
Basic project structure
Recommended Resources
Official Docs
React Learn Docs
Vite Getting Started
Video Tutorials
Net Ninja React Tutorial Series
Traversy Media React Crash Course
What to Build
Exercise 1 — Counter + Toggle App

Practice:

useState
buttons/events
conditional rendering

Features:

Counter increment/decrement
Show/hide section
Reset button
Exercise 2 — Simple Task Tracker

Practice:

Components
Props
Lists
Form input basics

Features:

Add task
Delete task
Mark complete
Suggested Time Breakdown
Task	Hours
Learn JSX/components/state	2
Watch tutorial	1–2
Build exercises	3–4
Milestone Check

You are ready for Week 3 if you can:

Create a React app from scratch
Pass data using props
Manage state with useState
Render lists with .map()
Handle form inputs
Explain component re-rendering at a basic level
Week 3 — Routing, Forms, Effects, and API Calls
Main Goals

Learn how React apps become real frontend applications.

Topics:

useEffect
Fetching data from APIs
Loading/error states
React Router
Controlled forms
Basic app architecture
Recommended Resources
Routing
React Router Docs
API + Effects
React useEffect Docs
MDN Fetch API Guide
Forms
React Forms Documentation
What to Build
Mini Project — “Frontend Dashboard”

Build a small multi-page React app.

Pages:

Home
Users
Create User Form
About

Use a free API:

JSONPlaceholder API

Features:

Fetch and display users/posts
Loading spinner/text
Error handling
Form with validation
Navigation using React Router
Key Concepts to Practice
useEffect

Use it for:

API calls
loading data on component mount
Controlled Forms

Use state for all form values.

API Flow

Practice:

Request data
Store response in state
Render UI
Handle loading/errors
Milestone Check

You are ready for Week 4 if you can:

Fetch data from an API
Use useEffect correctly
Build multi-page apps with React Router
Submit forms
Handle loading/error states
Structure components into folders

Week 4 — Authentication + Protected API Requests
Main Goals

This week connects directly to your final backend/frontend integration goal.

Topics:

Login forms
JWT/token concepts
Auth state management
Protected routes
Sending auth headers
Environment variables
Recommended Resources
Authentication
React Authentication Patterns (LogRocket)
MDN Authorization Header Docs
Environment Variables
Vite Env Variables Guide
What to Build
Mini Project — Authenticated Frontend

Create:

Login page
Dashboard page
Logout button

Mock authentication is okay if your API is not ready yet.

Features to Implement
Authentication Flow
User logs in
API returns token
Store token in LocalStorage
Include token in requests

Example request flow:

fetch('/api/protected', {
  headers: {
    Authorization: `Bearer ${token}`
  }
})
Protected Routes

Unauthenticated users:

redirected to login

Authenticated users:

can access dashboard
Suggested Folder Structure
src/
  components/
  pages/
  services/
  context/
  hooks/
Milestone Check

You are ready for Week 5 if you can:

Log users in
Store/retrieve auth token
Make authenticated requests
Protect routes/pages
Organize frontend code cleanly

Week 5 — Build Your Real REST API Frontend
Main Goals

This week is integration + polishing.

You now combine everything into one functioning frontend application.

Final Project Requirements
Core Features
Authentication
Login page
Persist login
Logout
API Integration
GET data
POST new data
UPDATE existing data
DELETE data (optional but recommended)
Forms
Validation
Error handling
UI
Navigation
Loading indicators
Empty states
Recommended Architecture
Suggested App Flow
Login
  ↓
Store Token
  ↓
Authenticated Dashboard
  ↓
Fetch API Data
  ↓
Create/Edit/Delete Data
Recommended Tools (Optional)

These are useful but not required yet.

UI Libraries
Tailwind CSS
Bootstrap React
HTTP Client
Axios
Final Week Deliverables

By the end of Week 5, aim to have:

Minimum Viable Product (MVP)
React frontend deployed locally
Connected to your REST API
Login working
Authenticated requests working
CRUD operations functioning
Clean component structure
Final Milestone Checklist

You should be able to confidently explain:

Component-based architecture
State vs props
useEffect
Routing
Controlled forms
Authentication flow
REST API integration
Token-based authorization
Basic React project organization
Recommended Learning Strategy

Given your limited weekly time, prioritize this order:

Build first
Read docs second
Watch tutorials only when stuck

Avoid:

Spending too long customizing UI
Learning advanced state libraries too early
Trying to master every hook immediately

You do not need Redux yet for your stated project goals.

Suggested End-of-Week Reflection Questions

At the end of each week, ask yourself:

Can I rebuild this feature without copying?
Can I explain why the code works?
Can I debug basic issues myself?
Could I extend this feature with one more capability?

If the answer is “mostly yes,” continue forward instead of trying to perfect everything.