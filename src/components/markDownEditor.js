import React from 'react';


export const MarkDownEditor = ({ setEditorText }) => {

return (
    <div id='editor-box'>
        <h3>Editor</h3>
        <textarea id='editor' onChange={(event) => setEditorText(event.target.value)}></textarea>
    </div>
);
}
