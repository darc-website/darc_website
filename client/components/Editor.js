'use client';
import React, { forwardRef, useEffect, useLayoutEffect, useRef } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css'; // For the Snow theme

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
                                const url = prompt('Enter video URL:');
                                if (url) {
                                    const range = quill.getSelection();
                                    quill.insertEmbed(range.index, 'video', url);
                                }
                            },
                        },
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
                quill.setContents(defaultValueRef.current);
            }

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