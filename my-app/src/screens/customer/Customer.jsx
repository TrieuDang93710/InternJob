import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./Customer.css";
import "../css/style.css";
import ListButton from "../../components/ListButton";
import CreateCustomer from "./CreateCustomer";
import FilterableTable from "../../components/FilterableTable";
import Pagination from "../../components/Pagination";
import { titleThOfCustomer } from "../../components/model-data/titleTh";
import { customers, staffs } from "../../components/model-data/data";

Customer.propTypes = {};

function Customer(props) {
  useEffect(() => {
    setInterval(() => {
      setDate(new Date());
    }, 1_000);
  }, []);

  const [date, setDate] = useState(new Date());
  const [showCreation, setShowCreation] = useState(false);
  function handleShowCreation() {
    setShowCreation(!showCreation);
  }
  return (
    <>
      {showCreation ? (
        <CreateCustomer handleShowCreation={handleShowCreation} />
      ) : (
        <div id="customer">
          <div className="title">
            <p className="title-text">Danh sách khách hàng</p>
            <p className="title-timer">
              {date.toLocaleTimeString()} - {date.toLocaleDateString()}
            </p>
          </div>
          <main className="main-customer">
            <ListButton
              addNewButtonName={"Thêm mới khách hàng"}
              handleShowCreation={handleShowCreation}
            />
            <hr
              style={{
                border: "1px solid #ff7a26",
                display: "inline",
                width: "100%",
              }}
            />
            <FilterableTable
              titleThArray={titleThOfCustomer}
              message={"Không tìm thấy khách hàng nào"}
              customer={customers}
            />
            <Pagination />
          </main>
        </div>
      )}
    </>
  );
}

export default Customer;
