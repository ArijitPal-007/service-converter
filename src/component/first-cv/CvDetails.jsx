import React, { useEffect, useState } from 'react';
import './CvDetails.css';

function CvDetails() {
  const [cvData, setCvData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Add Font Awesome CDN
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css';
    document.head.appendChild(link);

    const fetchData = () => {
      try {
        const storedData = localStorage.getItem('cvData');
        if (storedData) {
          const parsedData = JSON.parse(storedData);
          setCvData(parsedData);
        } else {
          setError('No CV data found in storage');
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

  if (!cvData) {
    return (
      <div className="no-data-container">
        <h2><i className="fas fa-file-alt"></i> No CV Data Available</h2>
        <p>Please upload your CV to see the details.</p>
      </div>
    );
  }

  return (
    <div className="cv-details-container">
      <header className="cv-header">
        <h1><i className="fas fa-file-alt"></i> Curriculum Vitae</h1>
        <div className="header-decoration"></div>
      </header>
      
      <main className="cv-content">
        <section className="personal-info-section">
          <h2 className="section-title"><i className="fas fa-user"></i> Personal Information</h2>
          <div className="info-grid">
            <div className="info-item">
              <span className="info-label"><i className="fas fa-user-circle"></i> Name:</span>
              <span className="info-value">{cvData.data.name || "N/A"}</span>
            </div>
            <div className="info-item">
              <span className="info-label"><i className="fas fa-briefcase"></i> Job Role:</span>
              <span className="info-value">{cvData.data.jobRole || "N/A"}</span>
            </div>
            <div className="info-item">
              <span className="info-label"><i className="fas fa-phone"></i> Phone:</span>
              <span className="info-value">{cvData.data.phone_numbers?.join(", ") || "N/A"}</span>
            </div>
            <div className="info-item">
              <span className="info-label"><i className="fas fa-envelope"></i> Email:</span>
              <span className="info-value">{cvData.data.emails?.join(", ") || "N/A"}</span>
            </div>
            <div className="info-item">
              <span className="info-label"><i className="fas fa-map-marker-alt"></i> Address:</span>
              <span className="info-value">{cvData.data.address || "N/A"}</span>
            </div>
            <div className="info-item">
              <span className="info-label"><i className="fas fa-birthday-cake"></i> Date of Birth:</span>
              <span className="info-value data">{cvData.data.date_of_birth || "N/A"}</span>
            </div>
          </div>
        </section>

        <section className="skills-section">
          <h2 className="section-title"><i className="fas fa-tools"></i> Skills</h2>
          <div className="skills-container">
            {cvData.data.skills ? (
              typeof cvData.data.skills === 'string' ? (
                <p>{cvData.data.skills}</p>
              ) : (
                <ul className="skills-list">
                  {cvData.data.skills.map((skill, index) => (
                    <li key={index} className="skill-item">
                      <i className="fas fa-check-circle"></i> {skill}
                    </li>
                  ))}
                </ul>
              )
            ) : (
              <p>No skills listed</p>
            )}
          </div>
        </section>

        {cvData.data.education?.length > 0 && (
          <section className="education-section">
            <h2 className="section-title"><i className="fas fa-graduation-cap"></i> Education</h2>
            <div className="timeline">
              {cvData.data.education.map((edu, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h3 className="institute"><i className="fas fa-university"></i> {edu.institute}</h3>
                    <p className="degree"><i className="fas fa-award"></i> {edu.degree}</p>
                    <div className="education-details">
                      <span className="detail-item">
                        <i className="fas fa-calendar"></i> <strong>Year:</strong> {edu.end_year || "N/A"}
                      </span>
                      <span className="detail-item">
                        <i className="fas fa-star"></i> <strong>Score:</strong> {edu.score || "N/A"}
                      </span>
                      {edu.currently_pursuing && (
                        <span className="detail-item currently-pursuing">
                          <i className="fas fa-spinner fa-spin"></i> Currently Pursuing
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="experience-section">
          <h2 className="section-title"><i className="fas fa-briefcase"></i> Professional Experience</h2>
          <div className="experience-summary">
            <p><i className="fas fa-clock"></i> <strong>Total Experience:</strong> {cvData.data.total_work_experience || "N/A"}</p>
          </div>
          {cvData.data.experience && (
            <div className="experience-details">
              {typeof cvData.data.experience === 'string' ? (
                <p>{cvData.data.experience}</p>
              ) : (
                <ul className="experience-list">
                  {Array.isArray(cvData.data.experience) ? (
                    cvData.data.experience.map((exp, index) => (
                      <li key={index} className="experience-item">
                        <i className="fas fa-angle-right"></i> {exp}
                      </li>
                    ))
                  ) : (
                    <li className="experience-item"><i className="fas fa-angle-right"></i> {cvData.data.experience}</li>
                  )}
                </ul>
              )}
            </div>
          )}
        </section>

        {cvData.data.certifications && (
        <section className="certifications-section">
          <h2 className="section-title"><i className="fas fa-certificate"></i> Certifications</h2>
          <div className="certifications-container">
            {Array.isArray(cvData.data.certifications) ? (
              <ul className="certifications-list">
                {cvData.data.certifications.map((cert, index) => (
                  <li key={index} className="certification-item">
                    <div><i className="fas fa-medal"></i> Name: {cert.certification_name || "N/A"}</div>
                    <div><i className="fas fa-building"></i> Source: {cert.certification_source || "N/A"}</div>
                    <div><i className="fas fa-calendar"></i> Date: {cert.certification_date || "N/A"}</div>
                  </li>
                ))}
              </ul>
            ) : (
              <p>{cvData.data[0].certifications}</p>
            )}
          </div>
        </section>
      )}



<section className="referre-section">
  <h2 className="section-title"><i className="fas fa-user-friends"></i> Referee Details</h2>
  {Array.isArray(cvData.data.referre_details) && cvData.data.referre_details.length > 0 ? (
    <ul className="referre-list">
      {cvData.data[0].referre_details.map((ref, index) => (
        <li key={index} className="referre-item">
          <div><i className="fas fa-user"></i> Name: {ref.name || "N/A"}</div>
          <div><i className="fas fa-briefcase"></i> Position: {ref.position || "N/A"}</div>
          <div><i className="fas fa-building"></i> Company: {ref.company || "N/A"}</div>
          <div><i className="fas fa-phone"></i> Phone: {ref.phone || "N/A"}</div>
          <div><i className="fas fa-envelope"></i> Email: {ref.email || "N/A"}</div>
        </li>
      ))}
    </ul>
  ) : (
    <p>N/A</p>
  )}
</section>

        {cvData.data.summary && (
          <section className="summary-section">
            <h2 className="section-title"><i className="fas fa-file-alt"></i> Professional Summary</h2>
            <div className="summary-content">
              <p><i className="fas fa-quote-left"></i> {cvData.data.summary}</p>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

export default CvDetails;