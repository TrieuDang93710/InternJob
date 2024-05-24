import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./Console.css";

Console.propTypes = {};

function Console(props) {
  useEffect(() => {
    setInterval(() => {
      setDate(new Date());
    }, 1_000);
  }, []);

  const [date, setDate] = useState(new Date());
  return (
    <div id="console">
      <div className="title">
        <p className="title-text">Bảng điều khiển</p>
        <p className="title-timer">
          {date.toLocaleTimeString()} - {date.toLocaleDateString()}
        </p>
      </div>
      <main className="main">
        <section className="section-console">
          <article className="article-order">
            <h4 className="section-h4">Tình trạng hóa đơn</h4>
            <hr />
          </article>
          <article className="article-order">
            <h4 className="section-h4">Khách hàng mới</h4>
            <hr />
          </article>
        </section>
        <aside className="aside-console">
          <article className="article-order">
            <h4 className="section-h4">Thống kê 6 thánh doanh thu</h4>
            <hr />
          </article>
        </aside>
      </main>
    </div>
  );
}

export default Console;
