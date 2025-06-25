import React from "react";
import style from "./SingleNotice.module.css";

const SingleResource = ({ resource, showDetail, setShowDetail, selectedResource, setSelectedResource }) => {
    const handleClick = () => {
        setSelectedResource(resource);
        setShowDetail(true);
    };

    return (
        <li className={style.singleNoticeContainer} onClick={handleClick}>
            <span className={style.singleCategory}>{resource.category}</span>
            <span className={style.singleTitle} >
                {resource.title}
            </span>
            <span className={style.singleDate}>
                {new Date(resource.date).toLocaleDateString()} {/* 🚀 날짜 변환 추가 */}
            </span>
        </li>
    );
};

export default SingleResource;