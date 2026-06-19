import React, { useState } from 'react';
import './Courses.css';
import course_1 from "../../assets/gallery-1.jpg";
import course_2 from "../../assets/gallery-2.jpg";
import course_3 from "../../assets/gallery-3.jpg";
import course_4 from "../../assets/gallery-4.jpg";
import course_5 from "../../assets/gallery-5.jpg";
import white_arrow from "../../assets/dark-arrow.png"

const Courses = () => {
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(-1);
  };

  return (
    <div className='courses'>
      <div className="first-row">
        <div className="featured-courses" onMouseEnter={() => handleMouseEnter(0)} onMouseLeave={handleMouseLeave}>
          <img src={course_1} alt="c1" />
          <div className={`a1 ${hoveredIndex === 0 ? 'hovered' : ''}`}>
            <p>B.Tech</p>
          </div>
        </div>

        <div className="featured-courses" onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={handleMouseLeave}>
          <img src={course_2} alt="c2" />
          <div className={`a1 ${hoveredIndex === 1 ? 'hovered' : ''}`}>
            <p>MBBS</p>
          </div>
        </div>    

        <div className="featured-courses" onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={handleMouseLeave}>
          <img src={course_3} alt="c3" />
          <div className={`a1 ${hoveredIndex === 2 ? 'hovered' : ''}`}>
            <p>MBA</p>
          </div>
        </div>
      </div>

      <div className="second-row">
        <div className="featured-courses" onMouseEnter={() => handleMouseEnter(3)} onMouseLeave={handleMouseLeave}>
          <img src={course_4} alt="c4" />
          <div className={`a1 ${hoveredIndex === 3 ? 'hovered' : ''}`}>
            <p>LLB</p>
          </div>
        </div>

        <div className="featured-courses" onMouseEnter={() => handleMouseEnter(4)} onMouseLeave={handleMouseLeave}>
          <img src={course_5} alt="c5" /> 
          <div className={`a1 ${hoveredIndex === 4 ? 'hovered' : ''}`}>
            <p>Ph.D</p>
          </div>
        </div>
      </div>
    <div className="center-btn">
      <button className='btn dark-btn'>See More Here<img src={white_arrow} alt="" /></button>
      </div>
    </div>
  );
}

export default Courses;



