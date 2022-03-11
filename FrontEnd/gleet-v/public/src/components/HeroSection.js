import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-3.mp4' autoPlay loop muted />
      <h1>GLEET-V</h1>
      <p>REZERVO NJË MAKINË ONLINE</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          REGJISTROHU DHE REZERVO!
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          MESO SI <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;