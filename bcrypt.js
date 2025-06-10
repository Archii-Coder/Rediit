const bcrypt = require("bcryptjs");

const password = "123password";

const salt = "$2b$10$yChk7UCAa5ioE3ZHcZhihu";
const hashed = bcrypt.hashSync(password, salt);

console.log(hashed);
