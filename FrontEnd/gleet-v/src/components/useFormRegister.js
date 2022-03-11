


import { useState, useEffect } from 'react';

const useFormRegister = validate => {
  const [values, setValues] = useState({
    Emri: '',
    Mbiemri: '',
    Perdoruesi: '',
    Email: '',
    Fjalekalimi: '',
    KonfirmoFjalekalimin: '',
    
  });
  const [errors, setErrors] = useState({});
 
  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validate(values));
    
  };



  return { handleChange, handleSubmit, values, errors };
};

export default useFormRegister;