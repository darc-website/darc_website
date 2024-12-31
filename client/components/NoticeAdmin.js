"use client";

import React, { useState } from "react";
import styles from "./NoticeAdmin.module.css";

const NoticeAdmin = () => {
  const [currTab, setCurrTab] = useState("전체");

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
          <button className={styles.searchButton}>🔍</button>
        </div>
      </div>
    </div>
  );
};

export default NoticeAdmin;
