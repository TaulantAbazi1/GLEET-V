
export default function validateInfoContact(values) {
    let errors = {};

    if(!values.emri) {
        errors.emri = 'Ju lutem shenoni emrin tuaj';
    }

    if (!values.email) {
        errors.email = 'Ju lutem shenoni Email-en';
      } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Emaili eshte gabim';
      }

    
    return errors;
}