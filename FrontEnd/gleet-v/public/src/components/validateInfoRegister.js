
export default function validateInfoRegister(values) {
    let errors = {};

    if(!values.Emri) {
        errors.Emri = 'Ju lutem shenoni Emrin';
    }
    if(!values.Mbiemri) {
        errors.Mbiemri = 'Ju lutem shenoni Mbiemrin';
    }
    if(!values.Perdoruesi) {
        errors.Perdoruesi = 'Ju lutem shenoni emrin e perdoruesit';
    }else if(values.Perdoruesi.length<3){
      errors.Perdoruesi='Ju lutem shenoni me shume se 3 shkronja'
    }
    
    if(!values.Emri) {
        errors.Emri = 'Ju lutem shenoni Emrin';
    }
    if (!values.Email) {
        errors.Email = 'Ju lutem shenoni Email-en';
      } else if (!/\S+@\S+\.\S+/.test(values.Email)) {
        errors.Email = 'Emaili eshte gabim';
      }
    if (!values.Fjalekalimi){
        errors.Fjalekalimi = "Ju lutem shenoni fjalekalimin";
    }else if (values.Fjalekalimi.length<7){
        errors.Fjalekalimi = "Fjalekalimi eshte gabim";
    }

    if (!values.KonfirmoFjalekalimin) {
        errors.KonfirmoFjalekalimin = 'Ju lutem shenoni Fjalekalimin';
      } else if (values.KonfirmoFjalekalimin !== values.Fjalekalimi) {
        errors.KonfirmoFjalekalimin = 'Ju lutem shenoni fjalekalimin e njejte';
      }

    return errors;
}