

import React from 'react';
import validate from './validateInfo';
import useForm from './Useform';
import './Form.css';

const FormLogin = () => {
  const { handleChange, handleSubmit, values, errors } = useForm(validate);

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
         Login today to start!
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Perdoruesi</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Perdoruesi'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Fjalekalimi</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Sheno Fjalekalimin'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <button className='form-input-btn' type='submit'>
          Login
        </button>
        <span className='form-input-login'>
          Nuk keni llogari?  <a href='sign-up'>Regjistrohu ketu</a>
        </span>
      </form>
    </div>
  );
};

export default FormLogin;