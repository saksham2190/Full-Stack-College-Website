import React from 'react'
import './Campus.css'
import gallery1 from '../../assets/gallery_1.jpg'
import gallery2 from '../../assets/gallery_2.jpg'
import gallery3 from '../../assets/gallery_3.jpg'
import gallery4 from '../../assets/gallery_4.jpg'
import gallery5 from '../../assets/gallery_5.jpg'
import gallery6 from '../../assets/gallery_6.jpg'

const Campus = () => {
  const handleVirtualTour = () => {
    window.open('https://niu.edu.in/files/virtualtour/', '_blank');
  };
  return (
    <div className='campus'>
      <div className="gallery-column top">
        <img src={gallery1} alt="" />
        <img src={gallery2} alt="" />
        <img src={gallery3} alt="" />
      </div>
      <div className="gallery-column bottom">
        <img src={gallery4} alt="" />
        <img src={gallery5} alt="" />
        <img src={gallery6} alt="" />
      </div>
      <button className='btn virtual' onClick={handleVirtualTour}>Virtual Tour</button>
    </div>
  )
}

export default Campus