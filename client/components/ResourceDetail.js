"use client";
import React, { useState, useRef } from "react";
import styles from "./NoticeDetail.module.css";
import Editor from "./Editor";
import { FaEdit, FaUndo, FaSave, FaTrash } from "react-icons/fa"; // Import trash icon

export default function ResourceDetail({
  selectedResource,
  setShowDetail,
  setResources,
  isAdmin,
}) {
  const [editing, setEditing] = useState(false);
  const [selectedCurrentResource, setSelectedCurrentResource] =
    useState(selectedResource || {});
  const quillRef = useRef();

  console.log("isAdmin:", isAdmin);
  console.log("selectedResource:", selectedResource);

  const handleSave = async () => {
    try {
      const updatedContent =
        quillRef.current?.root?.innerHTML || selectedCurrentResource.content;

      const response = await fetch("/api/resources", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: selectedResource._id,
          title: selectedCurrentResource.title,
          date: selectedCurrentResource.date,
          category: selectedCurrentResource.category,
          content: updatedContent,
          temp: false,
        }),
      });

      const data = await response.json();
      const { resources } = data;

      if (response.ok) {
        setSelectedCurrentResource(resources);
        setResources((prev) =>
          prev.map((n) => (n._id === resources._id ? resources : n))
        );
      } else {
        console.error("Error saving resources:", data.error);
      }

      setEditing(false);
    } catch (error) {
      console.error("Error saving resources:", error);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await fetch("/api/resources", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: selectedResource._id,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        setResources((prev) => prev.filter((n) => n._id !== selectedResource._id));
        setShowDetail(false);
      } else {
        console.error("Error deleting resource:", data.error);
      }
    } catch (error) {
      console.error("Error deleting resource:", error);
    }
  };

  return (
    <div className={styles.detailContainer}>
      <hr />
      <div className={styles.detailHeader}>
        {editing ? (
          <div className={styles.editableHeader}>
            {/* Editable category */}
            <div className={styles.editorHeader}>
              <div className={styles.inputGroup}>
                <label htmlFor="category">카테고리</label>
                <select
                  value={selectedCurrentResource.category || "기타"}
                  onChange={(e) =>
                    setSelectedCurrentResource({
                      ...selectedCurrentResource,
                      category: e.target.value,
                    })
                  }
                >
                  <option value="언론보도">언론보도</option>
                  <option value="출판물">출판물</option>
                  <option value="교육자료">교육자료</option>
                  <option value="기타">기타</option>
                </select>
              </div>
              {/* Editable title */}

              {/* Editable date */}
              <div className={styles.inputGroup3}>
                <label htmlFor="date">날짜</label>
                <input
                  type="date"
                  value={selectedCurrentResource.date || ""}
                  onChange={(e) =>
                    setSelectedCurrentResource({
                      ...selectedCurrentResource,
                      date: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div className={styles.inputGroup2}>
              <label htmlFor="title">제목</label>
              <input
                type="text"
                value={selectedCurrentResource.title || ""}
                onChange={(e) =>
                  setSelectedCurrentResource({
                    ...selectedCurrentResource,
                    title: e.target.value,
                  })
                }
                placeholder="제목을 입력하세요"
              />
            </div>
          </div>
        ) : (
          <div className={styles.detailHeader}>
            <span className={styles.detailCategory}>
              {selectedCurrentResource.category || "기타"}
            </span>
            <span className={styles.detailTitle}>
              {selectedCurrentResource.title || "제목 없음"}
            </span>
            <div className={styles.topBar}>
              <span className={styles.detailDate}>
                {selectedCurrentResource.date || "날짜 없음"}
              </span>
            </div>
          </div>
        )}
      </div>
      <hr />

      {editing ? (
        // Editor for editing content
        <Editor
          key={selectedCurrentResource._id}
          ref={quillRef}
          readOnly={false}
          height="400px"
          className={styles.quillEditor}
          defaultValue={selectedCurrentResource.content || ""}
        />
      ) : (
        <div
          className={`${styles.noticeContent} ${styles.editorStyledContent} ql-editor`}
          dangerouslySetInnerHTML={{ __html: selectedCurrentResource.content || "" }}
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
        {isAdmin && // Only show editing buttons if isAdmin is true
          (editing ? (
            <div className={styles.editingButtons}>
              <button
                className={styles.editingButton}
                onClick={() => {
                  setEditing(false);
                  setSelectedCurrentResource(selectedResource || {}); // reset on cancel
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
              <button className={styles.editingButton} onClick={handleDelete}>
                <FaTrash />
                &nbsp; 삭제
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}
