import React from "react";
import axios from "axios";
import { useState } from "react";
import "./Extraction.css"

// import '../serviceCss/Service.css'

function Extraction() {
  const url = "https://aiml-document-analyser.reca.ai/document/data-extraction";
  const [file, setFile] = useState(null);
  const [name, setName] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [document, setDocument] = useState(null);

  const handleUpload = async (event) => {
    setFile(event.target.files[0]);
  };

  const handleClick = async () => {
    console.log("file", file);
    console.log("name", name);

    if (!file || !name) {
      console.error("No file selected");
      return;
    }

    try {
      setIsLoading(true);
      const formData = new FormData();
      formData.append("file", file);
      formData.append("document_name", name);

      const response = await axios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("response", response);

      // Store the response data in localStorage
      localStorage.setItem("Document", JSON.stringify(response.data));
      setDocument(response.data);

      console.log("Document parsed successfully", response.data);
    } catch (error) {
      console.error("Error parsing Document:", error);
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
          <h2>Document Extraction</h2>
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
              <div className="select-container">
                <label htmlFor="document-type" className="select-label">
                  Choose a document type:
                </label>
                <select
                  id="document-type"
                  name="document-type"
                  className="file-input"
                  value={name || ""}
                  onChange={(e) => setName(e.target.value)}
                >
                  <option value="">Select a document type</option>
                  <option value="UIDAI">Aadhar Card</option>
                  <option value="PAN">Pan card </option>
                  <option value="CHEQUE">Cheque</option>
                </select>
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
                {isLoading ? "Processing..." : "Extract Document"}
              </button>
            </div>
          </div>
        </div>

        <div className="details-section">
          <h2>Document Details</h2>
          {document ? (
            <div className="cv-details">
              <div className="cv-details-content">
                <h3>Document Information</h3>
                <div className="detail-row">
                  <ul>
                    {Object.entries(document).map(([key, value], idx) => (
                      <li key={idx}>
                        <strong>{key}</strong>: {value}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <div className="no-cv-message">
              <p>
                Select a document type and upload to see extracted details here
              </p>
            </div>
          )}
        </div>
      </div>
      
    </div>
  );
}

export default Extraction;
