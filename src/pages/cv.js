import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf/dist/esm/entry.webpack";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const CV = () => {
  return (
    <div className="cv-container">
      <iframe
        frameborder="0"
        scrolling="yes"
        width="70%"
        height="1000rem"
        src="https://drive.google.com/file/d/1KsZJhjZKhxIBtmK1-BJF4Nzf8i9vPwmY/preview"
      ></iframe>
    </div>
  );
};

export default CV;
