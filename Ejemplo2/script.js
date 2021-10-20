console.log('Conexion...........');

const datos = {
    nombre : '',
    email : '',
    mensaje : ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');

nombre.addEventListener('input',leerTexto);
email.addEventListener('input',leerTexto);
mensaje.addEventListener('input',leerTexto);

function leerTexto(e){
    datos[e.target.id] = e.target.value;
    // console.log(datos);
}


const formulario = document.querySelector('.formulario');
formulario.addEventListener('submit', function(evento){
    evento.preventDefault();
    const {nombre, email, mensaje} = datos;
    console.log(nombre,email,mensaje);

    // validar la informacion

    if (nombre==="" || email==="" || mensaje===""){
            alert("Debe diligenciar todos los datos - Obligatoirio")
    }

    //  enviar el formulario
})





// const nombre = document.querySelector('.text');
// console.log(nombre);
// nombre.addEventListener('input', function(evento){
//     console.log('Escribiendo..............');
//     // console.log(evento);
//     // console.log(evento.target.value);
// })










// const btnEnviar = document.querySelector('.boton');
// btnEnviar.addEventListener('click', function(evento){
//     evento.preventDefault();
//     console.log(evento);
//     console.log('Enviando datos...........');

//     // validar los datos formulario

//     // enviar los datos
// })

// function mostrarAlerta(){
//     alert('Hizo clic');
// }

// function hacerClik(){
//     var lista = document.querySelector('#div1 p');
//     lista.onclick = mostrarAlerta;
//     console.log(lista);
// }

// window.onload = hacerClik;