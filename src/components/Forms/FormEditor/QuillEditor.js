import React from "react";
// import { Button } from "react-bootstrap";
import { useQuill } from "react-quilljs";
// import fileDownload from "js-file-download";
// import TurndownService from "turndown";
// import { Editor } from "react-draft-wysiwyg";
// import { EditorState, convertFromRaw, convertToRaw } from "draft-js";
// import draftToHtml from "draftjs-to-html";
export function QuillEditor() {

    const { quill, quillRef } = useQuill();
    console.log(quill);
    return (
      <div>
        <div>
          <div style={{ height: "90%" }} ref={quillRef} />
        </div>
      </div>
    );
  }