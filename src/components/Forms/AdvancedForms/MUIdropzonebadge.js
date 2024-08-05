import React from "react";
import {  DropzoneArea,  } from "material-ui-dropzone";
import { createStyles, makeStyles } from "@material-ui/core/styles";
export function MUIdropzonebadge(props) {
    const useStyles = makeStyles((theme) =>
      createStyles({
        previewChip: {
          minWidth: 160,
          maxWidth: 210,
        },
      })
    );
    const classes = useStyles();
    return (
      <div>
        <DropzoneArea
          showPreviews={true}
          showPreviewsInDropzone={false}
          useChipsForPreview
          previewGridProps={{ container: { spacing: 1, direction: "row" } }}
          previewChipProps={{ classes: { root: classes.previewChip } }}
          previewText="Selected files"
        />
      </div>
    );
  }