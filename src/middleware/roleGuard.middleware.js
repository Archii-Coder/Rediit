module.exports = (role) => (req, res, next) => {
  const { user } = req;
  if (!user) {
    return res.status(401).json({ error: "unauthorized" });
  }
  if (user.role !== role) {
    return res.status(403).json({ error: "invalid permission" });
  }
  next();
};
