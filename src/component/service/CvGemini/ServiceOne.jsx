import React from "react";
import "../serviceCss/Service.css";
import curriculum from "../../../assets/curriculum-vitae.png";
import axios from "axios";
import { useState } from "react";
import CvDetails from "../../cv-details/cvone/CvDetails";

function Service() {
  const url = "https://aiml-document-analyser.reca.ai/document/parse-cv/v2";
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [cvDetails, setCvDetails] = useState(null);
  // const navigate = useNavigate();

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
      formData.append("document", file);

      const response = await axios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("response", response);

      // Store the response data in localStorage
      localStorage.setItem("cvData", JSON.stringify(response.data));
      setCvDetails(response.data);

      console.log("CV parsed successfully", response.data);
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
          <p>Processing your CV...</p>
        </div>
      )}
      <div className="service-container">
        <div className="upload-section">
          <h2>Upload CV</h2>
          <div className="upload-card">
            <div className="upload-content">
              <img src={curriculum} alt="CV Upload" className="upload-icon" />
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleUpload}
                className="file-input"
              />
              <button
                onClick={handleClick}
                disabled={isLoading}
                className="upload-button"
              >
                {isLoading ? "Processing..." : "Upload CV"}
              </button>
            </div>
          </div>
        </div>

        <div className="details-section">
          <h2>CV Details</h2>
          {cvDetails ? (
            <div className="cv-details">
              <div className="cv-details-content">
                <CvDetails />
              </div>
            </div>
          ) : (
            <div className="no-cv-message">
              <p>Upload a CV to see details here</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Service;
