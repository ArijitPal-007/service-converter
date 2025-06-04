import React, { useState } from 'react';
import { FaFileAlt, FaUpload, FaSpinner } from 'react-icons/fa';
// import './CvScorer.css';

function CvScorer() {
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [cvDetails, setCvDetails] = useState(null);

  const handleUpload = async (event) => {
    setFile(event.target.files[0]);
  };

//   const handleClick = async () => {
//     if (!file) {
//       alert('Please select a file first');
//       return;
//     }

//     setIsLoading(true);
//     try {
//       // Simulate API call
//       await new Promise(resolve => setTimeout(resolve, 2000));
//       setCvDetails({
//         score: 85,
//         skills: ['JavaScript', 'React', 'Node.js', 'Python'],
//         experience: '5+ years',
//         education: 'Bachelor in Computer Science',
//         match: 'High match for Software Engineer position'
//       });
//     } catch (error) {
//       console.error('Error processing CV:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

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
              <FaFileAlt size={48} color="#4a90e2" />
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleUpload}
                className="file-input"
              />
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleUpload}
                className="file-input"
              />
              <input
                type="text"
                placeholder='enter jq_list'
                onChange={handleUpload}
                className="file-input"
              />
              <input
                type="text"
                placeholder='enter requirement_data'
                // accept=".pdf,.doc,.docx"
                onChange={handleUpload}
                className="file-input"
              />
              <input
                type="text"
                placeholder='enter candidate_data'

                // accept=".pdf,.doc,.docx"
                onChange={handleUpload}
                className="file-input"
              />
              <button
                // onClick={handleClick}
                disabled={isLoading}
                className="upload-button"
              >
                {isLoading ? (
                  <>
                    <FaSpinner className="spinner" />
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <FaUpload />
                    <span>Upload CV</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

       
      </div>
    </div>
  );
}

export default CvScorer;
