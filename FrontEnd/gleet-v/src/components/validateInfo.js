


export default function validateInfo(values) {
    let errors = {};

    if(!values.username) {
        errors.username = 'Ju lutem shenoni Emrin e Perdoruesit';
    }

    if (!values.password){
        errors.password = "Ju lutem shenoni fjalekalimin";
    }else if (values.password.length<7){
        errors.password = "Fjalekalimi eshte gabim";
    }

    return errors;
}