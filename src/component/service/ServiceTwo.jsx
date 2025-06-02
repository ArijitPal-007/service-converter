import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Service.css";
import "./ServiceTwo.css"

function ServiceTwo() {
  useEffect(() => {
    // Add Font Awesome CDN
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css";
    document.head.appendChild(link);
  }, []);

  const url = "https://aiml-document-analyser.reca.ai/document/document-classification";
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [aadhar, setAadhar] = useState(null);
  // const [cvDetails, setCvDetails] = useState(null);

  const handleUpload = async (event) => {
    setFile(event.target.files[0]);
  };
  const handleClick = async () => {
    console.log("file", file);

    if (!file) {
      console.error("No file selected");
      return;
    }

    try {
      setIsLoading(true);
      const formData = new FormData();
      formData.append("file", file);

      const response = await axios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("response", response);

      // Store the response data in localStorage
      localStorage.setItem("aadhar", JSON.stringify(response.data));
      setAadhar(response.data);

      console.log("aadhar parsed successfully", response.data);
    } catch (error) {
      console.error("Error parsing CV:", error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="main-container">
      {isLoading && (
        <div className="loader-overlay">
          <div className="loader"></div>
          <p>Processing your Aadhar...</p>
        </div>
      )}
      <div className="service-container">
        <div className="upload-section">
          <h2>Upload Document</h2>
          <div className="upload-card">
            <div className="upload-content">
              <div className="document-icon">
                <i className="fas fa-file-alt"></i>
              </div>
              <input
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={handleUpload}
                className="file-input"
              />
              <button
                onClick={handleClick}
                disabled={isLoading}
                className="upload-button"
              >
                {isLoading ? "Processing..." : "Upload Document"}
              </button>
            </div>
          </div>
        </div>

        <div className="details-section">
  <h2>Document Details</h2>
  {aadhar && aadhar.label ? (
    <div className="cv-details">
      <div className="cv-details-content">
        <h3>Document Information</h3>
        <div className="detail-row">
          <span className="detail-label">Label:</span>
          <span className="detail-value">{aadhar.label}</span>
        </div>
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

export default ServiceTwo;
