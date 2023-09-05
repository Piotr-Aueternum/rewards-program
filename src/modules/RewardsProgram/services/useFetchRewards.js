import { useState } from "react";
import api from "services/api";

function useFetchRewards() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  async function fetchRewards() {
    try {
      setLoading(true);
      const response = await api.get("/customers/rewards");
      setResult(response);
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
