const { validateToken } = require("../utils/jwt");

module.exports = (req, res, next) => {
  const authorization = req.header("Authorization");
  if (!authorization) {
    return res.status(401).json({ error: "missing authorization token" });
  }

  const [type, token] = authorization.split(" ");
  if (type !== "Bearer" || !token) {
    return res.status(401).json({ error: "invalid token" });
  }

  const payload = validateToken(token);
  if (!payload) {
    return res.status(401).json({ error: "invalid token" });
  }
  req.user = payload;
  next();
};
