import React from "react";
import PropTypes from "prop-types";

MessageStatus.propTypes = {};

function MessageStatus({ children, bgColor }) {
  return (
    <span
      style={{
        background: bgColor,
        color: "white",
        padding: "3px 5px",
        borderRadius: 6,
        fontSize: 12,
      }}
    >
      {children}
    </span>
  );
}

export default MessageStatus;
