import React from 'react';
import validate from './validateInfoCustomer';
import useFormCustomer from './UseFormCustomer';
import './CustomerSupport.css';

const FormCustomer = () => {
  const { handleChange, handleSubmit, values, errors } = useFormCustomer(validate);

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
         Na lini numrin tuaj të telefonit dhe njëri nga agjentët tonë do të ju kontaktojë
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
          <label className='form-label'>Mbiemri</label>
          <input
            className='form-input'
            type='text'
            name='mbiemri'
            placeholder='Mbiemri juaj...'
            value={values.mbiemri}
            onChange={handleChange}
          />
          {errors.mbiemri && <p>{errors.mbiemri}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Mesazhi</label>
          <br></br>
          <input
            className='form-input'
            type='text'
            name='mesazhi'
            placeholder='Jepni nje mesazh'
            value={values.mesazhi}
            onChange={handleChange}
          />
          {errors.mesazhi && <p>{errors.mesazhi}</p>}
        </div>
        

        <div className='form-inputs'>
          <label className='form-label'>Numri i telefonit</label>
          <br></br>
          <input
            className='form-input'
            type='phone'
            name='phone'
            placeholder='Numri juaj i telefonit...'
            value={values.phone}
            onChange={handleChange}
          />
          {errors.phone && <p>{errors.phone}</p>}
          <label className='form-label'>Numri duhet të jetë në këte format: (+383) 4X-XXX-XXX</label>
        </div>

        <button className='form-input-btn' type='submit'>
          Dergoni
        </button>
      </form>
    </div>
  );
};

export default FormCustomer;