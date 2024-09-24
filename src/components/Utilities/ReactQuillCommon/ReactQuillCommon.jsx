
// import React, { useState } from "react";
// import ReactEditor from "react-text-editor-kit";
// import "./custom-quill.css"; // If you have custom styles for the editor

// const CustomQuillEditor = ({
//   text,
//   setText,
//   textDes,
//   setTextDes,
//   title,
//   setvalueAlignHeading,
//   setvalueAlignDes,
//   textDirection
// }) => {
//   const [editorValue, setEditorValue] = useState(title === "heading" ? text : textDes);

//   const handleChange = (value) => {
//     setEditorValue(value);
//     if (title === "heading") {
//       setText(value);
//     } else {
//       setTextDes(value);
//     }
//     // Update alignment based on the selected text if needed
//     // You might need to adapt this part according to `react-text-editor-kit` API
//     // Example: handleChangeAlignDes() or handleChangeAlignHeading()
//   };

//   const navbar = [
//     {
//       name: "format",
//       title: "Format",
//       options: [
//         "bold",
//         "italic",
//         "underline",
//         "superscript",
//         "subscript",
//         "font",
//         "font_size",
//         "alignment",
//       ],
//     },
//     "|",
//     "link",
//     "|",
//     "image",
//     "|",
//     "video",
//     "|",
//     "copy",
//     "|",
//     "cut",
//     "paste"
//   ];

//   const toolbar = [
//     "bold",
//     "italic",
//     "underline",
//     "superscript",
//     "subscript",
//     "|",
//     "alignLeft",
//     "alignCenter",
//     "alignRight",
//     "alignJustify",
//     "|",
//     "indent",
//     "outdent",
//     "|",
//     "orderedList",
//     "unorderedList",
//     "|",
//     "removeFormat",
//     "|",
//     "textColor",
//     "backgroundColor",
//     "|",
//     "ltr",
//     "rtl",
//     "|",
//     {
//       name: "font",
//       options: [
//         { label: "Arial", value: "Arial" },
//         { label: "Times New Roman", value: "Times New Roman" },
//         { label: "Courier New", value: "Courier New" },
//         // Add more fonts as needed
//       ],
//     },
//   ];

//   const themeConfig = {
//     "background-color": "#fff",
//     "border-color": "#c4c4c4",
//     "text-color": "#414141",
//     "toolbar-button-background": "#fff",
//     "toolbar-text-color": "#414141",
//     "toolbar-button-hover-background": "#efefef",
//     "toolbar-button-selected-background": "#dee0e2",
//     "svg-color": "#414141",
//     "save-button-background": "rgb(9, 134, 62)",
//   };

//   return (
//     <div className="">
//       <ReactEditor
//         value={editorValue}
//         onChange={handleChange}
//         placeholder="Write your text here"
//         navbar={navbar}
//         toolbar={toolbar}
//         theme_config={themeConfig}
//         style={{ direction: textDirection }} // تطبيق اتجاه النص باستخدام style

//       />
//     </div>
//   );
// };

// export default CustomQuillEditor;


import React, { useState } from "react";
import "jodit";
import JoditEditor from 'jodit-react';

// دالة لنسخ النص إلى الحافظة
const copyStringToClipboard = function (str) {
  var el = document.createElement("textarea");
  el.value = str;
  el.setAttribute("readonly", "");
  el.style.position = "absolute";
  el.style.left = "-9999px";
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
};

// حقول الدمج المتاحة
const facilityMergeFields = [
  "FacilityNumber",
  "FacilityName",
  "Address",
  "MapCategory",
  "Latitude",
  "Longitude",
  "ReceivingPlant",
  "TrunkLine",
  "SiteElevation"
];
const inspectionMergeFields = [
  "InspectionCompleteDate",
  "InspectionEventType"
];

// دالة لإنشاء عنصر مجموعة الخيارات
const createOptionGroupElement = (mergeFields, optionGrouplabel) => {
  let optionGroupElement = document.createElement("optgroup");
  optionGroupElement.setAttribute("label", optionGrouplabel);
  mergeFields.forEach(field => {
    let optionElement = document.createElement("option");
    optionElement.className = "merge-field-select-option";
    optionElement.value = field;
    optionElement.text = field;
    optionGroupElement.appendChild(optionElement);
  });
  return optionGroupElement;
}

// أزرار المحرر
const buttons = [
  "undo",
  "redo",
  "|",
  "bold",
  "italic",
  "underline",
  "|",
  "image",
  "link",
  "table",
  "|",
  {
    name: "insertVideo",
    tooltip: "إدراج رابط الفيديو",
    exec: function (editor) {
      const videoURL = prompt("أدخل رابط الفيديو:");
      if (videoURL) {
        editor.selection.insertHTML(`<video controls style="width: 100%;"><source src="${videoURL}" type="video/mp4">متصفحك لا يدعم علامة الفيديو.</video>`);
      }
    }
  },
  "fullsize",
  "|",
  {
    name: "copyContent",
    tooltip: "نسخ المحتوى إلى الحافظة",
    exec: function (editor) {
      let html = editor.value;
      copyStringToClipboard(html);
    }
  }
];

// إعدادات المحرر
const editorConfig = {
  readonly: false,
  toolbar: true,
  spellcheck: true,
  language: "en",
  buttons: buttons,
  uploader: {
    insertImageAsBase64URI: true,
    insertVideoAsBase64URI: true // السماح برفع الفيديو
  },
  width: 800,
  height: 400,


};

// المحتوى الابتدائي للمحرر
const initialContent = `<p>حاول نسخ المحتوى من مستند وورد والصقه هنا.</p><hr>`;

function CustomQuillEditor({

  text,
  setText,
  textDes,
  setTextDes,
  title,
  setvalueAlignHeading,
  setvalueAlignDes,
  textDirection,

}) {
    const [editorValue, setEditorValue] = useState(title === "heading" ? text : textDes);

  const [data, setData] = useState(initialContent);
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
 
  return (
    <div style={{  maxWidth: editorConfig.width,textAlign:textDirection === 'rtl' ? 'right' :'left' }}>
      <JoditEditor
        value={textDes}
        config={editorConfig}
        onChange={value => handleChange(value)}
      />
    </div>
  );
}

export default CustomQuillEditor;
