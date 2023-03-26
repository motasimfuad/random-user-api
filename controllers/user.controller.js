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
  const allFields = ["id", "gender", "name", "contact", "address", "photoUrl"];
  const body = req.body;
  const hasALlFields = allFields.every((field) =>
    Object.keys(body).includes(field)
  );
  if (!hasALlFields) {
    const missingProperties = allFields.filter(
      (field) => !Object.keys(body).includes(field)
    );
    res.status(400).send(`[${missingProperties}] fields are required!`);
    return;
  }
  fs.readFile("./users.json", (err, data) => {
    if (err) {
      console.log(err);
      res.status(400).send("Something went wrong");
    } else {
      const users = JSON.parse(data);
      if (users.some((user) => user.id === body.id)) {
        res.status(400).send("User already exists");
        return;
      }
      users.push(body);
      fs.writeFile("./users.json", JSON.stringify(users), (err) => {
        if (err) {
          console.log(err);
          res.status(400).send("Something went wrong");
        } else {
          res.json({
            status: "success",
            data: body,
          });
        }
      });
    }
  });
}

function updateUser(req, res) {
  const { id } = req.params;
  const body = req.body;
  fs.readFile("./users.json", (err, data) => {
    if (err) {
      console.log(err);
      res.status(400).send("Something went wrong");
    } else {
      const users = JSON.parse(data);
      const userFound = users.some((user) => user.id === id);
      if (!userFound) {
        res.status(400).send("User not found");
        return;
      } else {
        const user = users.find((user) => user.id === id);
        const updatedUser = { ...user, ...body };
        console.log(updatedUser);
        const updatedUsers = users.map((oldUser) => {
          if (oldUser.id === id) {
            return updatedUser;
          } else {
            return oldUser;
          }
        });
        fs.writeFile("./users.json", JSON.stringify(updatedUsers), (err) => {
          if (err) {
            console.log(err);
            res.status(400).send("Something went wrong");
          } else {
            res.json({
              status: "success",
              data: updatedUser,
            });
          }
        });
      }
    }
  });
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
