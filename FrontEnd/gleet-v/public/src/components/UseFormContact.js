import { useState, useEffect } from 'react';

const useFormContact = validate => {
  const [values, setValues] = useState({
    emri: '',
    email: '',

    
    
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

export default useFormContact;