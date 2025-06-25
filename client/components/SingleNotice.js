import React from "react";
import style from "./SingleNotice.module.css";

const SingleNotice = ({ notice, showDetail, setShowDetail, selectedNotice, setSelectedNotice }) => {
    const handleClick = () => {
        setSelectedNotice(notice);
        setShowDetail(true);
    };

    return (
        <li className={style.singleNoticeContainer} onClick={handleClick}>
            <span className={style.singleCategory}>{notice.category}</span>
            <span className={style.singleTitle}>
                {notice.title}
            </span>
            <span className={style.singleDate}>
                {new Date(notice.date).toLocaleDateString()} {/* 🚀 날짜 변환 추가 */}
            </span>
        </li>
    );
};

export default SingleNotice;