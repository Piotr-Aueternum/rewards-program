import "./RewardsTable.css";
import PropTypes from "prop-types";

function RewardsTable({ columns = [], rows = [] }) {
  return (
    <table className="RewardsTable">
      <thead className="RewardsTable-head">
        <tr>
          <th className="RewardsTable-headCell">No.</th>
          {columns.map((column) => (
            <th
              className="RewardsTable-headCell"
              style={{ "--columnsCount": columns.length }}
              key={column.key}
            >
              {column.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={row.key} className="RewardsTable-row">
            <td className="RewardsTable-cell">{index}</td>
            {columns.map((column) => (
              <td className="RewardsTable-cell" key={column.key}>
                {row[column.dataIndex]}
              </td>
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
