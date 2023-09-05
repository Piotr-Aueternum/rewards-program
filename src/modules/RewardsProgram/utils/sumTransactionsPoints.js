/**
 * Sums points of transactions
 * @param {{points: number}[]} transactions
 * @returns
 */
const sumTransactionsPoints = (transactions = []) =>
  transactions.reduce((sum, curr) => sum + curr.points, 0);

export default sumTransactionsPoints;
