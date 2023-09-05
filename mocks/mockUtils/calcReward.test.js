const { calcReward } = require("./calcReward");

describe("Calculate reward points", () => {
  test("Should properly calculate for both rewards", () => {
    expect(
      calcReward(120, [
        {
          criteria: [
            { condition: "greaterOrEqual", value: 50 },
            { condition: "lessOrEqual", value: 100 },
          ],
          multiplier: 1,
        },
        {
          criteria: [{ condition: "greaterOrEqual", value: 100 }],
          multiplier: 2,
        },
      ]),
    ).toBe(90);
  });
  test("Should properly calculate for one reward within range", () => {
    expect(
      calcReward(80, [
        {
          criteria: [
            { condition: "greaterOrEqual", value: 50 },
            { condition: "lessOrEqual", value: 100 },
          ],
          multiplier: 1,
        },
        {
          criteria: [{ condition: "greaterOrEqual", value: 100 }],
          multiplier: 2,
        },
      ]),
    ).toBe(30);
  });
  test("Should properly calculate for value non-exceeding lessOrEqual", () => {
    expect(
      calcReward(18, [
        {
          criteria: [{ condition: "lessOrEqual", value: 110 }],
          multiplier: 3,
        },
      ]),
    ).toBe(54);
  });
  test("Should properly calculate for value exceeding lessOrEqual", () => {
    expect(
      calcReward(180, [
        {
          criteria: [{ condition: "lessOrEqual", value: 110 }],
          multiplier: 3,
        },
      ]),
    ).toBe(330);
  });
  test("Should return 0 for non-matching criteria", () => {
    expect(
      calcReward(22, [
        {
          criteria: [
            { condition: "greaterOrEqual", value: 50 },
            { condition: "lessOrEqual", value: 100 },
          ],
          multiplier: 1,
        },
        {
          criteria: [{ condition: "greaterOrEqual", value: 100 }],
          multiplier: 2,
        },
      ]),
    ).toBe(0);
  });
});
