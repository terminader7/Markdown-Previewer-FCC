import { useEffect, useState } from "react";
import { placeHolder } from "../constants/placeholder";

export const MarkDownEditor = ({ setEditorText }) => {
  const [defaultText, _ /*ignore setDefaultText*/] = useState(placeHolder);
  useEffect(() => {
    setEditorText(defaultText);
  }, []);
  return (
    <div id="editor-box">
      <h3>Editor</h3>
      <textarea
        id="editor"
        onChange={(event) => setEditorText(event.target.value)}
      >
        {defaultText}
      </textarea>
    </div>
  );
};
