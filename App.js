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

// Routes
// app.get("", (req, res) => {
//     res.render("index");
// });

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/projects", (req, res) => {
    const data = fs.readFileSync("src/data/projects.json", "utf-8");
    const projects = JSON.parse(data);

    res.render("projects", { projects });
});

app.get("/", (req, res) => {
    res.render("index", {
        messages: [
            { id: 1, text: "Welcome Home" }
        ]
    });
});

app.get("/users", (req, res) => {
    res.render("users");
});

app.get("/create-user", (req, res) => {
    res.render("create-user");
});


// 404 handler (must be last)
app.use((req, res) => {
    res.status(404).render("404");
});

// Listen (always last)
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});