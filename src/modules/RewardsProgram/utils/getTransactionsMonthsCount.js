import defaultDateFormat from "./defaultDateFormat";

/**
 * Get transactions unique months count
 * @param {{date: string}[]} transactions
 * @returns
 */
const getTransactionsMonthsCount = (transactions = []) => {
  const dates = transactions
    .map(({ date }) => defaultDateFormat(date))
    .map((date) => new Date(date))
    .map((date) => date.getMonth().toString());

  const uniqueMonths = [...new Set(dates)];
  return uniqueMonths.length;
};

export default getTransactionsMonthsCount;
