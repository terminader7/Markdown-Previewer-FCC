import "./App.css";
import { MarkDownPreviewer } from "./components/MarkDownPreviewer";
import { MarkDownEditor } from "./components/MarkDownEditor";
import { useState } from "react";

function App() {
  const [editorText, setEditorText] = useState("");
  return (
    <div className="App">
      <MarkDownEditor setEditorText={setEditorText} />
      <MarkDownPreviewer editorText={editorText} />
    </div>
  );
}

export default App;
