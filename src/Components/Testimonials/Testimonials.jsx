
import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.jpg'
import user_2 from '../../assets/user-2.jpg'
import user_3 from '../../assets/user-3.jpg'
import user_4 from '../../assets/user-4.jpg'


const Testimonials = ()=> {

    const slider = useRef();
    let tx = 0;
    
    const slideForward = ()=>{
        if(tx > -50){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }
    const slideBackward = ()=>{
        if(tx < 0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }

  return (  
    <div className='testimonials'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>Dr. Devesh Kumar Singh</h3>
                                <span>Chairman</span>
                            </div>
                        </div>
                        <p>Welcome to NIU - it is the start of a new life and career ahead. I wish you all the best and through your year with Noida International University we hope that you put your best foot forward from this moment… </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt="" />
                            <div>
                                <h3>Dr. Vikram Singh</h3>
                                <span>Chancellor</span>
                            </div>
                        </div>
                        <p>It is my proud privilege to welcome you in the largest lush green University campus in the N.C.R. area. Over the years, Noida International University has become synonymous to quality education and student friendly environment… </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt="" />
                            <div>
                                <h3>Dr. Uma Bhardwaj</h3>
                                <span>Vice Chancellor</span>
                            </div>
                        </div>
                        <p>With our country’s fast-paced advancement in the education sector, the need for such institutions has increased that can not only provide students with education relevant to the current industry norms but also produce skilled… </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt="" />
                            <div>
                                <h3>Dr. Mukesh Parashar</h3>
                                <span>Registrar</span>
                            </div>
                        </div>
                        <p>Dr. Mukesh Parashar, Registrar of the university, has done his Ph.D. in Management, MBA in HR.Dr. Parashar has a total of 35+ years of experience in the industry and academia, where he worked for 16+ years with various… </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials