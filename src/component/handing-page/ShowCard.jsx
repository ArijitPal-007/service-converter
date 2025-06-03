import React from "react";
import "./ShowCard.css";
import { useNavigate } from "react-router-dom";
import { FaFileAlt, FaIdCard, FaFileContract, FaFileInvoiceDollar } from "react-icons/fa";
import ServiceCard from "../Home/serviceCard";
import chatgpt from "../../assets/chatgpt.png"
import gemini from "../../assets/gemini.png"

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
    description:
      "Upload and analyze your documents for accuracy and completeness. Get instant feedback and suggestions to improve your document quality.",
    icon: <FaFileContract />,
    route: "/api/service2",
  },
  {
    id: 3,
    title: "CV Generator",
    image: gemini,
    description:
      "Create professional CVs with our easy-to-use template system. Get expert tips and formatting suggestions to make your CV stand out to employers.",
    icon: <FaIdCard />,
    route: "/api/service3",
  },
  {
    id: 4,
    title: "Document Extraction",
    description:
      "Extract and analyze information from various documents including Aadhaar, PAN, and Cheque. Get accurate data extraction with AI-powered technology.",
    icon: <FaFileInvoiceDollar />,
    route: "/api/service4",
  },
  {
    id: 5,
    title: "Document Extraction",
    description:
      "Extract and analyze information from various documents including Aadhaar, PAN, and Cheque. Get accurate data extraction with AI-powered technology.",
    icon: <FaFileInvoiceDollar />,
    route: "/api/service5",
  },
];

function ShowCard() {
  const navigate = useNavigate();

  return (
    <div className="container">
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
