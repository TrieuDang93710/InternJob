import React from "react";
import PropTypes from "prop-types";

SearchFilter.propTypes = {};

function SearchFilter(props) {
  return (
    <section
      style={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <aside className="aside-filter">
        <p style={{ marginBlockStart: 0, marginBlockEnd: 0 }}>Hiện</p>
        <select>
          <option value="">All</option>
        </select>
        <p style={{ marginBlockStart: 0, marginBlockEnd: 0 }}>danh mục</p>
      </aside>
      <aside className="aside-filter">
        <form
          action=""
          style={{
            border: "1px solid black",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 5,
            borderRadius: 6,
          }}
        >
          <label>Tìm kiếm</label>
          <input
            type="text"
            style={{
              width: "50%",
              height: 16,
              background: "#f1f1f1",
              borderRadius: 4,
              color: "#000",
              fontSize: 13,
              paddingBlock: 0,
              paddingInline: 0,
              padding: 5,
              border: "none",
            }}
          />
        </form>
      </aside>
    </section>
  );
}

export default SearchFilter;
