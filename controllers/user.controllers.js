function getRandomUser(req, res) {
  res.send("random user");
}

function getAllUsers(req, res) {
  res.send("all users");
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
