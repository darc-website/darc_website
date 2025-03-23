"use client";

import React, { useState } from "react";
import styles from "./NoticeDetail.module.css";
import { FaEdit, FaUndo, FaSave } from "react-icons/fa";
import { Editor } from "primereact/editor";

export default function NoticeDetail({
  selectedNotice,
  setShowDetail,
  setNotices,
}) {
  const [editing, setEditing] = useState(false);
  const [selectedCurrentNotice, setSelectedCurrentNotice] =
    useState(selectedNotice);

  const handleSave = async () => {
    console.log("Saving notice...");
    try {
      const response = await fetch("/api/announcement", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: selectedNotice._id,
          title: selectedCurrentNotice.title,
          date: selectedCurrentNotice.date,
          category: selectedCurrentNotice.category,
          content: selectedCurrentNotice.content,
          temp: false,
        }),
      });
      const data = await response.json();
      const { announcement } = data;
      if (response.ok) {
        setSelectedCurrentNotice(announcement);
        setNotices((prev) =>
          prev.map((n) => (n._id === announcement._id ? announcement : n))
        );
        setShowDetail(false);
      } else {
        console.error("Error saving notice:", data.error);
      }
      setEditing(false);
    } catch (error) {
      console.error("Error saving notice:", error);
    }
  };

  return (
    <div className={styles.detailContainer}>
      <hr />
      <div className={styles.detailHeader}>
        <span className={styles.detailCategory}>
          {selectedCurrentNotice.category}
        </span>
        <span className={styles.detailTitle}>
          {selectedCurrentNotice.title}
        </span>
        <div className={styles.topBar}>
          <span className={styles.detailDate}>
            {selectedCurrentNotice.date}
          </span>
          {editing ? (
            <div className={styles.editingButtons}>
              <button
                className={styles.editingButton}
                onClick={() => {
                  setEditing(false);
                  setSelectedCurrentNotice(selectedNotice);
                }}
              >
                <FaUndo />
                &nbsp; 취소
              </button>
              <button
                className={styles.editingButton}
                onClick={() => {
                  handleSave();
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
          value={selectedCurrentNotice.content}
          onTextChange={(e) =>
            setSelectedCurrentNotice({
              ...selectedCurrentNotice,
              content: e.htmlValue,
            })
          }
        />
      ) : (
        <div>
          <div
            className={`${styles.noticeContent} ${styles.editorStyledContent}`}
            dangerouslySetInnerHTML={{
              __html: selectedCurrentNotice.content,
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
