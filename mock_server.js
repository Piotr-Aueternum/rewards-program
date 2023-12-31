const express = require("express");
const customers = require("./mocks/customers.json");
const {
  createCustomersRewardsResponse,
} = require("./mocks/mockUtils/createCustomersRewardsResponse");
const app = express();
const port = 3010;

app.get("/api/customers/rewards", (req, res) => {
  setTimeout(() => {
    res.json(createCustomersRewardsResponse(customers));
  }, 1500 * Math.random());
});

app.listen(port, () => {
  console.log(`Mock server listen on port ${port}`);
});
