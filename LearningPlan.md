# 4-Week React Learning Plan (Weeks 2–5)

You already have the right foundation for React: HTML/CSS, some JavaScript, and Git.

This plan focuses on building practical frontend skills that directly support your final goal:

> A React frontend connected to a REST API with authentication, forms, and authenticated requests.

With 5–8 hours/week, the key is consistent hands-on practice rather than trying to learn every React feature.

---

# Recommended Core Stack

Use these tools throughout the plan:

- React + Vite
- JavaScript (not TypeScript yet)
- React Router
- Fetch API or Axios
- Context API for auth state
- LocalStorage for token persistence

---

# Week 2 — React Fundamentals + Component Thinking

## Main Goals

By the end of this week, you should understand:

- JSX
- Components
- Props
- State with `useState`
- Event handling
- Conditional rendering
- Rendering lists
- Basic project structure

---

## Recommended Resources

### Official Docs

- React Learn Docs
- Vite Getting Started

### Video Tutorials

- Net Ninja React Tutorial Series
- Traversy Media React Crash Course

---

## What to Build

### Exercise 1 — Counter + Toggle App

#### Practice

- `useState`
- buttons/events
- conditional rendering

#### Features

- Counter increment/decrement
- Show/hide section
- Reset button

---

### Exercise 2 — Simple Task Tracker

#### Practice

- Components
- Props
- Lists
- Form input basics

#### Features

- Add task
- Delete task
- Mark complete

---

## GitHub Requirement

Add all Week 2 exercises to your GitHub repository.

You can either:

- Create a new repository for React practice projects
- Or add a new `week-2-react-fundamentals/` folder to your existing learning repository

### Suggested Structure

```txt
week-2-react-fundamentals/
├── counter-toggle-app/
└── task-tracker/
```

### Git Workflow Expectations

Commit your code as you progress, not only at the end.

Example commit flow:

```bash
git add .
git commit -m "Initialize Vite React app"

git commit -m "Add counter functionality"

git commit -m "Implement toggle visibility feature"

git commit -m "Build task tracker form"

git commit -m "Add task completion logic"
```

### By the End of the Week

Your GitHub repository should show:

- Multiple meaningful commits
- Completed exercises
- Organized project structure
- A working React app that runs locally

---

## Suggested Time Breakdown

| Task | Hours |
|---|---|
| Learn JSX/components/state | 2 |
| Watch tutorial | 1–2 |
| Build exercises | 3–4 |

---

## Milestone Check

You are ready for Week 3 if you can:

- Create a React app from scratch
- Pass data using props
- Manage state with `useState`
- Render lists with `.map()`
- Handle form inputs
- Explain component re-rendering at a basic level

---

# Week 3 — Express + EJS CRUD Dashboard (Rewritten Based on Your Project)

## Overview

This week focuses on building a full **server-rendered CRUD application** using:

- Node.js
- Express.js
- EJS templates
- express-ejs-layouts
- JSON file storage (no database)
- Basic form handling

You are NOT using React this week.

Instead, you are building a real backend-driven web app.

---

# Final Project Outcome

By the end of Week 3, you will have:

- Multi-page Express app
- EJS templating system
- Full CRUD for users (Create, Read, Delete)
- JSON file persistence
- Dynamic routing
- Form handling with POST requests

---

# Project Structure

```txt
websiteLearning/
├── App.js
├── data/
│   ├── users.json
│   └── projects.json
├── views/
│   ├── index.ejs
│   ├── about.ejs
│   ├── users.ejs
│   ├── create-user.ejs
│   ├── projects.ejs
│   ├── 404.ejs
│   └── layouts/
│       └── full-width.ejs
├── public/
│   └── css/
├── package.json

## Week 4 — JWT Authentication Integration (Express + EJS)

## Main Goal

Connect your existing Express + EJS application to a JWT-protected API.

By the end of the week, users should be able to:

* Log in through your EJS frontend
* Receive a JWT token from the API
* Store the token
* Access protected features
* Make authenticated API requests
* Log out

---

## Topics

* Login forms
* JWT authentication
* Authentication flow
* Protected routes
* Authorization headers
* API communication
* Environment variables

---

## Recommended Resources

### JWT Authentication

* JWT Introduction
* MDN Authorization Header Documentation

### Environment Variables

* dotenv Documentation

### Fetch Requests

* MDN Fetch API Documentation

---

## What to Build

### Mini Project — Authenticated Frontend

Add authentication to your existing CRUD application.

Create:

* Login page
* Logout functionality
* Protected pages
* Protected API requests

---

## Authentication Flow

### Login

1. User enters username and password
2. Frontend sends credentials to API
3. API returns JWT token
4. Token is stored
5. User is redirected to a protected page

---

### Authenticated Requests

When accessing protected API endpoints:

```js
fetch(apiUrl, {
  headers: {
    Authorization: `Bearer ${token}`
  }
})
```

The JWT token should be included in every protected request.

---

## Features to Implement

### Login Page

Create:

```txt
views/login.ejs
```

Features:

* Username field
* Password field
* Login button
* Error display for failed logins

---

### Login Route

Create routes to:

```txt
GET /login
POST /login
```

Responsibilities:

* Display login form
* Submit credentials to API
* Process login response
* Store JWT token

---

### Token Storage

Store the JWT token after successful login.

Possible approaches:

* Session storage
* Cookie storage
* Temporary server-side storage

Focus on understanding the authentication flow rather than production security.

---

### Protected Pages

Examples:

```txt
/users
/create-user
/projects
```

Only allow access when a valid token exists.

Unauthenticated users should be redirected to:

```txt
/login
```

---

### Auth Middleware

Create middleware that:

1. Checks for a stored token
2. Verifies authentication state
3. Redirects unauthenticated users

Example concept:

```js
if (!token) {
  return res.redirect('/login');
}
```

---

### Logout

Create:

```txt
GET /logout
```

Responsibilities:

* Remove stored token
* Clear authentication state
* Redirect to login page

---

### Authenticated API Requests

Update protected functionality to include JWT tokens.

Examples:

* Get users
* Create user
* Delete user
* Future update operations

All protected requests should include:

```js
Authorization: Bearer <token>
```

---

## Suggested Folder Structure

```txt
src/
  middleware/
    auth.js

  services/
    api.js

