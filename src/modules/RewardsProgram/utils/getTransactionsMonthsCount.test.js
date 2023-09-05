import getTransactionsMonthsCount from "./getTransactionsMonthsCount";

describe("Get transaction months count", () => {
  test("Should return 0 for no arguments passed", () => {
    expect(getTransactionsMonthsCount()).toBe(0);
  });
  test("Should return 0 for empty array", () => {
    expect(getTransactionsMonthsCount([])).toBe(0);
  });
  test("Should return 1 for one month", () => {
    expect(getTransactionsMonthsCount([{ date: "21/08/2023" }])).toBe(1);
  });
  test("Should return 1 for two same months", () => {
    expect(
      getTransactionsMonthsCount([
        { date: "21/08/2023" },
        { date: "25/08/2023" },
      ]),
    ).toBe(1);
  });
  test("Should return 2 for two different months", () => {
    expect(
      getTransactionsMonthsCount([
        { date: "21/08/2023" },
        { date: "21/07/2023" },
      ]),
    ).toBe(2);
  });
});
