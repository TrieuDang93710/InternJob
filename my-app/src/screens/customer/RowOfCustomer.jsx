import React from "react";
import PropTypes from "prop-types";

RowOfCustomer.propTypes = {};

function RowOfCustomer({ item, handleEditClick }) {
  return (
    <tr key={item.id}>
      <td className="checkbox">
        <input type="checkbox" value={item.id} />
      </td>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.image}</td>
      <td>{item.address}</td>
      <td>{item.dateOfBirth}</td>
      <td>{item.gender}</td>
      <td>{item.phoneNumber}</td>
      <td style={{ padding: "0 10px" }}>
        <p style={{ width: 80, overflow: "hidden" }}>{item.email.toString()}</p>
      </td>
      <td className="action">
        <button
          className="button-top"
          style={{ background: "#cf4eff" }}
          onClick={handleEditClick}
        >
          <i class="fa fa-plus" aria-hidden="true"></i>
          Edit
        </button>
        <button className="button-top" style={{ background: "#ff7d7d" }}>
          <i class="fa fa-plus" aria-hidden="true"></i>
          Del
        </button>
      </td>
    </tr>
  );
}

export default RowOfCustomer;
