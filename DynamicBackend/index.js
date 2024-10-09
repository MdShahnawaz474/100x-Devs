const express = require("express");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const jwtPassword = "123456";

const app = express();
app.use(express.json());

const ALL_USERS = [
  { username: "harkirat@gmail.com", password: "123", name: "Harkirat Singh" },
  { username: "raman@gmail.com", password: "123321", name: "Raman Singh" },
  { username: "priya@gmail.com", password: "123321", name: "Priya Kumari" },
];

function userExists(username, password) {
  let userExists = false;
  for (let i =0; i<ALL_USERS.length ; i++){
    if (ALL_USERS[i].username == username && ALL_USERS[i].password == password){
      userExists= true;
    }
  }
  return userExists;
}

app.post("/signin", function (req, res) {
  const username= req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesn't exist in our in-memory DB",
    });
  }

  var token = jwt.sign({ username: username }, jwtPassword);
  
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;

  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;

    const users = ALL_USERS.filter(user => user.username !== username);
    return res.json(users);
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
