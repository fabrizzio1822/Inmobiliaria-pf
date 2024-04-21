function disableEnterKey(e) {

    if (e.key === 'Enter') {
        e.preventDefault(); 
    }
}                       
document.getElementById('formulario').addEventListener('keydown', disableEnterKey);


const btnPart1Next = document.querySelector("#btn-part1-next");
btnPart1Next.addEventListener('click', () => {
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var telefono = document.getElementById('telefono').value;
    var email = document.getElementById('email').value;
    if (nombre == "" || apellido == "" || telefono == "" || email == "") {
        mostrarError('Todos los campos son obligatorios');
        return;
    };
    const part1 = document.querySelector("#part1");
    const part2 = document.querySelector("#part2");
    part1.style.display = "none";
    part2.style.display = "block";
    updateFormProgress(25);

});

const btnPart2Next = document.querySelector("#btn-part2-next");
btnPart2Next.addEventListener('click', () => {
    var accion = document.querySelector('select[name="accion"]').value;

    if (accion == "") {
        mostrarError('Selecciona una opción');
        return;
    }

    const part2 = document.querySelector("#part2");
    const part3 = document.querySelector("#part3");
    part2.style.display = "none";
    part3.style.display = "block";
    updateFormProgress(50);
});

const btnPart3Next = document.querySelector("#btn-part3-next");
btnPart3Next.addEventListener('click', () => {
    var localidad = document.getElementById('localidad').value;

    if (localidad == "") {
        mostrarError('Ingresa la localidad o barrio');
        return;
    }

    const part3 = document.querySelector("#part3");
    const part4 = document.querySelector("#part4");
    part3.style.display = "none";
    part4.style.display = "block";
    updateFormProgress(75);
});

const btnPart4Next = document.querySelector("#btn-part-4next");
btnPart4Next.addEventListener('click', () => {
    var tipo = document.querySelector('select[name="tipo"]').value;

    if (tipo == "") {
        mostrarError('Selecciona una opción');
        return;
    }
    const part4 = document.querySelector("#part4");
    const part5 = document.querySelector("#part5");
    part4.style.display = "none";
    part5.style.display = "block";
    updateFormProgress(100);
});

function updateFormProgress(progress) {
    const progressBar = document.querySelector('#progress');
    progressBar.style.width = `${progress}%`;
}

const modalBackround = document.getElementById('modal-backround');
const open = document.getElementById('open');
const modal_container = document.getElementById('modal-container');
const close = document.getElementById('close');
const header = document.getElementById('header');

open.addEventListener('click', () => {
    modalBackround.classList.add('modal-show');
    header.classList.add('navbar-show');
});

close.addEventListener('click', () => {
    modalBackround.classList.remove('modal-show');
    header.classList.remove('navbar-show');
});

const imagenPorIzquierda = document.getElementById('imagen-izquierda');
const imagenPorDerecha = document.getElementById('imagen-derecha');
const textoPorIzquierda = document.getElementById('texto-izquierda');
const textoPorDerecha = document.getElementById('texto-derecha');

function mostrarError(mensaje){
    const error = document.createElement('P');
    error.textContent = mensaje;
    error.classList.add('error-tasacion');
    formulario.appendChild(error);

    setTimeout(() => {
        error.remove();
    }, 2000);
};