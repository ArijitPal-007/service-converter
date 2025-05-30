import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Service.css';

function Service() {
  const url = "https://aiml-document-analyser.reca.ai/document/parse-cv/v2";
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleUpload = async (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      // Check file type
      if (!selectedFile.type.includes('pdf') && !selectedFile.type.includes('doc') && !selectedFile.type.includes('docx')) {
        setError('Please upload a PDF or Word document');
        return;
      }
      // Check file size (max 5MB)
      if (selectedFile.size > 5 * 1024 * 1024) {
        setError('File size should be less than 5MB');
        return;
      }
      setFile(selectedFile);
      setError('');
    }
  };

  const handleClick = async () => {
    if (!file) {
      setError('Please select a file first');
      return;
    }

    try {
      setIsLoading(true);
      setError('');
      const formData = new FormData();
      formData.append("document", file);

      const response = await axios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      localStorage.setItem("cvData", JSON.stringify(response.data));
      navigate("/cv-details");
    } catch (error) {
      setError(error.response?.data?.message || 'Failed to process CV. Please try again.');
      console.error("Error parsing CV:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (

    <>
    <div className="service-container">
      <div className="service-content">
        <div className="upload-section">
          <h2>Upload Your CV</h2>
          <p className="upload-description">
            Upload your CV in PDF or Word format to analyze your professional profile
          </p>
          
          <div className="upload-area" 
               onDragOver={(e) => e.preventDefault()}
               onDrop={(e) => {
                 e.preventDefault();
                 const droppedFile = e.dataTransfer.files[0];
                 if (droppedFile) {
                   const event = { target: { files: [droppedFile] } };
                   handleUpload(event);
                 }
               }}>
            <div className="upload-icon">
              <i className="fas fa-cloud-upload-alt"></i>
            </div>
            <input
              type="file"
              id="file-upload"
              onChange={handleUpload}
              accept=".pdf,.doc,.docx"
              className="file-input"
            />
            <label htmlFor="file-upload" className="file-label">
              {file ? file.name : 'Choose a file or drag it here'}
            </label>
          </div>

          {error && <div className="error-message">{error}</div>}

          <button 
            onClick={handleClick} 
            disabled={isLoading || !file}
            className={`upload-button ${isLoading ? 'loading' : ''}`}
          >
            {isLoading ? (
              <>
                <span className="spinner"></span>
                Processing...
              </>
            ) : (
              'Analyze CV'
            )}
          </button>
        </div>

        {isLoading && (
          <div className="loader-overlay">
            <div className="loader"></div>
            <p>Analyzing your CV...</p>
          </div>
        )}
      </div>
    </div>


    
    </>
  );
}

export default Service;
