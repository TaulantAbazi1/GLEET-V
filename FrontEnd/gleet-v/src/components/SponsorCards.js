import React from 'react';
import './SponsorCard.css';
import ContactItem from './SponsorItem';

function SponsorCards() {
  return (
    <div className='cards'>
      <h1>Sponzorat tanë</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <ContactItem
              src='images/Shell.jpg'
              text='SHELL - Sponzor zyrtarë i joni'
              label='GLEET-V'
              path='/contactform'
            />
            <ContactItem
              src='images/smart.jpg'
              text='Smart - Sponzor zyrtarë i joni'
              label='GLEET-V'
              path='/formcustomer'
            />
          </ul>
          <ul className='cards__items'>
            <ContactItem
              src='images/ecocar.jpg'
              text='EcoCar - Sponzor zyrtarë i joni'
              label='GLEET-V'
              path='/services'
            />
            <ContactItem
              src='images/kfc.jpg'
              text='KFC - Sponzor zyrtarë i joni'
              label='GLEET-V'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SponsorCards;