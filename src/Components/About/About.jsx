import React from 'react'
import './About.css'
import about_img from '../../assets/about.jpg'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img' />
            <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
        </div>
        <div className="about-right">
           <h3>ABOUT NIU</h3>
           <h2>Noida International University</h2>
           <p>established under U.P. LEGISLATURE ACT NO. 27 OF 2010 and recognized by Section 2(f) of the UGC Act, 1956, is proudly sponsored by the Maruti Educational Trust. Its expansive 75-acre campus, adorned with lush greenery and distinctive architectural designs, distinguishes it as a premier educational institution. Strategically positioned within the educational hub near the Yamuna Expressway in Gautam Budh Nagar, Greater Noida.</p>
           <p>NIU achieved recognition for its academic prowess by receiving the highest score of 3.44 out of 4 with Grade A+ in the first cycle of NAAC accreditation, outperforming all other private state universities in India. This honor was bestowed by the prestigious autonomous institution under the UGC, Ministry of Education, Government of India.
           NIU offers a diverse range of programs across 12 schools. These programs span Engineering, Management, Law, Medical, and Social Sciences, catering to the academic interests of students from over 60+ nations who place their trust in the university’s curriculum.</p>
           <p>Additionally, NIU houses a 750+ bedded Hospital and a Medical College named Noida International Institute of Medical Sciences (NIIMS), which is recognized as a Centre of Excellence. NIIMS is dedicated to developing a unique pedagogy for medical education, with a greater focus on a pragmatic approach that allows students to explore the deeper nuances of medical education.</p>
        </div>
    </div>
  )
}

export default About