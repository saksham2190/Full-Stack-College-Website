import React from "react";
import "./Mcourses.css";
import { FaRobot, FaCode, FaCloud, FaShieldAlt } from "react-icons/fa";

const Mcourses = () => {
  const cards = [
    {
      icon: <FaRobot size={40} />,
      title: "AI + Data",
      desc:
        "Work smarter (not harder) with artificial intelligence and keep up in this rapidly growing tech field.",
    },
    {
      icon: <FaCode size={40} />,
      title: "Software Dev",
      desc:
        "Build fluency in languages like C#, Java, Angular, and JavaScript and keep evolving as you develop efficiently.",
    },
    {
      icon: <FaCloud size={40} />,
      title: "Cloud + IT Ops",
      desc:
        "From AWS to Google Cloud, expand your cloud skillset for real-world professional opportunities.",
    },
    {
      icon: <FaShieldAlt size={40} />,
      title: "Security",
      desc:
        "Stop cyber attacks in their tracks and position yourself as an expert at keeping data secure.",
    },
  ];

  return (
    <div className="mcourses-container">
      {cards.map((c, i) => (
        <div className="mcourses-card" key={i}>
          <div className="mcourses-icon">{c.icon}</div>
          <h3>{c.title}</h3>
          <p>{c.desc}</p>
          <a href="#" className="mcourses-link">
            Find out how →
          </a>
        </div>
      ))}
    </div>
  );
};

export default Mcourses;

