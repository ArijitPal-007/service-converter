import React from "react";
import "./ServiceOne.css";
import { useNavigate } from "react-router-dom";
import { FaFileUpload, FaFileAlt, FaArrowRight } from "react-icons/fa";

function ServiceOne() {
  const navigation = useNavigate();

  const handleClick = () => {
    navigation("/api/service/upload-cv");
  };

  return (
    <div className="main container">
      <h1>Welcome To Our Services</h1>
      <div className="first row">
        <div>
          <h3>
            <FaFileUpload /> CV Upload
          </h3>
          <p>
            Transform your CV into a professional format with our advanced template
            system.
          </p>
          <p>
            <FaFileAlt /> Upload your CV in PDF format and let our system extract
            and format your information automatically.
          </p>
          <button onClick={handleClick}>
            Get Started <FaArrowRight />
          </button>
        </div>
        <div>
          <h3>
            <FaFileAlt /> Resume Builder
          </h3>
          <p>
            Create a stunning resume from scratch using our professional templates
            and expert guidance.
          </p>
          <p>
            Choose from multiple industry-specific templates and customize to your
            needs.
          </p>
          <button onClick={handleClick}>
            Create Resume <FaArrowRight />
          </button>
        </div>
        <div>
          <h3>
            <FaFileUpload /> Cover Letter
          </h3>
          <p>
            Generate a compelling cover letter that matches your resume and
            highlights your strengths.
          </p>
          <p>
            Our AI-powered system helps you create personalized cover letters for
            any position.
          </p>
          <button onClick={handleClick}>
            Write Cover Letter <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ServiceOne;
