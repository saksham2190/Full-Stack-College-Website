import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  // Listen for messages from iframe (for auto-close after login)
  useEffect(() => {
    const handleMessage = (e) => {
      if (e.data === 'login-success') {
        setShowModal(false);
        //store token from iframe
        if (e.token) localStorage.setItem('token', e.token);
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <>
      <div className='hero container'>
        <div className="hero-text">
          <h2>
            <button className='button' onClick={() => setShowModal(true)}>
              Apply For
              <div className="star-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53">
                  <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0"></path>
                </svg>
              </div>
              <div className="star-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53">
                  <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0"></path>
                </svg>
              </div>
            </button>
          </h2>
          <h1>NOIDA INTERNATIONAL UNIVERSITY</h1>
          <p>"Transform vision into reality with progressive, forward-thinking education that prepares you for a changing world."</p>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <>
          {/* Blur overlay */}
          <div className="page-blur" onClick={() => setShowModal(false)}></div>

          {/* Modal content */}
          <div className="modal-content">
            <iframe
              src="/Niu_Login_Sign_up/frontend/index.html"
              title="NIU Login Signup"
              width="600"
              height="700"
              style={{ border: 'none' }}
            ></iframe>
            <button className="modal-close" onClick={() => setShowModal(false)}>X</button>
          </div>
        </>
      )}
    </>
  );
};

export default Hero;

