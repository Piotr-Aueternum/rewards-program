const express = require("express");
const customers_extended = require("./mocks/customers_extended.json");
const app = express();
const port = 3010;

app.get("/api/customers/rewards", (req, res) => {
  res.json(customers_extended);
});

app.listen(port, () => {
  console.log(`Mock server listen on port ${port}`);
});
