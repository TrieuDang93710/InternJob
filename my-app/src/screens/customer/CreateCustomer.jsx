import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./Customer.css";
import GroupLabelInput from "../../components/GroupLabelInput";
import ButtonSubmit from "../../components/ButtonSubmit";

CreateCustomer.propTypes = {};

function CreateCustomer({ handleShowCreation }) {
  useEffect(() => {
    setInterval(() => {
      setDate(new Date());
    }, 1_000);
  }, []);

  const [date, setDate] = useState(new Date());
  return (
    <>
      <div id="customer">
        <div className="title">
          <p className="title-text">
            Danh sách khách hàng / Thêm khách hàng mới
          </p>
          <p className="title-timer">
            {date.toLocaleTimeString()} - {date.toLocaleDateString()}
          </p>
        </div>
        <main className="main-staff">
          <section
            style={{
              width: "98%",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              position: "absolute",
              left: 10,
            }}
          >
            <p
              style={{
                marginBlockStart: 0,
                marginBlockEnd: 0,
                fontSize: 14,
                fontWeight: "bold",
              }}
            >
              Thêm mới khách hàng
            </p>
            <hr
              style={{
                border: "1px solid #ff7a26",
                display: "inline",
                width: "100%",
              }}
            />
          </section>
          <hr style={{ borderWidth: 2 }} />
          <section className="section-input-group">
            <GroupLabelInput>
              <label className="label">Họ và Tên</label>
              <input className="input" type="text" />
            </GroupLabelInput>
            <GroupLabelInput>
              <label className="label">Địa chỉ email</label>
              <input className="input" type="text" />
            </GroupLabelInput>
            <GroupLabelInput>
              <label className="label">Địa chỉ thường trú</label>
              <input className="input" type="text" />
            </GroupLabelInput>
            <GroupLabelInput>
              <label className="label">Số điện thoại</label>
              <input className="input" type="text" />
            </GroupLabelInput>
            <GroupLabelInput>
              <label className="label">Ngày sinh</label>
              <input className="input" type="date" />
            </GroupLabelInput>
            <GroupLabelInput>
              <label className="label">Nơi sinh</label>
              <input className="input" type="text" />
            </GroupLabelInput>
            <GroupLabelInput>
              <label className="label">Giới tính</label>
              <select className="select">
                <option value="">- Chọn giới tính -</option>
                <option value="">Nam</option>
                <option value="">Nữ</option>
                <option value="">Khác</option>
              </select>
            </GroupLabelInput>

            <GroupLabelInput>
              <label className="label">Ảnh 3x4 của nhân viên</label>
              <input
                className="input"
                id="upload"
                type="file"
                style={{ width: 200 }}
                hidden
              />
              <label className="label-choose-file" for="upload">
                Choose file
              </label>
            </GroupLabelInput>
          </section>
          <ButtonSubmit onClickChange={handleShowCreation} />
        </main>
      </div>
    </>
  );
}

export default CreateCustomer;
