import React from "react";
import PropTypes from "prop-types";

GroupLabelInput.propTypes = {};

function GroupLabelInput({ children }) {
  return (
    <aside className="aside-input-group">
      <form className="form-input-group" action="" method="get">
        {children}
      </form>
    </aside>
  );
}

export default GroupLabelInput;
