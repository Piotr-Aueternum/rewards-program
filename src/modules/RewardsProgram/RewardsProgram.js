import Loader from "components/Loader";
import "./RewardsProgram.css";
import RewardsTable from "./components/RewardsTable";
import useFetchRewards from "./services/useFetchRewards";
import ErrorMessage from "components/ErrorMessage";

const rewardsColumns = [
  {
    title: "Customer",
    dataIndex: "customer",
    key: "customer",
  },
  {
    title: "Per Month",
    dataIndex: "perMonth",
    key: "perMonth",
  },
  {
    title: "Total",
    dataIndex: "total",
    key: "total",
  },
];

function RewardsProgram() {
  const { result, loading, error, fetch } = useFetchRewards();
  return (
    <div className="RewardsProgram">
      <header className="RewardsProgram-header">
        Rewards Program
        {error && (
          <button
            className="RewardsProgram-reload"
            title="Reload"
            onClick={fetch}
          >
            ↻
          </button>
        )}
      </header>
      {loading ? (
        <Loader />
      ) : error ? (
        <ErrorMessage message={error} />
      ) : (
        <RewardsTable columns={rewardsColumns} rows={result} />
      )}
    </div>
  );
}

export default RewardsProgram;
