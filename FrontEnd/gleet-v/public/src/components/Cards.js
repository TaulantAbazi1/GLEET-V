import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Lagjet kryesore ku gjinden vendparkingjet</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Ulpiana'
              label='GLEET-V'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Dardania'
              label='GLEET-V'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Emshir'
              label='GLEET-V'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Lakrishte'
              label='GLEET-V'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Bregu i diellit'
              label='GLEET-V'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;