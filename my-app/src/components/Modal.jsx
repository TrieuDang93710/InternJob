import React from "react";
import PropTypes from "prop-types";
import ButtonSubmit from "./ButtonSubmit";

Modal.propTypes = {};

function Modal({
  onClickChange,
  titleOfModal,
  nameInputOfModal,
  nameListOfModal,
  messageNotFoundData,
  datas,
}) {
  let listItems = [];
  let itemData = datas.forEach(() => {});
  return (
    <div id="modal">
      <main className="main-staff main-modal">
        <section className="title-modal">
          <p className="p-modal">{titleOfModal}</p>
          <hr
            style={{
              border: "1px solid #ececec",
              display: "inline",
              width: "100%",
            }}
          />
        </section>
        <section className="section-input-group section-input-group-modal">
          <aside className="aside-input-group aside-input-group-modal">
            <form
              className="form-input-group form-input-group-modal"
              action=""
              method="get"
            >
              <label className="label">{nameInputOfModal}</label>
              <input className="input input-modal" type="text" />
            </form>
          </aside>
        </section>
        <section className="section-input-group section-input-group-modal list-content">
          <aside className="aside-input-group aside-input-group-modal">
            <label className="label" style={{ textAlign: "left" }}>
              {nameListOfModal}
            </label>
            <ul
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
              }}
            >
              {datas.length !== 0 ? <li>Item 1</li> : messageNotFoundData}
            </ul>
          </aside>
        </section>
        <ButtonSubmit onClickChange={onClickChange} />
      </main>
    </div>
  );
}

export default Modal;
