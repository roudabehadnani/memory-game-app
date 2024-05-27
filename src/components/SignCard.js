import React from 'react'
import "./SignCard.css";


function SignCard() {
  return (
    <div className='signCard'>
        <div className='innerCard'>
            <div className='frontCard'>
                <div className='title'>Roudabeh Ad</div>
                <p>Developer</p>
            </div>
            <div className='backCard'>
                <div className='title'>Roudabeh Ad</div>
                <a href="https://github.com/roudabehadnani" target="_blank">Github🤖</a>
            </div>
        </div>
    </div>
  )
}

export default SignCard