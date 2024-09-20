import React, { useState } from 'react';
import { Quill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';

const MyQuillEditor = () => {
  const [editorHtml, setEditorHtml] = useState('');

  const handleChange = (html) => {
    setEditorHtml(html);
  };

  const modules = {
    toolbar: {
      container: [
        [{ 'font': [] }],
        [{ 'header': [1, 2, false] }],
        ['bold', 'italic', 'underline'],
        ['link', 'image'],
        ['clean'], // Remove formatting button
      ],
      handlers: {
        font: function (value) {
          this.quill.format('font', value);
        },
      },
    },
  };

  return (
    <div>
      <Quill
        value={editorHtml}
        onChange={handleChange}
        theme="snow"
        modules={modules}
      />
      <div>
        <h2>Output:</h2>
        <div dangerouslySetInnerHTML={{ __html: editorHtml }} />
      </div>
    </div>
  );
};

export default MyQuillEditor;
