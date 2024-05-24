import React from "react";
import PropTypes from "prop-types";

Pagination.propTypes = {};

function Pagination(props) {
  return (
    <section
      style={{
        display: "flex",
        width: "98%",
        alignItems: "center",
        justifyContent: "space-between",
        position: "absolute",
        bottom: 5,
      }}
    >
      <aside className="aside-filter">
        <p style={{ marginBlockStart: 0, marginBlockEnd: 0 }}>
          Hiện 1 đến 7 của 7 danh mục
        </p>
      </aside>
      <aside className="aside-filter">
        <button className="button-top" style={{ background: "#efefef" }}>
          <i class="fa fa-plus" aria-hidden="true"></i>
          Lùi
        </button>
        <button
          className="button-top"
          style={{ background: "none", color: "#000" }}
        >
          <i class="fa fa-plus" aria-hidden="true"></i>1
        </button>
        <button className="button-top" style={{ background: "#efefef" }}>
          <i class="fa fa-plus" aria-hidden="true"></i>
          Tiếp
        </button>
      </aside>
    </section>
  );
}

export default Pagination;
