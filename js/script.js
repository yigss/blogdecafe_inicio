// //     const heading = document.querySelector('.header__texto h2');
// //     console.log(heading);
// //     heading.textContent = 'sssss';

// //      const enlaces = document.querySelectorAll('.navegacion__enlace');
// //     console.log(heading);
// //    console.log(enlaces[0]);


// //generar nuevo enlace en 
// const nuevoElemento = document.createElement('A');
// //agregar href
// nuevoElemento.href= 'nuevo-enlace.html'
// //agreagar texto
// nuevoElemento.textContent= 'Nuevo enlace'
// //agregar clase ya exitente que contiente los estilos de CSS
// nuevoElemento.className= 'navegacion__enlace'
// //agregar al documento
// const navegacion = document.querySelector('.navegacion');
// navegacion.appendChild(nuevoElemento);
// console.log(nuevoElemento);

//////////////////////////////////////////////////////////////ss///////////////

console.log(2);
window.addEventListener('load',function(){//load espera a que se carge el JS y los archivos que dependen del  HTML esten listos
console.log(3);
});
document.addEventListener('DOMContentLoaded',function(){//solpo espera por el HTML no espera ni CSS ni Imagenes
console.log(8);
})
console.log(5);


//Seleccionar un elemento y asociarles un evento
const btnEnviar = document.querySelector('boton boton--secundario');
btnEnviar.addEventListener();

