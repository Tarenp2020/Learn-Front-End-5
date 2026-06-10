import express from "express";
import expressLayouts from "express-ejs-layouts";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

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


// Routes
// app.get("", (req, res) => {
//     res.render("index");
// });

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/projects", (req, res) => {
    const data = fs.readFileSync(
        path.join(__dirname, "src", "data", "projects.json"),
        "utf-8"
    );

    const projects = JSON.parse(data);

    res.render("projects", { projects });
});

// app.get("/projects", (req, res) => {
//     const data = fs.readFileSync("src/data/projects.json", "utf-8");
//     const projects = JSON.parse(data);

//     res.render("projects", { projects });
// });

app.get("/", (req, res) => {
    res.render("index", {
        messages: [
            { id: 1, text: "Welcome Home" }
        ]
    });
});

app.get("/users", (req, res) => {
    const data = fs.readFileSync(
        path.join(__dirname, "src", "data", "users.json"),
        "utf-8"
    );

    const users = JSON.parse(data);

    res.render("users", { users });
});

app.get("/create-user", (req, res) => {
    res.render("create-user");
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  console.log("Username:", username);
  console.log("Password:", password);

  res.send("Login form submitted");
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




// 404 handler (must be last)
app.use((req, res) => {
    res.status(404).render("404");
});

// Listen (always last)
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});