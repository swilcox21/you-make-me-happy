import "../App.css";
import PropTypes from "prop-types";
import { useState } from "react";

function Component(props) {
  const [component, setComponent] = useState("");
  return (
    <>
      <div className="component"></div>
    </>
  );
}

export default Component;

// Caption.propTypes = {
//   prop: PropTypes.bool,
// };
