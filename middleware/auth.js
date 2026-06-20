import jwt from "jsonwebtoken";

export function requireAuth(req, res, next) {
  const token = req.cookies.token;

  console.log("COOKIE TOKEN:", token);

  if (!token) {
    return res.redirect("/login");
  }

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || "secret"
    );

    req.user = decoded;

    console.log("USER:", decoded);

    next();
  } catch (err) {
    console.log("Invalid token");
    return res.redirect("/login");
  }
}