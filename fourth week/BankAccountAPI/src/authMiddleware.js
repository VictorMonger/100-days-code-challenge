const jwt = require("jsonwebtoken");
const { JWT_PRIVATE_KEY } = process.env;

const verifyToken = (request, response, next) => {
  try {
    const { authorization } = request.headers;
    const [, token] = authorization.split(" ");

    if (!token) {
      return response.status(401).json({ error: "Access denied" });
    }

    const payload = jwt.verify(token, JWT_PRIVATE_KEY);
    request.headers["client"] = payload.client;

    next();
  } catch (error) {
    response.status(401).json({ error: "Invalid token" });
  }
};

module.exports = { verifyToken };
