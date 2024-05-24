import React from "react";
import PropTypes from "prop-types";

ButtonSubmit.propTypes = {};

function ButtonSubmit({ onClickChange }) {
  return (
    <section
      style={{
        display: "flex",
        position: "absolute",
        left: 10,
        bottom: 5,
      }}
    >
      <button className="button-top" style={{ background: "#5ff25f" }}>
        <i class="fa fa-plus" aria-hidden="true"></i>
        Lưu
      </button>
      <button
        className="button-top margin-left"
        style={{ background: "#fffea9" }}
        onClick={onClickChange}
      >
        <i class="fa fa-plus" aria-hidden="true"></i>
        Hủy bỏ
      </button>
    </section>
  );
}

export default ButtonSubmit;
