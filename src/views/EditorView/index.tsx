import { TextField } from "@material-ui/core";
import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";
import React from "react";
function EditorView() {
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );

  console.log(editorState.getCurrentContent());

  return (
    <>
      <TextField
        required
        id="standard-required"
        label="Required"
        defaultValue="Hello World"
      />
      <TextField
        required
        id="standard-required"
        label="Required"
        defaultValue="Hello World"
      />
      <TextField
        required
        id="standard-required"
        label="Required"
        defaultValue="Hello World"
      />
      <TextField
        required
        id="standard-required"
        label="Required"
        defaultValue="Hello World"
      />
      <TextField
        required
        id="standard-required"
        label="Required"
        defaultValue="Hello World"
      />
      <Editor
        placeholder="text something"
        editorState={editorState}
        onChange={setEditorState}
      />
    </>
  );
}

export default EditorView;
