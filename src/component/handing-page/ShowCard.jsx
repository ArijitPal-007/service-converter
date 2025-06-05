import React from "react";
import "./ShowCard.css";
import { useNavigate } from "react-router-dom";
import { FaFileAlt, FaIdCard, FaFileContract, FaFileInvoiceDollar, FaBrain,FaBeer  } from "react-icons/fa";
import ServiceCard from "../Home/serviceCard";
import chatgpt from "../../assets/chatgpt.png"
import gemini from "../../assets/gemini.png"
import classification from "../../assets/classification.png"
import analyser from "../../assets/search.png"
import extraction from "../../assets/extraction.png"
import cvscorer from "../../assets/cvscorer.png"
import text from "../../assets/text.png"

const cardData = [
  {
    id: 1,
    title: "CV Summary",
    image: chatgpt,
    description:
      "Create professional CVs with our easy-to-use template system. Get expert tips and formatting suggestions to make your CV stand out to employers.",
    icon: <FaFileAlt />,
    route: "/api/service",
  },
  {
    id: 2,
    title: "Document Analyzer",
    image:analyser,
    description:
      "Upload and analyze your documents for accuracy and completeness. Get instant feedback and suggestions to improve your document quality.",
      icon: <FaIdCard />,
      route: "/api/service2",
  },
  {
    id: 3,
    title: "CV Summary",
    image: gemini,
    description:
      "Create professional CVs with our easy-to-use template system. Get expert tips and formatting suggestions to make your CV stand out to employers.",
      icon: <FaFileAlt />,
      route: "/api/service3",
  },
  {
    id: 4,
    title: "Document Extraction",
    image:extraction,
    description:
      "Extract and analyze information from various documents including Aadhaar, PAN, and Cheque. Get accurate data extraction with AI-powered technology.",
      icon: <FaIdCard />,
      route: "/api/service4",
  },
  {
    id: 5,
    title: "Document Classification",
    image:classification,
    description:
      "Extract and analyze information from various documents including Aadhaar, PAN, and Cheque. Get accurate data extraction with AI-powered technology.",
      icon: <FaIdCard />,
      route: "/api/service5",
  },
  {
    id: 6,
    title: "Cv Score Check",
    image:cvscorer,
    description:
      "Automatically extract and evaluate key information from resumes. Score CVs based on skills, experience, and relevance using AI-powered analysis.",
      icon: <FaFileAlt />,
      route: "/api/service6",
  },
  {
    id: 7,
    title: "Document To Text",
    image:text,
    description:
      "Automatically extract and evaluate key information from resumes. Score CVs based on skills, experience, and relevance using AI-powered analysis.",
      icon: <FaFileAlt />,
      route: "/api/service7",
  },
  
];

function ShowCard() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="header-section">
        <div className="logo-container">
          <div className="logo-icon">
            <FaBrain className="brain-icon" />
            <FaFileAlt className="file-icon" />
          </div>
          <h2 className="logo-text">DocAI</h2>
        </div>
        <h1>Transform Your Documents with AI-Powered Solutions</h1>
        <p className="service-description">
          Experience the future of document processing with our suite of intelligent tools. 
          From CV analysis to document extraction, our AI-powered solutions help you work smarter, 
          not harder. Choose a service below to get started.
        </p>
      </div>
      <div className="card-row">
        {cardData.map((card) => {
          return (
            <ServiceCard 
              key={card.id}
              {...card} 
              navigate={() => navigate(card.route)} 
            />
          );
        })}
      </div>
    </div>
  );
}

export default ShowCard;
