// Validación de formulario
const validarFormulario = (event) => {
    const firstname = document.querySelector("#firstname");
    const lastname = document.querySelector("#lastname");
    const email = document.querySelector("#email");
    const birthdate = document.querySelector("#birthdate");

    let validation = true;
    if(!firstname.value.trim()){
        firstname.classList.add('error')
        document.querySelector("#error-firstname").textContent='Debe completar Nombre';
        validation=false;
    }
    if(!lastname.value.trim()){
        document.querySelector("#error-lastname").textContent='Debe completar Apellido';
        lastname.classList.add('error')
        validation=false;
    }
    if(!email.value.trim()){
        document.querySelector("#error-email").textContent='Debe completar Email';
        email.classList.add('error')
        validation=false;
    }
    if(!birthdate.value.trim()){
        document.querySelector("#error-birthdate").textContent='Debe completar Fecha de Nacimiento';
        password.classList.add('error')
        validation=false;
    }
    if(validation){
        formRegister.submit()
    }
}
formRegister.addEventListener('submit',validarFormulario);
