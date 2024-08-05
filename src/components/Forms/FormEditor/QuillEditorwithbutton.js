import React from "react";
import { Button } from "react-bootstrap";
import { useQuill } from "react-quilljs";
import fileDownload from "js-file-download";
import TurndownService from "turndown";
// import { Editor } from "react-draft-wysiwyg";
// import { EditorState, convertFromRaw, convertToRaw } from "draft-js";
// import draftToHtml from "draftjs-to-html";
export function QuillEditorwithbutton() {
    const turndownService = new TurndownService();
  
    const { quill, quillRef } = useQuill();
    const MutationObserver = () => {
      fileDownload(
        turndownService.turndown(quill.container.firstChild.innerHTML),
        "txtDownload.md"
      );
    };
  
    return (
      <div>
        <div>
          <div style={{ height: "90%" }} ref={quillRef} />
        </div>
        <Button
          onClick={MutationObserver}
          className="mt-2"
          variant="primary"
        >
          Save as MD file
        </Button>
      </div>
    );
  }