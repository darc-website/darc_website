"use client";

import React, { useState } from "react";
import styles from "./NoticeAdmin.module.css";
import "primeicons/primeicons.css";
import SingleNotice from "./SingleNotice";

const data = [
  {
    title: "공지사항 1",
    category: "이벤트",
    date: new Date("2021-09-01"),
    content: "이벤트 내용 1",
  },
  {
    title: "공지사항 2",
    category: "업데이트",
    date: new Date("2021-09-12"),
    content: "업데티트 내용 1",
  },
  {
    title: "공지사항 3",
    category: "기타",
    date: new Date("2021-09-30"),
    content: "기타 내용 1",
  },
  {
    title: "공지사항 4",
    category: "공고",
    date: new Date("2021-10-01"),
    content: "공고 내용 1",
  },
];

const NoticeAdmin = () => {
  const [currTab, setCurrTab] = useState("전체");

  const filteredData =
    currTab === "전체"
      ? data
      : data.filter((notice) => notice.category === currTab);

  return (
    <div className={styles.noticeContainer}>
      <h1 className={styles.heading}>공지사항</h1>
      <div className={styles.topContainer}>
        <div className={styles.tabContainer}>
          <button
            className={`${styles.tab} ${
              currTab === "전체" ? styles.active : ""
            }`}
            onClick={() => setCurrTab("전체")}
          >
            전체
          </button>
          <button
            className={`${styles.tab} ${
              currTab === "이벤트" ? styles.active : ""
            }`}
            onClick={() => setCurrTab("이벤트")}
          >
            이벤트
          </button>
          <button
            className={`${styles.tab} ${
              currTab === "업데이트" ? styles.active : ""
            }`}
            onClick={() => setCurrTab("업데이트")}
          >
            업데이트
          </button>
          <button
            className={`${styles.tab} ${
              currTab === "서비스" ? styles.active : ""
            }`}
            onClick={() => setCurrTab("서비스")}
          >
            서비스
          </button>
          <button
            className={`${styles.tab} ${
              currTab === "공고" ? styles.active : ""
            }`}
            onClick={() => setCurrTab("공고")}
          >
            공고
          </button>
          <button
            className={`${styles.tab} ${
              currTab === "기타" ? styles.active : ""
            }`}
            onClick={() => setCurrTab("기타")}
          >
            기타
          </button>
        </div>
        <div className={styles.searchContainer}>
          <input
            className={styles.searchInput}
            type="text"
            placeholder="검색어를 입력하세요."
          />
          <button className={styles.searchButton}>
            <i className="pi pi-search" style={{ color: "black" }} />
          </button>
        </div>
      </div>
      <ul className={styles.noticeList}>
        {filteredData.map((notice, index) => (
          <SingleNotice key={index} notice={notice} />
        ))}
      </ul>
    </div>
  );
};

export default NoticeAdmin;
