/**
 * Flips date dd/mm/yyy format to mm/dd/yyyy default js format
 * @param {string} date String date in format dd/mm/yyyy
 * @returns
 */
const defaultDateFormat = (date) => {
  const [dd, mm, yyyy] = date.split("/");
  return `${mm}/${dd}/${yyyy}`;
};

export default defaultDateFormat;
