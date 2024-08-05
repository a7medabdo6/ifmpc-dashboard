import React from "react";
import {  DropzoneArea} from "material-ui-dropzone";
import { AttachFile, Audiotrack, Description, PictureAsPdf, Theaters } from "@material-ui/icons";
export function CustomMaterialui() {
    const handlePreviewIcon = (fileObject, classes) => {
      const { type } = fileObject.file;
      const iconProps = {
        className: classes.image,
      };
  
      if (type.startsWith("video/")) return <Theaters {...iconProps} />;
      if (type.startsWith("audio/")) return <Audiotrack {...iconProps} />;
  
      switch (type) {
        case "application/msword":
        case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
          return <Description {...iconProps} />;
        case "application/pdf":
          return <PictureAsPdf {...iconProps} />;
        default:
          return <AttachFile {...iconProps} />;
      }
    };
    return <DropzoneArea getPreviewIcon={handlePreviewIcon} />;
  }