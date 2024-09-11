// src/Index.js
import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useCreateProjectImage } from "../../../Api/Projects";

const Index = () => {
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [copied, setCopied] = useState(false);
  const { mutate: mutateImage, data: dataImage } = useCreateProjectImage();
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return;

    if (file) {
        const formData = new FormData();
        formData.append("file", file);
        mutateImage(formData, {
          onSuccess: (data) => {
            setUploadedImageUrl(data.file_url);
          },
          onError: (error) => {
            alert("Error uploading image.");
          },
        });
      } else {
        alert("No file selected.");
      }
  };

  const handleCopy = () => {
    navigator.clipboard
      .writeText(uploadedImageUrl)
      .then(() => alert("Image URL copied to clipboard!"))
      .catch(() => alert("Failed to copy URL."));
          setCopied(true);
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
          <Button variant="secondary" onClick={handleCopy}>
            {copied ? 'Copied!' : 'Copy URL'}
          </Button>
          <div className="mt-3">
            <img src={uploadedImageUrl} alt="Uploaded" style={{ maxWidth: '100%', height: 'auto' }} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
