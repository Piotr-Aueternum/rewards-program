const { calcReward } = require("./calcReward");
const rewards = require("../rewards.json");
const criteria = require("../criteria.json");
const transactions = require("../transactions.json");

function createCriteria(criteriaIds) {
  return criteriaIds.map((criterionId) => {
    const criterion = criteria.find(({ id }) => criterionId === id);
    return criterion;
  });
}

function createRewards(rewardsIds) {
  return rewardsIds.map((rewardId) => {
    const reward = rewards.find(({ id }) => id === rewardId);
    return {
      ...reward,
      criteria: createCriteria(reward.criteria),
    };
  });
}

function creeateTransactions(transactionsIds) {
  return transactionsIds.map((transactionId) => {
    const transaction = transactions.find(({ id }) => id === transactionId);
    const rewards = createRewards(transaction.rewards);
    return {
      ...transaction,
      rewards,
      points: calcReward(transaction.total, rewards),
    };
  });
}

function createCustomersRewardsResponse(data = []) {
  return data.map((customer) => ({
    ...customer,
    transactions: creeateTransactions(customer.transactions),
  }));
}

module.exports = {
  createCustomersRewardsResponse,
};
