"use client";
import React from "react";
import { useRouter } from "next/navigation";
import styles from "./NoticeDetailClient.module.css";
import "quill/dist/quill.core.css";
import { FiCopy } from "react-icons/fi";
import "quill/dist/quill.snow.css";

export default function NoticeDetailClient({ selectedNotice }) {
  const router = useRouter();

  const handleCopyLink = () => {
    const currentUrl = window.location.href;
    navigator.clipboard.writeText(currentUrl);
    alert("링크가 복사되었습니다.");
  };

  return (
    <div className={styles.detailContainer}>
      <hr />
      <div className={styles.detailHeader}>
        <div className={styles.detailHeader}>
          <span className={styles.detailCategory}>
            {selectedNotice.category}
          </span>
          <span className={styles.detailTitle}>{selectedNotice.title}</span>
          <div className={styles.topBar}>
            <span className={styles.detailDate}>{selectedNotice.date}</span>
            <div className={styles.copyButtonWrapper}>
              <button className={styles.copyButton} onClick={handleCopyLink}>
                <FiCopy style={{ marginRight: "6px" }} />
                링크 복사
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div
        className={`${styles.noticeContent} ${styles.editorStyledContent} ql-editor`}
        dangerouslySetInnerHTML={{ __html: selectedNotice.content }}
      />

      <div className={styles.detailFooter} style={{ marginTop: "10px" }}>
        <button
          className={styles.listButton}
          onClick={() => {
            router.push("/contact/announcement");
          }}
        >
          목록으로
        </button>
      </div>
    </div>
  );
}
