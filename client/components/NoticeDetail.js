'use client';
import React, { useState, useRef } from "react";
import styles from "./NoticeDetail.module.css";
import { FaEdit, FaUndo, FaSave, FaTrash } from "react-icons/fa"; // Import trash icon
import Editor from "./Editor"; // your custom Quill wrapper
import 'quill/dist/quill.snow.css';

export default function NoticeDetail({
  selectedNotice,
  setShowDetail,
  setNotices,
}) {
  const [editing, setEditing] = useState(false);
  const [selectedCurrentNotice, setSelectedCurrentNotice] = useState(selectedNotice);
  const quillRef = useRef();

  const handleSave = async () => {
    try {
      const updatedContent =
        quillRef.current?.root?.innerHTML || selectedCurrentNotice.content;

      const response = await fetch("/api/announcement", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: selectedNotice._id,
          title: selectedCurrentNotice.title,
          date: selectedCurrentNotice.date,
          category: selectedCurrentNotice.category,
          content: updatedContent,
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
      } else {
        console.error("Error saving notice:", data.error);
      }

      setEditing(false);
    } catch (error) {
      console.error("Error saving notice:", error);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await fetch("/api/announcement", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: selectedNotice._id,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        setNotices((prev) => prev.filter((n) => n._id !== selectedNotice._id));
        setShowDetail(false);
      } else {
        console.error("Error deleting notice:", data.error);
      }
    } catch (error) {
      console.error("Error deleting notice:", error);
    }
  };

  return (
    <div className={styles.detailContainer}>
      <hr />
      <div className={styles.detailHeader}>
        {editing ? (
          <div className={styles.editableHeader}>
            {/* Editable category */}
            <select
              value={selectedCurrentNotice.category}
              onChange={(e) =>
                setSelectedCurrentNotice({
                  ...selectedCurrentNotice,
                  category: e.target.value,
                })
              }
            >
              <option value="이벤트">이벤트</option>
              <option value="업데이트">업데이트</option>
              <option value="서비스">서비스</option>
              <option value="공고">공고</option>
              <option value="기타">기타</option>
            </select>
            {/* Editable title */}
            <input
              type="text"
              value={selectedCurrentNotice.title}
              onChange={(e) =>
                setSelectedCurrentNotice({
                  ...selectedCurrentNotice,
                  title: e.target.value,
                })
              }
              placeholder="제목을 입력하세요"
            />
            {/* Editable date */}
            <input
              type="date"
              value={selectedCurrentNotice.date}
              onChange={(e) =>
                setSelectedCurrentNotice({
                  ...selectedCurrentNotice,
                  date: e.target.value,
                })
              }
            />
          </div>
        ) : (
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
            </div>
          </div>
        )}
      </div>
      <hr />

      {editing ? (
        // Editor for editing content (with remounting via key)
        <Editor
          key={selectedCurrentNotice._id}
          ref={quillRef}
          readOnly={false}
          height="400px"
          className={styles.quillEditor}
          defaultValue={selectedCurrentNotice.content} // initialize with saved content
        />
      ) : (
        <div
          className={`${styles.noticeContent} ${styles.editorStyledContent} ql-editor`}
          dangerouslySetInnerHTML={{ __html: selectedCurrentNotice.content }}
        />
      )}

      <div
        className={styles.detailFooter}
        style={{ marginTop: editing ? "60px" : "10px" }}
      >
        <button
          className={styles.listButton}
          onClick={() => setShowDetail(false)}
        >
          목록으로
        </button>
        {editing ? (
          <div className={styles.editingButtons}>
            <button
              className={styles.editingButton}
              onClick={() => {
                setEditing(false);
                setSelectedCurrentNotice(selectedNotice); // reset on cancel
              }}
            >
              <FaUndo />
              &nbsp; 취소
            </button>
            <button className={styles.editingButton} onClick={handleSave}>
              <FaSave />
              &nbsp; 저장
            </button>
          </div>
        ) : (
          <div className={styles.editingButtons}>
            <button
              className={styles.editingButton}
              onClick={() => setEditing(true)}
            >
              <FaEdit />
              &nbsp; 편집
            </button>
            <button
              className={styles.editingButton}
              onClick={handleDelete}
            >
              <FaTrash />
              &nbsp; 삭제
            </button>
          </div>
        )}
      </div>
    </div>
  );
}