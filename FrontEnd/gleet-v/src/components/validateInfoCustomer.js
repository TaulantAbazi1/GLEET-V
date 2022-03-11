
export default function validateInfoContact(values) {
    let errors = {};

    if(!values.emri) {
        errors.emri = 'Ju lutem shenoni emrin tuaj';
    }

    if (!values.mbiemri){
        errors.mbiemri = "Ju lutem shenoni mbiemrin";
    }
    if (!values.mesazhi){
        errors.mesazhi='Ju lutem shkruani nje mesazh'
    }else if (values.mesazhi.length<50){
        errors.mesazhi='Ju duhet te shkruani me shume se 50 karaktere'
    }
    if (!values.phone){
        errors.phone='Ju lutem shenoni numrin e telefonit'
    }


    return errors;
}