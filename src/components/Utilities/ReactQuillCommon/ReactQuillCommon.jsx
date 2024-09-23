
import React, { useState } from "react";
import ReactEditor from "react-text-editor-kit";
import "./custom-quill.css"; // If you have custom styles for the editor

const CustomQuillEditor = ({
  text,
  setText,
  textDes,
  setTextDes,
  title,
  setvalueAlignHeading,
  setvalueAlignDes,
  textDirection
}) => {
  const [editorValue, setEditorValue] = useState(title === "heading" ? text : textDes);

  const handleChange = (value) => {
    setEditorValue(value);
    if (title === "heading") {
      setText(value);
    } else {
      setTextDes(value);
    }
    // Update alignment based on the selected text if needed
    // You might need to adapt this part according to `react-text-editor-kit` API
    // Example: handleChangeAlignDes() or handleChangeAlignHeading()
  };

  const navbar = [
    {
      name: "format",
      title: "Format",
      options: [
        "bold",
        "italic",
        "underline",
        "superscript",
        "subscript",
        "font",
        "font_size",
        "alignment",
      ],
    },
    "|",
    "link",
    "|",
    "image",
    "|",
    "video",
    "|",
    "copy",
    "|",
    "cut",
    "paste"
  ];

  const toolbar = [
    "bold",
    "italic",
    "underline",
    "superscript",
    "subscript",
    "|",
    "alignLeft",
    "alignCenter",
    "alignRight",
    "alignJustify",
    "|",
    "indent",
    "outdent",
    "|",
    "orderedList",
    "unorderedList",
    "|",
    "removeFormat",
    "|",
    "textColor",
    "backgroundColor",
    "|",
    "ltr",
    "rtl",
    "|",
    {
      name: "font",
      options: [
        { label: "Arial", value: "Arial" },
        { label: "Times New Roman", value: "Times New Roman" },
        { label: "Courier New", value: "Courier New" },
        // Add more fonts as needed
      ],
    },
  ];

  const themeConfig = {
    "background-color": "#fff",
    "border-color": "#c4c4c4",
    "text-color": "#414141",
    "toolbar-button-background": "#fff",
    "toolbar-text-color": "#414141",
    "toolbar-button-hover-background": "#efefef",
    "toolbar-button-selected-background": "#dee0e2",
    "svg-color": "#414141",
    "save-button-background": "rgb(9, 134, 62)",
  };

  return (
    <div className="">
      <ReactEditor
        value={editorValue}
        onChange={handleChange}
        placeholder="Write your text here"
        navbar={navbar}
        toolbar={toolbar}
        theme_config={themeConfig}
        style={{ direction: textDirection }} // تطبيق اتجاه النص باستخدام style

      />
    </div>
  );
};

export default CustomQuillEditor;
