import React from 'react'
import './Video.css'
import video from '../../assets/niu.mp4'



const Video = ({playState, setPlayState}) => {
  return (
    <div className={`video ${playState?'':'hide'}`}>
      <video src={video} autoPlay muted controls></video>
    </div>
  )
}

export default Video
 