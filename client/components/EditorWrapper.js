import dynamic from 'next/dynamic';
import React from 'react';

const QuillEditor = dynamic(() => import('./Editor'), {
    ssr: false,
});

const EditorWrapper = React.forwardRef((props, ref) => {
    return <QuillEditor {...props} ref={ref} />;
});

EditorWrapper.displayName = 'EditorWrapper';

export default EditorWrapper;