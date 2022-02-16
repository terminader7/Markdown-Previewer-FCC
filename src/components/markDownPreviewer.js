import React from 'react'
import { marked } from 'marked'


export const MarkDownPreviewer = ({ editorText }) => {
    const parsedText = marked.parse(editorText);
    return (
        <div id="previewer-box">
            <h3>Previewer</h3>
            <div id='preview'
                dangerouslySetInnerHTML={{ __html: parsedText }}>
            </div>
        </div>
    )
}