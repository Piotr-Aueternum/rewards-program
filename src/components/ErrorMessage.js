import PropTypes from "prop-types";
import "./ErrorMessage.css";

function ErrorMessage({ message }) {
  return (
    <div className="ErrorMessage">
      <div>Error occured</div>
      <div className="ErrorMessage-content">{message}</div>
    </div>
  );
}

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorMessage;
