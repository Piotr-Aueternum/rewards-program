import Loader from "components/Loader";
import "./RewardsProgram.css";
import RewardsTable from "./components/RewardsTable";
import useFetchRewards from "./services/useFetchRewards";

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
  const { result, loading } = useFetchRewards();
  return (
    <div className="RewardsProgram">
      <header className="RewardsProgram-header">Rewards Program</header>
      {loading ? (
        <Loader />
      ) : (
        <RewardsTable columns={rewardsColumns} rows={result} />
      )}
    </div>
  );
}

export default RewardsProgram;
