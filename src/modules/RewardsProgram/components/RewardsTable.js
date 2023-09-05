import "./RewardsTable.css";
import PropTypes from "prop-types";

function RewardsTable({ columns = [], rows = [] }) {
  return (
    <table className="RewardsTable">
      <thead className="RewardsTable-head">
        <tr>
          {columns.map((column) => (
            <th key={column.key}>{column.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.key} className="RewardsTable-row">
            {columns.map((column) => (
              <td key={column.key}>{row[column.dataIndex]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

RewardsTable.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      dataIndex: PropTypes.string.isRequired,
    }),
  ).isRequired,
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default RewardsTable;
