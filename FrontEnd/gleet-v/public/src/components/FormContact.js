import React from 'react';
import validate from './validateInfoContact';
import useFormContact from './UseFormContact';
import './FormC.css';

const FormContact = () => {
  const { handleChange, handleSubmit, values, errors } = useFormContact(validate);

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
         Na Kontaktoni
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Emri</label>
          <input
            className='form-input'
            type='text'
            name='emri'
            placeholder='Emri juaj...'
            value={values.emri}
            onChange={handleChange}
          />
            {errors.emri && <p>{errors.emri}</p>}
         
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Emaili</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Emaili juaj...'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>

        <div className='form-inputs'>
          <label className='form-label'>Mesazhi</label>
          <br></br>
          <textarea type="text" className="form-text-area" placeholder="Mesazhi juaj..."
          ></textarea>
       
          
        </div>

        <button className='form-input-btn' type='submit'>
          Dergoni
        </button>
      </form>
    </div>
  );
};

export default FormContact;