import React from 'react'
import { useNavigate } from 'react-router-dom'

function CallToAction() {
  const navigate = useNavigate()
  return (
    <div className="calltoaction-con">
      <div className="calltoaction">
        <h1>Enouph talk, let's get to work</h1>
        <a href={'/contact'} style={{textDecoration:'none', color:"black"}}><button className="btn">Get in touch</button></a>
      </div>
    </div>
  )
}

export default CallToAction
