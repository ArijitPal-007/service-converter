import React from "react";
import "./ShowCard.css";
import { useNavigate } from "react-router-dom";
import { FaFileAlt, FaIdCard, FaFileContract } from "react-icons/fa";
import ServiceCard from "../Home/serviceCard";

const cardData = [
  {
    id: 1,
    title: "CV Summary",
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
    description:
      "Create professional CVs with our easy-to-use template system. Get expert tips and formatting suggestions to make your CV stand out to employers.",
    icon: <FaIdCard />,
    route: "/api/service3",
  },
];

function ShowCard() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="card-row">
        {cardData.map((card) => {
          return (
            <ServiceCard {...card} navigate={() => navigate(card.route)} />
          );
        })}
      </div>
    </div>
  );
}

export default ShowCard;
