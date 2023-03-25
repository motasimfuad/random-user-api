const fs = require("fs");

function getRandomUser(req, res) {
  res.send("random user");
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
  res.send("user deleted");
}

module.exports = {
  getRandomUser,
  getAllUsers,
  saveNewUser,
  updateUser,
  bulkUpdateUsers,
  deleteUser,
};
