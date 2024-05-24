import React from "react";
import { Outlet } from "react-router-dom";
import "./Root.css";

function Root(props) {
  return (
    <>
      <div id="sidebar">
        <div className="user">
          <div className="image"></div>
          <div className="text">
            <h3 className="h3-user">Admin.com</h3>
            <p className="p-user">
              <a className="a-user" href="#">
                Login
              </a>
              <a className="a-user" href="#">
                Logout
              </a>
            </p>
          </div>
        </div>
        <hr />
        <div
          style={{
            position: "relative",
            width: "95%",
            height: 40,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            paddingLeft: 5,
            paddingRight: 5,
          }}
        >
          <form id="search-form" className="search-form" role="search">
            <input
              className="search-input"
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
          </form>
        </div>
        <nav>
          <ul className="ul-menu">
            <li className="li-item">
              <a href={`/console`}>Bảng điều khiển</a>
            </li>
            <li className="li-item">
              <a href={`/customer`}>Quản lý khách hàng</a>
            </li>
            <li className="li-item">
              <a href={`/staff`}>Quản lý nhân viên</a>
            </li>
            <li className="li-item">
              <a href={`/product`}>Quản lý sản phẩm</a>
            </li>
            <li className="li-item">
              <a href={`/order`}>Quản lý đơn hàng</a>
            </li>
            <li className="li-item">
              <a href={`/report`}>Báo cáo</a>
            </li>
            <li className="li-item">
              <a href={`/setting`}>Hệ thống</a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail" style={{}}>
        <Outlet />
      </div>
    </>
  );
}

export default Root;
