import React, { useState } from "react";
import curriculum from "../../../assets/curriculum-vitae.png";
import axios from "axios";
import "./AllDoc.css"
import "../serviceCss/Service.css";

function AllDoc() {
  const url = "https://development.digisherpa.ai/document/info/get-text-from-doc";
  const [files, setFiles] = useState(null);
  const [allDoc, setAllDoc] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [copySuccess, setCopySuccess] = useState(false);

  const supportedFiles = [
    { type: "PDF" },
    { type: "DOC" },
    { type: "DOCX" },
    { type: "TXT" },
    { type: "JPEG" },
    { type: "PNG" },
    { type: "RTF" },
    { type: "CSV" },
    { type: "XLSX" },
    { type: "XLS" }
  ];

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFiles(file);
      setError(null);
    }
  };

  const handleCopy = async () => {
    try {
      const textToCopy = typeof allDoc === 'string' ? allDoc : JSON.stringify(allDoc, null, 2);
      await navigator.clipboard.writeText(textToCopy);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const formatContent = (content) => {
    if (typeof content === 'string') {
      // Split by newlines and create array of lines
      return content.split('\\n').map((line, index) => (
        <React.Fragment key={index}>
          {line}
          {index < content.split('\\n').length - 1 && <br />}
        </React.Fragment>
      ));
    }
    return JSON.stringify(content, null, 2);
  };

  const handleClick = async () => {
    if (!files) {
      setError("Please select a file first");
      return;
    }
    try {
      setIsLoading(true);
      setError(null);
      const formData = new FormData();
      formData.append("document", files);

      const response = await axios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          'Authorization': 'Basic ZGlnaXNoZXJwYToxMjNlZGMjRURD'
        },
      });
      
      localStorage.setItem("AllDoc", JSON.stringify(response.data));
      setAllDoc(response.data);
    } catch (error) {
      console.error("Error uploading file:", error);
      setError("Failed to upload document. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="main-container">
      {isLoading && (
        <div className="loader-overlay">
          <div className="loader"></div>
          <p>Processing your Document...</p>
        </div>
      )}
      <div className="service-container">
        <div className="upload-section">
          <h2>Upload Document</h2>
          <div className="upload-card">
            <div className="upload-content">
             
                <div className="document-icon">
               <div className="custom-document-icon">
                  <div className="document-page"></div>
                  <div className="document-lines">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                  </div>
                </div> 
              </div>
              <input
                type="file"
                onChange={handleFileChange}
                className="file-input"
                accept=".pdf,.doc,.docx,.txt,.jpeg,.png,.rtf,.csv,.xlsx,.xls"
              />
              {error && <p className="error-message">{error}</p>}
              <button 
                onClick={handleClick} 
                className="upload-button"
                disabled={isLoading}
              >
                {isLoading ? "Processing..." : "Upload Document"}
              </button>
              <div className="supported-files">
                <h4>Supported File Types</h4>
                <div className="file-types-grid">
                  {supportedFiles.map((file, index) => (
                    <div key={index} className="file-type-item">
                      
                      <span className="file-extension">.{file.type}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="details-section">
          <div className="details-header">
            <h2>Document Details</h2>
            {allDoc && (
              <button 
                onClick={handleCopy}
                className="copy-button"
                title="Copy to clipboard"
              >
                {copySuccess ? "Copied!" : "Copy Content"}
              </button>
            )}
          </div>
          {allDoc ? (
            <div className="cv-details">
              <div className="cv-details-content">
                {formatContent(allDoc)}
              </div>
            </div>
          ) : (
            <div className="no-cv-message">
              <p>Upload a document to see details here</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AllDoc;
