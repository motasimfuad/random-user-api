const express = require("express");
const app = express();
const port = 8000;
const userRoutes = require("./routes/user.routes");

app.use("/user", userRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to random user api");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
