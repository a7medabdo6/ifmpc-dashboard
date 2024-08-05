import React from "react";
import { Container } from "react-bootstrap";
import { useDropzone, } from "react-dropzone";
export function StyledDropzone1() {
    const { acceptedFiles, fileRejections, getRootProps, getInputProps } =
      useDropzone({
        accept: "image/jpeg,image/png",
      });
  
    const acceptedFileItems = acceptedFiles.map((file) => (
      <li key={file.path}>
        {file.path} - {file.size} bytes
      </li>
    ));
  
    const fileRejectionItems = fileRejections.map(({ file, errors }) => (
      <li key={file.path}>
        {file.path} - {file.size} bytes
        <ul>
          {errors.map((e) => (
            <li key={e.code}>{e.message}</li>
          ))}
        </ul>
      </li>
    ));
  
    return (
      <section className="container">
        <Container {...getRootProps({ className: "dropzone" })}>
          <input {...getInputProps()} />
          <p>Drag 'n' drop some files here, or click to select files</p>
          <small>(Only *.jpeg and *.png images will be accepted)</small>
        </Container>
        <aside>
          {/* <p>Accepted files</p> */}
          <ul>{acceptedFileItems}</ul>
          {/* <hp>Rejected files</hp> */}
          <ul>{fileRejectionItems}</ul>
        </aside>
      </section>
    );
  }