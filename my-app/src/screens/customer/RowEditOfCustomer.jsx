import React, { useState } from "react";
import PropTypes from "prop-types";

RowEditOfCustomer.propTypes = {};

function RowEditOfCustomer({ item, id, onCancel }) {
  const [editingData, setEditingData] = useState(item);
  return (
    <tr key={item.id}>
      <td className="checkbox">
        <input type="checkbox" value={item.id} />
      </td>
      <td>
        <input
          type="text"
          value={editingData.id}
          onChange={(e) =>
            setEditingData((item) => ({ ...editingData, id: e.target.value }))
          }
          style={{ width: "60px", height: "20px" }}
        />
      </td>
      <td>
        <input
          type="text"
          value={editingData.name}
          onChange={(e) =>
            setEditingData((item) => ({ ...editingData, name: e.target.value }))
          }
          style={{ width: "60px", height: "20px" }}
        />
      </td>
      <td>
        <input
          type="text"
          value={editingData.image}
          onChange={(e) =>
            setEditingData((item) => ({
              ...editingData,
              image: e.target.value,
            }))
          }
          style={{ width: "60px", height: "20px" }}
        />
      </td>
      <td>
        <input
          type="text"
          value={editingData.address}
          onChange={(e) =>
            setEditingData((item) => ({
              ...editingData,
              address: e.target.value,
            }))
          }
          style={{ width: "60px", height: "20px" }}
        />
      </td>
      <td>
        <input
          type="text"
          value={editingData.dateOfBirth}
          onChange={(e) =>
            setEditingData((item) => ({
              ...editingData,
              dateOfBirth: e.target.value,
            }))
          }
          style={{ width: "60px", height: "20px" }}
        />
      </td>
      <td>
        <input
          type="text"
          value={editingData.gender}
          onChange={(e) =>
            setEditingData((item) => ({
              ...editingData,
              gender: e.target.value,
            }))
          }
          style={{ width: "60px", height: "20px" }}
        />
      </td>
      <td>
        <input
          type="text"
          value={editingData.phoneNumber}
          onChange={(e) =>
            setEditingData((item) => ({
              ...editingData,
              phoneNumber: e.target.value,
            }))
          }
          style={{ width: "60px", height: "20px" }}
        />
      </td>
      <td>
        <input
          type="text"
          value={editingData.email}
          onChange={(e) =>
            setEditingData((item) => ({
              ...editingData,
              email: e.target.value,
            }))
          }
          style={{ width: "60px", height: "20px" }}
        />
      </td>
      <td className="action">
        <button className="button-top" style={{ background: "#5ff25f" }}>
          <i class="fa fa-plus" aria-hidden="true"></i>
          Lưu
        </button>
        <button
          className="button-top"
          style={{ background: "#ff7d7d" }}
          onClick={onCancel}
        >
          <i class="fa fa-plus" aria-hidden="true"></i>
          Hủy
        </button>
      </td>
    </tr>
  );
}

export default RowEditOfCustomer;
