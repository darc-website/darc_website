"use client";

import React, { useState, useEffect } from "react";
import styles from "./NoticeAdmin.module.css";
import "primeicons/primeicons.css";
import SingleNotice from "./SingleNotice";
import NoticeDetail from "./NoticeDetail";

const NoticeAdmin = () => {
    const [currTab, setCurrTab] = useState("전체");
    const [currentPage, setCurrentPage] = useState(1);
    const [showDetail, setShowDetail] = useState(false);
    const [selectedNotice, setSelectedNotice] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [notices, setNotices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const noticesPerPage = 5;

    // 공지사항을 API에서 가져오기
    useEffect(() => {
        const fetchNotices = async () => {
            try {
                console.log("🚀 Fetching notices from API...");
                const response = await fetch('/api/announcement');
                const data = await response.json();

                console.log("📢 API 응답 데이터 (원본):", data);
                console.log("📢 API 응답 데이터 타입:", typeof data);

                if (response.ok) {
                    if (Array.isArray(data)) {
                        setNotices(data);
                        console.log("✅ notices 상태 업데이트 완료:", data);
                    } else {
                        console.error("🚨 API 응답이 배열이 아닙니다:", data);
                        setError('API 응답이 잘못되었습니다.');
                    }
                } else {
                    setError(data.error || '공지사항을 불러오는 중 오류가 발생했습니다.');
                }
            } catch (error) {
                console.error("🚨 Fetch Error:", error);
                setError('서버와의 통신 중 오류가 발생했습니다.');
            } finally {
                setLoading(false);
            }
        };

        fetchNotices();
    }, []);

    const filteredData = notices.filter(notice => {
        console.log("🚀 필터링 중 - category:", notice.category, "currTab:", currTab);
        return currTab === "전체" || notice.category.trim() === currTab.trim();
    });

    console.log("📌 필터링된 데이터:", filteredData);

    const totalPages = Math.max(Math.ceil(filteredData.length / noticesPerPage), 1);
    const startIndex = (currentPage - 1) * noticesPerPage;
    const paginatedNotices = Array.isArray(filteredData) && filteredData.length > 0
        ? filteredData.slice(startIndex, startIndex + noticesPerPage)
        : [];

    console.log("📌 notices:", notices);
    console.log("📌 filteredData:", filteredData);
    console.log("📌 paginatedNotices:", paginatedNotices);
    console.log("📌 noticesPerPage:", noticesPerPage);
    console.log("📌 currentPage:", currentPage);
    console.log("📌 startIndex:", startIndex);
    console.log("📌 totalPages:", totalPages);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className={styles.noticeContainer}>
            {!showDetail ? (
                <>
                    <div className={styles.topContainer}>
                        <div className={styles.tabContainer}>
                            {["전체", "이벤트", "업데이트", "서비스", "공고", "기타"].map(tab => (
                                <button
                                    key={tab}
                                    className={`${styles.tab} ${currTab === tab ? styles.active : ""}`}
                                    onClick={() => setCurrTab(tab)}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                        <div className={styles.searchContainer}>
                            <input
                                className={styles.searchInput}
                                type="text"
                                placeholder="검색어를 입력하세요."
                                value={searchTerm}
                                onChange={handleSearch}
                            />
                            <button className={styles.searchButton}>
                                <i className="pi pi-search" style={{ color: "black" }} />
                            </button>
                        </div>
                    </div>

                    {loading ? (
                        <p>공지사항을 불러오는 중...</p>
                    ) : error ? (
                        <p className={styles.errorMessage}>{error}</p>
                    ) : paginatedNotices.length === 0 ? (
                        <p>등록된 공지사항이 없습니다.</p>
                    ) : (
                        <ul className={styles.noticeList}>
                            {paginatedNotices.map((notice) => (
                                <SingleNotice
                                    key={notice.id}
                                    notice={notice}
                                    showDetail={showDetail}
                                    setShowDetail={setShowDetail}
                                    selectedNotice={selectedNotice}
                                    setSelectedNotice={setSelectedNotice}
                                />
                            ))}
                        </ul>
                    )}

                    <div className={styles.paginationContainer}>
                        <button
                            className={styles.paginationButton}
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            <i className="pi pi-chevron-left" style={{ color: "black" }} />
                        </button>
                        {Array.from({ length: totalPages }, (_, i) => (
                            <button
                                key={i}
                                onClick={() => handlePageChange(i + 1)}
                                className={`${styles.paginationButton} ${currentPage === i + 1 ? styles.active : ""}`}
                            >
                                {i + 1}
                            </button>
                        ))}
                        <button
                            className={styles.paginationButton}
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                        >
                            <i className="pi pi-chevron-right" style={{ color: "black" }} />
                        </button>
                    </div>
                </>
            ) : (
                <NoticeDetail
                    selectedNotice={selectedNotice}
                    setShowDetail={setShowDetail}
                />
            )}
        </div>
    );
};

export default NoticeAdmin;