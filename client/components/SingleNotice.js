import React from "react";
import style from "./SingleNotice.module.css";
import { set } from "mongoose";

const SingleNotice = ({
  notice,
  showDetail,
  setShowDetail,
  selectedNotice,
  setSelectedNotice,
}) => {
  const handleClick = () => {
    setSelectedNotice(notice);
    setShowDetail(true);
  };

  return (
    <li className={style.singleNoticeContainer}>
      <span className={style.singleCategory}>{notice.category}</span>
      <span className={style.singleTitle} onClick={handleClick}>
        {notice.title}
      </span>
      <span className={style.singleDate}>
        {notice.date.toLocaleDateString()}
      </span>
    </li>
  );
};

export default SingleNotice;
