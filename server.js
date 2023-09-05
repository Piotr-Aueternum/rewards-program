const express = require("express");
const path = require("path");
const customers = require("./mocks/customers.json");
const {
  createCustomersRewardsResponse,
} = require("./mocks/mockUtils/createCustomersRewardsResponse");
const app = express();
const port = 3000;

app.use("/static", express.static("build/static"));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/build/index.html"));
});

app.get("/api/customers/rewards", (req, res) => {
  res.json(createCustomersRewardsResponse(customers));
});

app.listen(port, () => {
  console.log(`Server listen on port ${port}`);
});
