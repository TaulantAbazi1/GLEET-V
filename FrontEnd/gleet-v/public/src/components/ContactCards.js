import React from 'react';
import './CustomerSupport.css';
import ContactItem from './ContactItem';

function ContactCards() {
  return (
    <div className='cards'>
      <h1>Na kontaktoni përmes këtyre opsioneve:</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <ContactItem
              src='images/Kontakti.jpg'
              text='Na kontaktoni përmes formës sonë "Contact US"'
              label='GLEET-V'
              path='/contactforms'
            />
          </ul>
          <ul className='cards__items'>
            <ContactItem
              src='images/CustomerSupport.jpg'
              text='Kontaktoni me agjentin tonë përmes "Customer Support"'
              label='GLEET-V'
              path='/formcustomer'
            />
          </ul>
          <ul className='cards__items'>
            <ContactItem
              src='images/ZyretTona.jpg'
              text='Na vizitoni në zyrat tona për më shumë informacione...'
              label='GLEET-V'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ContactCards;