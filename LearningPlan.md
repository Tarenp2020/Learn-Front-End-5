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

# Week 3 — Routing, Forms, Effects, and API Calls

## Main Goals

Learn how React apps become real frontend applications.

### Topics

- `useEffect`
- Fetching data from APIs
- Loading/error states
- React Router
- Controlled forms
- Basic app architecture

---

## Recommended Resources

### Routing

- React Router Docs

### API + Effects

- React `useEffect` Docs
- MDN Fetch API Guide

### Forms

- React Forms Documentation

---

## What to Build

### Mini Project — “Frontend Dashboard”

Build a small multi-page React app.

### Pages

- Home
- Users
- Create User Form
- About

### Use a Free API

- JSONPlaceholder API

### Features

- Fetch and display users/posts
- Loading spinner/text
- Error handling
- Form with validation
- Navigation using React Router

---

## GitHub Requirement

Add your Week 3 project work to your GitHub repository.

### Suggested Structure

```txt
week-3-react-routing-api/
└── frontend-dashboard/
```

### Commit Expectations

Commit after completing major features.

Example commits:

```bash
git commit -m "Set up React Router pages"

git commit -m "Fetch users from API"

git commit -m "Add loading and error states"

git commit -m "Build controlled user form"

git commit -m "Refactor components into folders"
```

### By the End of the Week

Your repository should include:

- Multi-page React application
- API integration
- Form handling
- Organized component structure
- Multiple meaningful commits

---

## Key Concepts to Practice

### `useEffect`

Use it for:

- API calls
- Loading data on component mount

---

### Controlled Forms

Use state for all form values.

---

### API Flow

Practice:

1. Request data
2. Store response in state
3. Render UI
4. Handle loading/errors

---

## Milestone Check

You are ready for Week 4 if you can:

- Fetch data from an API
- Use `useEffect` correctly
- Build multi-page apps with React Router
- Submit forms
- Handle loading/error states
- Structure components into folders

---

# Week 4 — Authentication + Protected API Requests

## Main Goals

This week connects directly to your final backend/frontend integration goal.

### Topics

- Login forms
- JWT/token concepts
- Auth state management
- Protected routes
- Sending auth headers
- Environment variables

---

## Recommended Resources

### Authentication

- React Authentication Patterns (LogRocket)
- MDN Authorization Header Docs

### Environment Variables

- Vite Env Variables Guide

---

## What to Build

### Mini Project — Authenticated Frontend

Create:

- Login page
- Dashboard page
- Logout button

Mock authentication is okay if your API is not ready yet.

---

## Features to Implement

### Authentication Flow

1. User logs in
2. API returns token
3. Store token in `LocalStorage`
4. Include token in requests

Example request flow:

```js
fetch('/api/protected', {
  headers: {
    Authorization: `Bearer ${token}`
  }
})
```

---

### Protected Routes

#### Unauthenticated users

- redirected to login

#### Authenticated users

- can access dashboard

---

## Suggested Folder Structure

```txt
src/
  components/
  pages/
  services/
  context/
  hooks/
```

---

## GitHub Requirement

Push all authentication-related work to your GitHub repository.

### Suggested Structure

```txt
week-4-authentication/
└── authenticated-frontend/
```

### Commit Expectations

Commit after major authentication milestones.

Example commits:

```bash
git commit -m "Create login form"

git commit -m "Store auth token in localStorage"

git commit -m "Add protected routes"

git commit -m "Attach bearer token to API requests"

git commit -m "Implement logout functionality"
```

### By the End of the Week

Your repository should demonstrate:

- Authentication flow
- Protected frontend routes
- Token persistence
- Authenticated API requests
- Clean code organization
- Multiple meaningful commits

---

## Milestone Check

You are ready for Week 5 if you can:

- Log users in
- Store/retrieve auth token
- Make authenticated requests
- Protect routes/pages
- Organize frontend code cleanly

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