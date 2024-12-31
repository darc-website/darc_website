import React from "react";
import style from "./SingleNotice.module.css";

const SingleNotice = ({ notice, showDetail, setShowDetail }) => {
  return (
    <li className={style.singleNoticeContainer}>
      <span className={style.singleCategory}>{notice.category}</span>
      <span
        className={style.singleTitle}
        onClick={() => setShowDetail(!showDetail)}
      >
        {notice.title}
      </span>
      <span className={style.singleDate}>
        {notice.date.toLocaleDateString()}
      </span>
    </li>
  );
};

export default SingleNotice;
