"use client";

import React, { useState } from "react";
import styles from "./NoticeDetail.module.css";
import { FaEdit, FaUndo, FaSave } from "react-icons/fa";
import { Editor } from "primereact/editor";

export default function NoticeDetail({ selectedNotice, setShowDetail }) {
  const [editing, setEditing] = useState(false);
  const [selectedCurrentNotice, setSelectedCurrentNotice] =
    useState(selectedNotice);

  return (
    <div className={styles.detailContainer}>
      <hr />
      <div className={styles.detailHeader}>
        <span className={styles.detailCategory}>{selectedNotice.category}</span>
        <span className={styles.detailTitle}>{selectedNotice.title}</span>
        <div className={styles.topBar}>
          <span className={styles.detailDate}>{selectedNotice.date}</span>
          {editing ? (
            <div className={styles.editingButtons}>
              <button
                className={styles.editingButton}
                onClick={() => setEditing(false)}
              >
                <FaUndo />
                &nbsp; 취소
              </button>
              <button
                className={styles.editingButton}
                onClick={() => {
                  setEditing(false);
                  setShowDetail(false);
                }}
              >
                <FaSave />
                &nbsp; 저장
              </button>
            </div>
          ) : (
            <button
              className={styles.editingButton}
              onClick={() => setEditing(true)}
            >
              <FaEdit />
              &nbsp; 편집
            </button>
          )}
        </div>
      </div>
      <hr />
      {editing ? (
        <Editor
          style={{ height: "320px" }}
          value={selectedNotice.content.ops[0].insert}
          onTextChange={(e) =>
            setSelectedCurrentNotice({
              ...selectedNotice,
              content: e.htmlValue,
            })
          }
        />
      ) : (
        <div>
          <div
            className={`${styles.noticeContent} ${styles.editorStyledContent}`}
            dangerouslySetInnerHTML={{
              __html: selectedNotice.content.ops[0].insert,
            }}
          />
        </div>
      )}
      <button
        className={styles.listButton}
        onClick={() => setShowDetail(false)}
      >
        목록으로
      </button>
    </div>
  );
}
