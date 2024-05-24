import React from "react";
import PropTypes from "prop-types";

ListButton.propTypes = {};

function ListButton({ handleShowCreation, addNewButtonName }) {
  return (
    <section
      style={{
        display: "flex",
        border: "1px solid black",
        position: "absolute",
        left: 10,
        top: 30,
      }}
    >
      <button
        className="button-top"
        style={{ background: "#5ff25f" }}
        onClick={handleShowCreation}
      >
        <i class="fa fa-plus" aria-hidden="true"></i>
        {addNewButtonName}
      </button>
      <button
        className="button-top margin-left"
        style={{ background: "#fffea9" }}
      >
        <i class="fa fa-plus" aria-hidden="true"></i>
        Tải từ file
      </button>
      <button
        className="button-top margin-left"
        style={{ background: "#b271ff" }}
      >
        <i class="fa fa-plus" aria-hidden="true"></i>
        In dữ liệu
      </button>
      <button
        className="button-top margin-left"
        style={{ background: "#b271ff" }}
      >
        <i class="fa fa-plus" aria-hidden="true"></i>
        Sao chép
      </button>
      <button
        className="button-top margin-left"
        style={{ background: "#5ff25f" }}
      >
        <i class="fa fa-plus" aria-hidden="true"></i>
        Xuất Excell
      </button>
      <button
        className="button-top margin-left"
        style={{ background: "#ffb9bb" }}
      >
        <i class="fa fa-plus" aria-hidden="true"></i>
        Xuất PDF
      </button>
      <button
        className="button-top margin-left"
        style={{ background: "#dcdcdc" }}
      >
        <i class="fa fa-plus" aria-hidden="true"></i>
        Xóa tất cả
      </button>
    </section>
  );
}

export default ListButton;
