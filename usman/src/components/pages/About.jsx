import React from 'react'
import './About.css';
import Wiz from '../../assets/star.jpg'
import Me from '../../assets/star1.jpg'

function About() {
  return (
    <div className='about'>

      <div className='Profile'>
        <div className="cover-pic">
            <img src={Me} className='cover' alt="Wizkid" />
        <img src={Wiz} className='wiz' alt="Wizkid" width={100}  />
          <span className='add'>+</span>
        </div>
        <div className="acct-info">
          <h3 className="name">Wizkidayo</h3>
          <button className='btn-follow'>Follow</button>
        </div>
        <div className="fans">
          <div className="post">
            <h3 className='title'>Post</h3>
            <h3 className='count'>35</h3>
          </div>

          <div className="followers">
            <h3 className='title'>Followers</h3>
            <h3 className='count'>9.7m</h3>
          </div>

          <div className="following">
            <h3 className='title'>following</h3>
            <h3 className='count'>720</h3>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About;
