import React from "react";
import PropTypes from "prop-types";
import SearchFilter from "./SearchFilter";
import Table from "./Table";

FilterableTable.propTypes = {};

function FilterableTable({ titleThArray, message, data, customer, product }) {
  return (
    <div className="filterable-table">
      <SearchFilter />
      <Table
        titleThArray={titleThArray}
        message={message}
        data={data}
        customer={customer}
        product={product}
      />
    </div>
  );
}

export default FilterableTable;
