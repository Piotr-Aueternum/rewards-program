import sumTransactionsPoints from "./sumTransactionsPoints";

describe("Sum transaction points", () => {
  test("Should return 0 for no arguments passed", () => {
    expect(sumTransactionsPoints()).toBe(0);
  });
  test("Should return 0 for no empty array", () => {
    expect(sumTransactionsPoints([])).toBe(0);
  });
  test("Should return 10 for given value", () => {
    expect(sumTransactionsPoints([{ points: 10 }])).toBe(10);
  });
  test("Should sum points for multiple records", () => {
    expect(sumTransactionsPoints([{ points: 10 }, { points: 20 }])).toBe(30);
  });
});
