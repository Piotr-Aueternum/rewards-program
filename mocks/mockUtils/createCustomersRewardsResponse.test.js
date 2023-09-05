const {
  createCustomersRewardsResponse,
} = require("./createCustomersRewardsResponse");
const fullData = require("../customers_extended.json");
const customers = require("../customers.json");

describe("Calculate reward points", () => {
  test("Should properly calculate for both rewards", () => {
    expect(createCustomersRewardsResponse(customers)).toStrictEqual(fullData);
  });
});
