import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useCreateProjectImage } from "../../../Api/Projects";

const Index = () => {
  const [file, setFile] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [copied, setCopied] = useState(false);
  const { mutate: mutateImage } = useCreateProjectImage();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    mutateImage(formData, {
      onSuccess: (data) => {
        setUploadedImageUrl(data.file_url);
      },
      onError: () => {
        alert("Error uploading image.");
      },
    });
  };

  return (
    <div className="container mt-4">
      <h2>Upload Image</h2>
      <Form>
        <Form.Group>
          <Form.Label>Choose file</Form.Label>
          <Form.Control type="file" onChange={handleFileChange} />
        </Form.Group>
        <Button variant="primary" onClick={handleUpload}>
          Upload
        </Button>
      </Form>

      {uploadedImageUrl && (
        <div className="mt-3">
          <h4>Uploaded Image URL:</h4>
          <p>{uploadedImageUrl}</p>

          <CopyToClipboard
            text={uploadedImageUrl}
            onCopy={() => setCopied(true)}
          >
            <Button variant="secondary">
              {copied ? 'Copied!' : 'Copy URL'}
            </Button>
          </CopyToClipboard>

          <div className="mt-3">
            <img src={uploadedImageUrl} alt="Uploaded" style={{ maxWidth: '100%', height: 'auto' }} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
