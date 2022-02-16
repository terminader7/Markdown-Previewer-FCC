import React from 'react' 



export const MarkDownPreviewer = ({ editorText }) => {
    return (
    <div id="previewer-box">
        <h3>Previewer</h3>
        <div id='previewer'>
        <p>{ editorText }</p>
        </div>
    </div>
    )
}