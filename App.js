import fetch from "node-fetch";
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import expressLayouts from "express-ejs-layouts";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import cookieParser from "cookie-parser";
import { requireAuth } from "./middleware/auth.js";

import jwt from "jsonwebtoken";


const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Static Files
app.use(express.static(path.join(__dirname, "public")));

// Template engine
app.use(expressLayouts);
app.set("layout", "./layouts/full-width");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use((req, res, next) => {
  const token = req.cookies.token;

  res.locals.user = null;

  if (token) {
    try {
      const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET || "secret"
      );

      res.locals.user = decoded;
    } catch (err) {
      res.locals.user = null;
    }
  }

  next();
});

app.use((req, res, next) => {
  res.locals.messages = [];
  next();
});


// Routes
// app.get("", (req, res) => {
//     res.render("index");
// });

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/listings", async (req, res) => {
  try {
    const response = await fetch("http://localhost:5000/listings");
    const data = await response.json();

    console.log("LISTINGS API RESPONSE:", data);

    const listings = data.results || [];

    res.render("listings", { listings });
  } catch (err) {
    console.error(err);
    res.render("listings", { listings: [] });
  }
});

app.get("/listings/new", requireAuth, async (req, res) => {
  try {
    const response = await fetch("http://localhost:5000/categories");
    const categories = await response.json();

    res.render("new-listing", { categories });
  } catch (err) {
    console.error(err);
    res.render("new-listing", { categories: [] });
  }
});

app.get("/listings/:id", async (req, res) => {
  try {
    const response = await fetch(`http://localhost:5000/listings/${req.params.id}`);
    const listing = await response.json();

    res.render("listing-detail", { listing });
  } catch (err) {
    console.error(err);
    res.redirect("/listings");
  }
});

app.get("/", (req, res) => {
    res.render("index", {
        messages: [
            { id: 1, text: "Welcome Home" }
        ]
    });
});

app.get("/users", requireAuth, (req, res) => {
    const data = fs.readFileSync(
        path.join(__dirname, "src", "data", "users.json"),
        "utf-8"
    );

    res.locals.messages = [
      { id: 1, text: "Users loaded successfully" }
    ];

    const users = JSON.parse(data);

    res.render("users", { users });
});

app.get("/create-user", (req, res) => {
    res.render("create-user");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/signup", (req, res) => {
  res.render("signup");
});

app.get("/users/:id", requireAuth, (req, res) => {
    const userId = Number(req.params.id);

    const data = fs.readFileSync(
        path.join(__dirname, "src", "data", "users.json"),
        "utf-8"
    );

    const users = JSON.parse(data);

    const user = users.find(user => user.id === userId);

    if (!user) {
        return res.status(404).render("404");
    }

    res.render("user", { user });
});

app.post("/signup", async (req, res) => {
  try {
    const response = await fetch("http://localhost:5000/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(req.body)
    });

    const data = await response.json();

    if (!response.ok) {
      console.log("Signup failed:", data);
      return res.redirect("/signup");
    }

    return res.redirect("/login");
  } catch (err) {
    console.error("Signup error:", err);
    return res.redirect("/signup");
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const response = await fetch("http://localhost:5000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: username,
        password
      })
    });

    const data = await response.json();

    if (!response.ok) {
      console.log("Login failed:", data);
      return res.redirect("/login");
    }

    // STORE JWT IN HTTPONLY COOKIE (THIS IS THE MISSING PART)
    res.cookie("token", data.token, {
      httpOnly: true,
      secure: false,   // true in production (HTTPS)
      sameSite: "lax"
    });

    return res.redirect("/users");
  } catch (err) {
    console.error("Login error:", err);
    return res.redirect("/login");
  }
});

app.post("/logout", (req, res) => {
  res.clearCookie("token");
  return res.redirect("/login");
});

app.post("/create-user", (req, res) => {
    const { name, email } = req.body;

    const filePath = path.join(__dirname, "src", "data", "users.json");

    const data = fs.readFileSync(filePath, "utf-8");
    const users = JSON.parse(data);

    const newUser = {
        id: Date.now(),
        name,
        email
    };

    users.push(newUser);

    fs.writeFileSync(filePath, JSON.stringify(users, null, 2));

    res.redirect("/users");
});

app.post("/delete-user/:id", (req, res) => {
    const userId = Number(req.params.id);

    const filePath = path.join(__dirname, "src", "data", "users.json");

    const data = fs.readFileSync(filePath, "utf-8");
    const users = JSON.parse(data);

    const updatedUsers = users.filter(user => user.id !== userId);

    fs.writeFileSync(
        filePath,
        JSON.stringify(updatedUsers, null, 2)
    );

    res.redirect("/users");
});

app.post("/listings/new", requireAuth, async (req, res) => {
  try {
    const token = req.cookies.token;

    const response = await fetch("http://localhost:5000/listings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(req.body)
    });

    if (!response.ok) {
      console.log("Failed to create listing");
      return res.redirect("/listings/new");
    }

    return res.redirect("/listings");
  } catch (err) {
    console.error(err);
    return res.redirect("/listings/new");
  }
});

app.post("/listings", requireAuth, async (req, res) => {
  try {
    const token = req.cookies.token;

    const response = await fetch("http://localhost:5000/listings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(req.body)
    });

    if (!response.ok) {
      const err = await response.json();
      console.log("Create listing failed:", err);
      return res.redirect("/listings/new");
    }

    return res.redirect("/listings");
  } catch (err) {
    console.error(err);
    return res.redirect("/listings/new");
  }
});




// 404 handler (must be last)
app.use((req, res) => {
    res.status(404).render("404");
});

// Listen (always last)
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});