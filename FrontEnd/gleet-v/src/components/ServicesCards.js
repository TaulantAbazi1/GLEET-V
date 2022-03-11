import React from 'react';
import './Cards.css';
import ServicesCardsItems from './ServicesCardsItems';


function ServicesCards() {
  return (
    <div className='cards'>
      <h1>Ja se si mund te beheni pjestar i joni :) </h1>
      <h5>Aplikimi eshte shume i lehte. Keni vetem 3 hapa, te cilet mund ti gjeni me poshte</h5>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <ServicesCardsItems
              src='images/register.png'
              text='Regjistrohuni'
              label='Click down below'
              path='/sign-up'
            />
            <ServicesCardsItems
              src='images/membership.png'
              text='Zgjidhni nje plan te antaresimit'
              label='Click down below'
              path='/niveliantaresimit'
            />
             <ServicesCardsItems
              src='images/zgjedhnimakinen.png'
              text='Zgjidhni nje makine'
              label='Click down below'
              path='/products'
            />
          </ul>
          
          <ul className='cards__items'>
            <ServicesCardsItems
              src='images/bin.png'
              text='Keep the car clean'
              label='Click down below'
              path='/services'
            />
            <ServicesCardsItems
              src='images/fuel.png'
              text='Fuel up'
              label='Click down below'
              path='/services'
            />
             <ServicesCardsItems
              src='images/time.png'
              text='Return on time'
              
              label='Click down below'
              path='/services'
            />
          </ul>

        </div>
      </div>
    </div>
  );
}

export default ServicesCards;