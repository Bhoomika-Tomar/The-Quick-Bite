import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  try {
    // Get token either from `authorization` header or custom `token` header
    let token = req.headers["authorization"] || req.headers["token"];

    if (!token) {
      return res.status(401).json({ success: false, message: "NOT AUTHORISED, LOGIN AGAIN" });
    }

    // Remove "Bearer " if present
    if (token.startsWith("Bearer ")) {
      token = token.slice(7, token.length).trim();
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.userId = decoded.id; // safer than modifying req.body
    next();
  } catch (error) {
    console.error("Auth error:", error.message);
    return res.status(401).json({ success: false, message: "Invalid or expired token" });
  }
};

export default authMiddleware;
