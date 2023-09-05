const CONDITION = {
  greaterOrEqual: "greaterOrEqual",
  lessOrEqual: "lessOrEqual",
};

/**
 * @typedef Reward
 * @type {object}
 * @property {number} multiplier - matching criteria multiplier
 * @property {{condition: keyof CONDITION, value: number}[]} criteria - criteria
 */

const calcs = {
  greaterOrEqual: (amount, min) => {
    if (amount >= min) {
      return amount - min;
    }
    return 0;
  },
  lessOrEqual: (amount, max) => {
    return Math.max(0, Math.min(amount, max));
  },
  greaterOrEqualAndLessOrEqual: (amount, min, max) => {
    const minDiff = amount - min;
    const maxDiff = max - min;

    return Math.max(0, Math.min(minDiff, maxDiff));
  },
};

const criteriaToObj = (criteria) =>
  criteria
    .map((criterion) => ({ [criterion.condition]: criterion.value }))
    .reduce(Object.assign, {});

/**
 * @param {number} amount
 * @param {Reward} reward - reward
 */
const calcPoints = (amount, reward) => {
  const criteria = criteriaToObj(reward.criteria);
  const greaterOrEqual = criteria[CONDITION.greaterOrEqual];
  const lessOrEqual = criteria[CONDITION.lessOrEqual];

  if (greaterOrEqual !== undefined && lessOrEqual !== undefined) {
    return calcs.greaterOrEqualAndLessOrEqual(
      amount,
      greaterOrEqual,
      lessOrEqual,
    );
  } else if (greaterOrEqual !== undefined) {
    return calcs.greaterOrEqual(amount, greaterOrEqual);
  } else if (lessOrEqual !== undefined) {
    return calcs.lessOrEqual(amount, lessOrEqual);
  }
  return 0;
};

/**
 *
 * @param {Reward} reward
 */
const multiplyRewardPoints = (reward) => reward.points * reward.multiplier;

/**
 *
 * @param {number} amount
 * @param {Reward[]} rewards
 * @returns
 */
function calcReward(amount, rewards) {
  const totalPoints = rewards
    .map((reward) => ({
      ...reward,
      points: calcPoints(amount, reward),
    }))
    .map(multiplyRewardPoints)
    .reduce((sum, points) => sum + points, 0);
  return totalPoints;
}

module.exports = {
  calcReward,
};
