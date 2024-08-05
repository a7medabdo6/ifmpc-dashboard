import React, { useState } from "react";

import { DropzoneAreaBase,} from "material-ui-dropzone";

export function Materialui() {
    const [files, setFiles] = useState([]);
  
    const handleAdd = (newFiles) => {
      newFiles = newFiles.filter(
        (file) => !files.find((f) => f.data === file.data)
      );
      setFiles([...files, ...newFiles]);
    };
  
    const handleDelete = (deleted) => {
      setFiles(files.filter((f) => f !== deleted));
    };
  
    return (
      <DropzoneAreaBase
        fileObjects={files}
        onAdd={handleAdd}
        onDelete={handleDelete}
      />
    );
  }