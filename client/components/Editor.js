'use client';
import React, { forwardRef, useEffect, useLayoutEffect, useRef } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css'; // For the Snow theme
import ImageResize from 'quill-image-resize-module-react';

if (typeof window !== 'undefined' && Quill && !Quill.imports['modules/imageResize']) {
    Quill.register('modules/imageResize', ImageResize);
}

// Editor is an uncontrolled React component
const Editor = forwardRef(
    ({ readOnly, defaultValue, onTextChange, onSelectionChange, height = '500px' }, ref) => {
        const containerRef = useRef(null);

        useEffect(() => {
            const container = containerRef.current;
            container.style.height = height; // Apply the height dynamically
        }, [height]);

        const defaultValueRef = useRef(defaultValue);
        const onTextChangeRef = useRef(onTextChange);
        const onSelectionChangeRef = useRef(onSelectionChange);

        useLayoutEffect(() => {
            onTextChangeRef.current = onTextChange;
            onSelectionChangeRef.current = onSelectionChange;
        });

        useEffect(() => {
            ref.current?.enable(!readOnly);
        }, [ref, readOnly]);

        useEffect(() => {
            const container = containerRef.current;
            const editorContainer = container.appendChild(
                container.ownerDocument.createElement('div'),
            );

            // Quill Editor with Custom Toolbar
            const quill = new Quill(editorContainer, {
                theme: 'snow',
                modules: {
                    toolbar: {
                        container: [
                            [{ header: [1, 2, false] }], // Headers
                            ['bold', 'italic', 'underline'], // Text styles
                            ['blockquote', 'code-block'], // Blockquote and code block
                            [{ list: 'ordered' }, { list: 'bullet' }], // Lists
                            [{ align: [] }], // Alignment options
                            ['image', 'video'], // Media buttons
                            ['clean'], // Clear formatting
                        ],
                        handlers: {
                            image: function () {
                                const input = document.createElement('input');
                                input.setAttribute('type', 'file');
                                input.setAttribute('accept', 'image/*');
                                input.click();

                                input.onchange = () => {
                                    const file = input.files[0];
                                    if (file) {
                                        const reader = new FileReader();
                                        reader.onload = (e) => {
                                            const range = quill.getSelection();
                                            quill.insertEmbed(
                                                range.index,
                                                'image',
                                                e.target.result,
                                            );
                                        };
                                        reader.readAsDataURL(file);
                                    }
                                };
                            },
                            video: function () {
                                const url = prompt("YouTube 영상 링크를 입력하세요:");
                                if (url) {
                                    const youtubeRegex =
                                        /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w\-]+)/;
                                    const match = url.match(youtubeRegex);
                                    if (match && match[1]) {
                                        const embedUrl = `https://www.youtube.com/embed/${match[1]}`;
                                        const range = quill.getSelection(true);

                                        // 원하는 width, height을 설정
                                        const iframeHTML = `<iframe width="100%" height="360" src="${embedUrl}" frameborder="0" allowfullscreen></iframe>`;

                                        quill.clipboard.dangerouslyPasteHTML(range.index, iframeHTML, Quill.sources.USER);
                                        quill.setSelection(range.index + 1);
                                    } else {
                                        alert("유효한 YouTube 링크를 입력해주세요.");
                                    }
                                }
                            }
                        },
                    },
                    imageResize: {
                        modules: ['Resize', 'DisplaySize'],
                    },
                },
                formats: [
                    'header', // Header levels
                    'bold', // Bold text
                    'italic', // Italic text
                    'underline', // Underlined text
                    'blockquote', // Blockquote
                    'code-block', // Code block
                    'list', // Ordered and bullet lists
                    'align', // Alignment (left, center, right, justify)
                    'image', // Images
                    'video', // Videos
                ],
            });

            ref.current = quill;


            if (defaultValueRef.current) {
                quill.clipboard.dangerouslyPasteHTML(defaultValueRef.current);
            }




            // *** New code to apply custom font size and text color ***
            const editorElem = editorContainer.querySelector('.ql-editor');
            if (editorElem) {
                editorElem.style.fontSize = '16px';   // Set your desired font size
                editorElem.style.color = '#333333';    // Set your desired text color
            }
            // *******************************************************

            quill.on(Quill.events.TEXT_CHANGE, (...args) => {
                onTextChangeRef.current?.(...args);
            });

            quill.on(Quill.events.SELECTION_CHANGE, (...args) => {
                onSelectionChangeRef.current?.(...args);
            });

            return () => {
                ref.current = null;
                container.innerHTML = '';
            };
        }, [ref]);

        return <div ref={containerRef}></div>;
    },
);

Editor.displayName = 'Editor';

export default Editor;