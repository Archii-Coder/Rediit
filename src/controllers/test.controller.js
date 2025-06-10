const publicPath = (req, res, next) => {
  res.json("hello from public");
};
const privatePath = (req, res, next) => {
  res.json("hello from private");
};

const adminPath = (req, res) => {
  res.json("hello from admin");
};

module.exports = {
  publicPath,
  privatePath,
  adminPath,
};
