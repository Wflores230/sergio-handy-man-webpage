import React from 'react';
import '../App.css'
import { Button } from './Button';
import './Background.css';

function Background() {
  return (
    <div className='background-container'>
        <video src='/videos/videos-2.mp4'></video>
        <h1>Sergio's Handyman Services</h1>
        <p>We can help with anything</p>
        <div className='background-btns'>
            <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
            >
                Get Started
            </Button>
        </div>


    </div>
  )
}

export default Background