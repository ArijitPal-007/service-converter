import React from 'react'
import { useState,useEffect } from 'react';

function Aadhar() {

    const [aadhar,setAadhar] = useState(null)
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
    
       
    
        const fetchData = () => {
          try {
            const storedData = localStorage.getItem('aadhar');
            if (storedData) {
              const parsedData = JSON.parse(storedData);
              console.log('Parsed Aadhar Data:', parsedData);
              setAadhar(Array.isArray(parsedData) ? parsedData : [parsedData]);
            } else {
              setError('No aadhar data found in storage');
            }
          } catch (err) {
            console.error("Error parsing CV data:", err);
            setError('Failed to parse CV data');
          } finally {
            setLoading(false);
          }
        };
    
        fetchData();
      }, []);

      if (loading) {
        return (
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>Loading your CV data...</p>
          </div>
        );
      }
    
      
      if (error) {
        return (
          <div className="error-container">
            <h2><i className="fas fa-exclamation-circle"></i> Error</h2>
            <p>{error}</p>
            <button className="retry-button" onClick={() => window.location.reload()}>
              <i className="fas fa-redo"></i> Retry
            </button>
          </div>
        );
      }

      if (!aadhar) {
        return (
          <div className="no-data-container">
            <h2><i className="fas fa-file-alt"></i> No aadhar Data Available</h2>
            <p>Please upload your aadhar to see the details.</p>
          </div>
        );
      }
  return (
    <div className="aadhar-container">
      {Array.isArray(aadhar) && aadhar.map((item, index) => (
        <div key={index} className="aadhar-item">
          <h3>Document Identifier:-{item.label}</h3>
        </div>
      ))}
    </div>
  )
}

export default Aadhar
