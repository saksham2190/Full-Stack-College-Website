import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Courses from './Components/Courses/Courses'
import Mcourses from './Components/Mcourses/Mcourses'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Collab from './Components/Collab/Collab'
import Approval from './Components/Approval/Approval'
import Hiring from './Components/Hiring/Hiring'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Video from './Components/VideoPlayer/Video'




const App = () => {

  const [playState, setPlaystate] = useState(false)
  
  

  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='OUR PROGRAM' title='WHAT WE OFFER'/>
        <Programs/>
        <About setPlaystate={setPlaystate}/>
        <Title subTitle='COURSES' title='FEATURED COURSES'/>
        <Courses/>
        <Title subTitle='COURSES' title='SPECIAL COURSES'/>
        <Mcourses/>
        <Title subTitle='GALLERY' title='75 ACRES CAMPUS'/>
        <Campus/>
        <Title subTitle='NIU LEADERSHIP' title='SUPREME GUIDANCE'/>
        <Testimonials/>
        <Title subTitle='COLLABORATIONS' title='INTERNATIONAL PARTNERS'/>
        <Collab/>
        <Title subTitle='AFFIRMATION' title='RECOGNITION & APPROVAL'/>
        <Approval/>
        <Title subTitle='Key Recruiters' title='Expert Hiring Consultants'/>
        <Hiring/>
        <Title subTitle='CONTACT US' title='LET US KNOW YOU'/>
        <Contact/>
        <Footer/>
      </div>
      <Video playState={playState} setPlayState={setPlaystate}/>
    </div>
  )
}

export default App