views/
  login.ejs
```

---

## GitHub Requirement

Push all authentication work to your repository.

### Suggested Structure

```txt
week-4-authentication/
└── jwt-api-integration/
```

### Commit Expectations

Commit after major milestones.

Example commits:

```bash
git commit -m "Add login page"

git commit -m "Connect login form to JWT API"

git commit -m "Store authentication token"

git commit -m "Add authentication middleware"

git commit -m "Protect user routes"

git commit -m "Add logout functionality"

git commit -m "Send bearer token with API requests"
```

---

## By the End of the Week

Your repository should demonstrate:

* JWT login flow
* Token storage
* Protected pages
* Protected API requests
* Logout functionality
* Organized code structure
* Multiple meaningful commits

---

## Milestone Check

You are ready for Week 5 if you can:

* Log in successfully
* Receive a JWT token from the API
* Store and retrieve the token
* Access protected pages
* Make authenticated API requests
* Log out successfully
* Explain the complete JWT authentication flow

```

---

# Week 5 — Build Your Real REST API Frontend

## Main Goals

This week is integration + polishing.

You now combine everything into one functioning frontend application.

---

# Final Project Requirements

## Core Features

### Authentication

- Login page
- Persist login
- Logout

---

### API Integration

- GET data
- POST new data
- UPDATE existing data
- DELETE data (optional but recommended)

---

### Forms

- Validation
- Error handling

---

### UI

- Navigation
- Loading indicators
- Empty states

---

# Recommended Architecture

## Suggested App Flow

```txt
Login
  ↓
Store Token
  ↓
Authenticated Dashboard
  ↓
Fetch API Data
  ↓
Create/Edit/Delete Data
```

---

# Recommended Tools (Optional)

These are useful but not required yet.

## UI Libraries

- Tailwind CSS
- Bootstrap React

## HTTP Client

- Axios

---

# GitHub Requirement

Your final frontend project should be fully pushed to GitHub.

### Suggested Structure

```txt
final-react-rest-frontend/
```

### Commit Expectations

Continue committing throughout development.

Example commits:

```bash
git commit -m "Connect frontend to REST API"

git commit -m "Implement CRUD operations"

git commit -m "Add validation and error handling"

git commit -m "Refactor dashboard components"

git commit -m "Finalize MVP frontend"
```

### By the End of Week 5

Your GitHub repository should include:

- Full React frontend project
- Authentication flow
- REST API integration
- CRUD functionality
- Organized folder structure
- Consistent commit history
- Working local application

---

# Final Week Deliverables

By the end of Week 5, aim to have:

## Minimum Viable Product (MVP)

- React frontend deployed locally
- Connected to your REST API
- Login working
- Authenticated requests working
- CRUD operations functioning
- Clean component structure

---

# Final Milestone Checklist

You should be able to confidently explain:

- Component-based architecture
- State vs props
- `useEffect`
- Routing
- Controlled forms
- Authentication flow
- REST API integration
- Token-based authorization
- Basic React project organization

---

# Recommended Learning Strategy

Given your limited weekly time, prioritize this order:

1. Build first
2. Read docs second
3. Watch tutorials only when stuck

---

## Avoid

- Spending too long customizing UI
- Learning advanced state libraries too early
- Trying to master every hook immediately

> You do not need Redux yet for your stated project goals.

---

# Suggested End-of-Week Reflection Questions

At the end of each week, ask yourself:

- Can I rebuild this feature without copying?
- Can I explain why the code works?
- Can I debug basic issues myself?
- Could I extend this feature with one more capability?

If the answer is **“mostly yes,”** continue forward instead of trying to perfect everything.