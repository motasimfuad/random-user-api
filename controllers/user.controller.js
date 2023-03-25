const fs = require("fs");

function getRandomUser(req, res) {
  fs.readFile("./users.json", (err, data) => {
    if (err) {
      console.log(err);
      res.status(400).send("Something went wrong");
    } else {
      const users = JSON.parse(data);
      const randomUser = users[Math.floor(Math.random() * users.length)];
      res.json({
        status: "success",
        data: randomUser,
      });
    }
  });
}

function getAllUsers(req, res) {
  fs.readFile("./users.json", (err, data) => {
    if (err) {
      console.log(err);
      res.status(400).send("Something went wrong");
    } else {
      res.json({
        status: "success",
        data: JSON.parse(data),
      });
    }
  });
}

function saveNewUser(req, res) {
  res.send("user saved");
}

function updateUser(req, res) {
  res.send("user updated");
}

function bulkUpdateUsers(req, res) {
  res.send("bulk users are updated");
}

function deleteUser(req, res) {
  const { id } = req.params;
  console.log(id);
  fs.readFile("./users.json", (err, data) => {
    if (err) {
      console.log(err);
      res.status(400).send("Something went wrong");
    } else {
      const users = JSON.parse(data);
      const filteredUsers = users.filter((user) => user.id !== id);
      fs.writeFile("./users.json", JSON.stringify(filteredUsers), (err) => {
        if (err) {
          console.log(err);
          res.status(400).send("Something went wrong");
        } else {
          res.send("User deleted successfully!");
        }
      });
    }
  });
}

module.exports = {
  getRandomUser,
  getAllUsers,
  saveNewUser,
  updateUser,
  bulkUpdateUsers,
  deleteUser,
};
