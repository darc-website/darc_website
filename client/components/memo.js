"use client";

import React, { useEffect, useState } from "react";
import { Editor } from "primereact/editor";
import styles from "./memo.module.css";
import { FaEdit } from "react-icons/fa";
import { FaSave } from "react-icons/fa";
import { FaUndo } from "react-icons/fa";

export default function MemoEditor() {
  const [text, setText] = useState(""); // State to hold memo content
  const [isEditing, setIsEditing] = useState(false); // State to toggle between display and edit modes
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    // Fetch the memo content when the component loads
    const fetchMemo = async () => {
      try {
        const response = await fetch("/api/memo");
        const data = await response.json();
        if (response.ok) {
          setText(data.memo?.content || ""); // Set the fetched content
        } else {
          setError(data.error || "Failed to fetch memo");
        }
      } catch (err) {
        setError("Error fetching memo");
      }
    };

    fetchMemo();
  }, []);

  const handleSave = async () => {
    try {
      const response = await fetch("/api/memo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: text }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage("Memo saved successfully");
        setError("");
        setIsEditing(false); // Exit edit mode after saving
      } else {
        setError(data.error || "Failed to save memo");
        setMessage("");
      }
    } catch (err) {
      setError("Error saving memo");
      setMessage("");
    }
  };

  return (
    <div className={styles.memoContainer}>
      <h1 className={styles.heading}>관리자 메모</h1>

      {!isEditing ? (
        // Show memo content and edit button when not editing
        <div className={styles.memoDisplay}>
          <div
            className={`${styles.memoContent} ${styles.editorStyledContent}`}
            dangerouslySetInnerHTML={{ __html: text }} // Render HTML with inline styles from the editor
          />
          <button
            className={styles.editButton}
            onClick={() => setIsEditing(true)}
          >
            <FaEdit />
            &nbsp; 편집
          </button>
        </div>
      ) : (
        // Show editor and save button when editing
        <div className={styles.editorContainer}>
          <Editor
            value={text}
            onTextChange={(e) => setText(e.htmlValue)}
            style={{ height: "460px" }}
            className={styles.editor}
          />
          <div className={styles.buttonGroup}>
            <button onClick={handleSave} className={styles.saveButton}>
              <FaSave />
              &nbsp; 저장
            </button>
            <button
              className={styles.cancelButton}
              onClick={() => setIsEditing(false)}
            >
              <FaUndo />
              &nbsp; 취소
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
