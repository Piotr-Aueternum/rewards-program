import { useState } from "react";
import api from "services/api";
import sumTransactionsPoints from "../utils/sumTransactionsPoints";
import getTransactionsMonthsCount from "../utils/getTransactionsMonthsCount";

function useFetchRewards() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  function formatTransactions(transactions) {
    return transactions.map((row) => {
      const pointsSum = sumTransactionsPoints(row.transactions);
      const pointsPerMonth = Math.floor(
        pointsSum / getTransactionsMonthsCount(row.transactions),
      );
      return {
        key: row.id,
        customer: row.fullName,
        perMonth: pointsPerMonth,
        total: pointsSum,
      };
    });
  }
  async function fetchRewards() {
    try {
      setLoading(true);
      const response = await api.get("/customers/rewards");
      const results = formatTransactions(response);
      setResult(results);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }
  if (result === null && !loading) {
    fetchRewards();
  }
  return { result: result ?? [], loading };
}

export default useFetchRewards;
