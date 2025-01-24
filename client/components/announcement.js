'use client';

import React, { useState, useRef } from 'react';
import styles from './announcement.module.css';
import { FaSave } from "react-icons/fa";
import { FaUndo } from "react-icons/fa";
import { AiOutlineFileAdd } from "react-icons/ai";
import Editor from './Editor';
import Quill from 'quill';

const Delta = Quill.import('delta');

export default function MemoEditor() {
    const [isEditing, setIsEditing] = useState(false); // State to toggle editor view
    const [content, setContent] = useState(null); // Memo content state
    const [range, setRange] = useState(null); // Tracks current selection range
    const [lastChange, setLastChange] = useState(null); // Tracks last change
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [readOnly, setReadOnly] = useState(false); // Toggles read-only mode
    const [category, setCategory] = useState('이벤트'); // Dropdown selection
    const [title, setTitle] = useState(''); // Memo title
    const [date, setDate] = useState(''); // Memo date

    // Ref for accessing Quill methods
    const quillRef = useRef();

    // Handle save action
    const handleSave = async () => {
        // Validate required fields
        if (!title || !date || !category) {
            setError('카테고리, 제목, 날짜를 모두 입력하세요.');
            return;
        }

        if (quillRef.current) {
            const editorContent = quillRef.current.getContents();
            setContent(editorContent);
            setMessage(''); // Clear previous messages
            setError(''); // Clear previous errors

            try {
                // Send POST request to save the announcement
                const response = await fetch('/api/announcement', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        content: editorContent,
                        category,
                        title,
                        date,
                        temp: false, // Set to true for draft saves
                    }),
                });

                const data = await response.json();

                if (response.ok) {
                    setMessage('공지사항이 성공적으로 저장되었습니다.');
                    setIsEditing(false); // Exit editing mode
                } else {
                    setError(data.error || '공지사항 저장에 실패했습니다.');
                }
            } catch (err) {
                setError('서버와의 통신 중 오류가 발생했습니다. 다시 시도해주세요.');
                console.error('Error saving memo:', err);
            }
        }
    };

    return (
        <div className={styles.memoContainer}>
            {isEditing ? (
                // Editor View
                <div className={styles.editorPage}>

                    <div className={styles.editorHeader}>
                        {/* Category Dropdown */}
                        <div className={styles.inputGroup}>
                            <label htmlFor="category">카테고리</label>
                            <select
                                id="category"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                            >
                                <option value="이벤트">이벤트</option>
                                <option value="업데이트">업데이트</option>
                                <option value="서비스">서비스</option>
                                <option value="공고">공고</option>
                                <option value="기타">기타</option>
                            </select>
                        </div>



                        {/* Date Input */}
                        <div className={styles.inputGroup3}>
                            <label htmlFor="date">날짜</label>
                            <input
                                type="date"
                                id="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            />
                        </div>
                    </div>


                    {/* Title Input */}
                    <div className={styles.inputGroup2}>
                        <label htmlFor="title">제목</label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="제목을 입력하세요"
                        />
                    </div>

                    {/* Rich Text Editor */}
                    <Editor
                        ref={quillRef}
                        readOnly={readOnly}
                        defaultValue={
                            new Delta()
                        }
                        className={styles.quillEditor}
                        onTextChange={(delta) => setLastChange(delta)}
                        onSelectionChange={(selection) => setRange(selection)}
                    />

                    {/* Action Buttons */}
                    <div className={styles.editorActions}>
                        <button onClick={handleSave} className={styles.saveButton}>
                            <FaSave /> &nbsp; 저장
                        </button>
                        <button onClick={() => setIsEditing(false)} className={styles.cancelButton}>
                            <FaUndo /> &nbsp; 취소
                        </button>
                        {message && <p className={styles.successMessage}>{message}</p>}
                        {error && <p className={styles.errorMessage}>{error}</p>}
                    </div>
                </div>
            ) : (
                // Main View
                <div>
                    <div className={styles.reviewSectionHeader}>
                        <div className={styles.leftAlignedControls}>
                            <button
                                className={styles.addButton}
                                onClick={() => setIsEditing(true)}
                            >
                                <AiOutlineFileAdd /> &nbsp; 글쓰기
                            </button>
                        </div>
                        <div className={styles.rightAlignedControls}></div>
                    </div>
                    <div className={styles.memoContent}>
                        <h3>{title || '제목 없음'}</h3>
                        <p>{date || '날짜 없음'}</p>
                        <p>카테고리: {category}</p>
                        <p>
                            {content && typeof content === 'object' ? JSON.stringify(content) : content || 'No memo available.'}
                        </p>
                    </div>
                    <div className={styles.editorState}>
                        <h4>Editor State</h4>
                        <div>
                            <strong>Last Change:</strong> {lastChange ? JSON.stringify(lastChange.ops) : 'None'}
                        </div>
                        <div>
                            <strong>Current Range:</strong> {range ? JSON.stringify(range) : 'None'}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}