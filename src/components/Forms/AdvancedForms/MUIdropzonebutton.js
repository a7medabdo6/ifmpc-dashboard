import React, { useState } from "react";
import {  DropzoneDialog } from "material-ui-dropzone";
import Button from "@material-ui/core/Button";
export function MUIdropzonebutton() {
    const [open, setOpen] = useState(false);
  
    return (
      <div>
        <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
          Add Image
        </Button>
  
        <DropzoneDialog
          acceptedFiles={["image/*"]}
          cancelButtonText={"cancel"}
          submitButtonText={"submit"}
          maxFileSize={5000000}
          open={open}
          onClose={() => setOpen(false)}
          onSave={(files) => {
            console.log("Files:", files);
            setOpen(false);
          }}
          showPreviews={true}
          showFileNamesInPreview={true}
        />
      </div>
    );
  }