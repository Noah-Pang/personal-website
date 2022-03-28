import React, { useState } from "react";
import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack';

export default function AllPages(props) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offSet) {
      setPageNumber(prevPageNumber => prevPageNumber + offSet);
  }

  function changePageBack() {
    changePage(-1)
  }

  function changePageNext() {
    changePage(1)
  }

  const { pdf } = props;

  return(
    <div>
        <center>
            <div>
                <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
                    {Array.from(
                        new Array(numPages),
                        (el, index) => (
                            <Page 
                                key={`page_${index+1}`}
                                pageNumber={index + 1}
                            />
                        )
                    )}
                </Document>
            </div>
        </center>
    </div>
  );

  return(
    <div>
        <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
            <Page height="600" pageNumber={pageNumber} />
        </Document>  
        <p>Page {pageNumber} of {numPages}</p>
        {pageNumber > 1 && 
        <button onClick={changePageBack}>Previous Page</button>
        }
        {
            pageNumber < numPages &&
            <button onClick={changePageNext}>Next Page</button>
        }
    </div>
  );

  return (
    <Document
      file={pdf}
      options={{ workerSrc: "/pdf.worker.js" }}
      onLoadSuccess={onDocumentLoadSuccess}
    >
      {Array.from(new Array(numPages), (el, index) => (
        <Page key={`page_${index + 1}`} pageNumber={index + 1} />
      ))}
    </Document>
  );
}