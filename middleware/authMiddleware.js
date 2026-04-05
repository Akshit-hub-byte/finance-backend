import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {

  const authHeader = req.headers.authorization;
   console.log("Authorization Header:", authHeader);
  if (!authHeader) {
    return res.status(401).json({ message: "No token provided" });
  }

  const token = authHeader.split(" ")[1];
   console.log("Extracted Token:", token); 

  try {

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
     console.log("Decoded Token:", decoded);
    req.user = decoded;

    next();

  } catch (error) {
     console.log("JWT Error:", error.message); 

    return res.status(401).json({ message: "Invalid token" });

  }

};