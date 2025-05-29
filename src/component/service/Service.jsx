import React from "react";
import "./Service.css";
import curriculum from "../../assets/curriculum-vitae.png";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Service() {
  const url = "https://aiml-document-analyser.reca.ai/document/parse-cv/v2";
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

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

      navigate("/cv-details");
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
      <div className="upload-card">
        <input type="file" accept="" onChange={handleUpload} />
        <button onClick={handleClick} disabled={isLoading}>
          {isLoading ? "Processing..." : "Upload CV"}
        </button>
      </div>

      <div className="upload-card">
        <input type="file" accept=".pdf" onChange={handleUpload} />
        <button onClick={handleClick}>Upload CV</button>
      </div>
      <div className="upload-card">
        <input type="file" accept=".pdf" onChange={handleUpload} />
        <button onClick={handleClick}>Upload CV</button>
      </div>
      <div className="upload-card">
        <input type="file" accept=".pdf" onChange={handleUpload} />
        <button onClick={handleClick}>Upload CV</button>
      </div>
      <div className="upload-card">
        <input type="file" accept=".pdf" onChange={handleUpload} />
        <button onClick={handleClick}>Upload CV</button>
      </div>
      <div className="upload-card">
        <input type="file" accept=".pdf" onChange={handleUpload} />
        <button onClick={handleClick}>Upload CV</button>
      </div>
    </div>
  );
}

export default Service;
