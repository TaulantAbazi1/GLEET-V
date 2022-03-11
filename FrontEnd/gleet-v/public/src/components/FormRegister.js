


import React from 'react';
import validate from './validateInfoRegister';
import useFormRegister from './useFormRegister';
import './Form.css';

const FormRegister = () => {
  const { handleChange, handleSubmit, values, errors } = useFormRegister(validate);

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
         Register today to start!
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Emri</label>
          <input
            className='form-input'
            type='text'
            name='Emri'
            placeholder='Shenoni emrin'
            value={values.Emri}
            onChange={handleChange}
          />
          {errors.Emri && <p>{errors.Emri}</p>}
        </div>

        <div className='form-inputs'>
          <label className='form-label'>Mbiemri</label>
          <input
            className='form-input'
            type='text'
            name='Mbiemri'
            placeholder='Shenoni mbiemrin'
            value={values.Mbiemri}
            onChange={handleChange}
          />
          {errors.Mbiemri && <p>{errors.Mbiemri}</p>}
        </div>
        
        <div className='form-inputs'>
          <label className='form-label'>Perdoruesi</label>
          <input
            className='form-input'
            type='text'
            name='Perdoruesi'
            placeholder='Perdoruesi'
            value={values.Perdoruesi}
            onChange={handleChange}
          />
          {errors.Perdoruesi && <p>{errors.Perdoruesi}</p>}
        </div>
 
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='Email'
            placeholder='Sheno Email-in'
            value={values.Email}
            onChange={handleChange}
          />

          {errors.Email && <p>{errors.Email}</p>}
        </div>

        <div className='form-inputs'>
          <label className='form-label'>Fjalekalimi</label>
          <input
            className='form-input'
            type='password'
            name='Fjalekalimi'
            placeholder='Sheno Fjalekalimin'
            value={values.Fjalekalimi}
            onChange={handleChange}
          />

          {errors.Fjalekalimi && <p>{errors.Fjalekalimi}</p>}
        </div>

        
        <div className='form-inputs'>
          <label className='form-label'>Konfirmo fjalekalimin</label>
          <input
            className='form-input'
            type='password'
            name='KonfirmoFjalekalimin'
            placeholder='Konfirmo Fjalekalimin'
            value={values.KonfirmoFjalekalimin}
            onChange={handleChange}
          />

          {errors.KonfirmoFjalekalimin && <p>{errors.KonfirmoFjalekalimin}</p>}
        </div>

        <button className='form-input-btn' type='submit'>
          Register
        </button>

        <span className='form-input-login'>
          Ju tashme keni llogari? <a href='sign-in'>Kycuni ketu</a>
        </span>

      </form>
    </div>
  );
};

export default FormRegister;