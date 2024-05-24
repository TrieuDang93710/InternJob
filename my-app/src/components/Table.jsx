import React, { useState } from "react";
import PropTypes from "prop-types";
import RowOfCustomer from "../screens/customer/RowOfCustomer";
import RowEditOfCustomer from "../screens/customer/RowEditOfCustomer";

Table.propTypes = {};

function Table({ titleThArray, message, data, customer, product }) {
  /**============================= */
  const [editing, setEditing] = useState(false);

  const [editingRowId, setEditingRowId] = useState(null);
  function startEditing(rowId) {
    setEditingRowId(rowId);
  }
  /**------------------------------ */
  let rows = [];
  if (data != null) {
    data.map((item) => {
      !editingRowId || editingRowId !== item.id
        ? rows.push(
          <RowOfTable
            item={item}
            handleEditClick={() => {
              startEditing(item.id);
            }}
          />
        )
        : rows.push(
          <RowEditOfTable
            item={item}
            onCancel={() => setEditingRowId(null)}
          />
        );
    });
  } else {
    if (customer != null) {
      customer.map((item) => {
        !editingRowId || editingRowId !== item.id
          ? rows.push(
            <RowOfCustomer
              item={item}
              handleEditClick={() => {
                startEditing(item.id);
              }}
            />
          )
          : rows.push(
            <RowEditOfCustomer
              item={item}
              onCancel={() => setEditingRowId(null)}
            />
          );
      });
    } else {
      if (product != null) {
        product.map((item) => {
          !editingRowId || editingRowId !== item.id
            ? rows.push(
              <RowOfProduct
                item={item}
                handleEditClick={() => {
                  startEditing(item.id);
                }}
              />
            )
            : rows.push(
              <RowEditOfProduct
                item={item}
                onCancel={() => setEditingRowId(null)}
              />
            );
        });
      } else {
        return;
      }
    }
  }

  // rows.push(rowData);
  let thRows = [];
  let titleThItem = titleThArray.map((item) => {
    return <th>{item.name}</th>;
  });
  thRows.push(titleThItem);

  return (
    <table
      border={1}
      style={{
        width: "100%",
        height: rows.length > 0 ? "auto" : "65vh",
        margin: 10,
      }}
    >
      <thead>
        <th className="checkbox">
          <input type="checkbox" value={"all"} />
        </th>
        {thRows}
        <th className="action">Tính năng</th>
      </thead>
      <tbody>{rows.length !== 0 ? rows : message}</tbody>
    </table>
  );
}

export default Table;
