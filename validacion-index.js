function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var numero = document.getElementById('numero').value;
    var texto = document.getElementById('texto').value;

    if (name == "" || email == "" || numero == "" || texto == "") {
        mostrarError('Tdos los campos son obligatorios');
        return false;
    }
    
    mostrarCorrecto('Mensaje enviado correctamente!')
}

function mostrarError(mensaje){
    const error = document.createElement('P');
    error.textContent = mensaje;
    error.classList.add('error');
    formulario.appendChild(error);

    setTimeout(() => {
        error.remove();
    }, 3000);
};

function mostrarCorrecto(mensaje){
    const correcto = document.createElement('P');
    correcto.textContent = mensaje;
    correcto.classList.add('correcto');
    formulario.appendChild(correcto);

    setTimeout(() => {
        correcto.remove();
    }, 3000);
};

