import express from "express";
import expressLayouts from "express-ejs-layouts";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Static Files
app.use(express.static("public"));
app.use("/css", express.static(path.join(__dirname, "public/css")));

// Template engine
app.use(expressLayouts);
app.set("view engine", "ejs");

// Routes
app.get("/", (req, res) => {
    res.render("index");
});

// Listen
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});