/* Modo claro - oscuro */
var cuerpo = document.querySelector("body");
var modo = document.getElementById("modo");
var logo = document.getElementById("logo");
var formulario = document.getElementById("formulario");

function cambiarModo() {
    modo.classList.toggle("modo");
    cuerpo.classList.toggle("oscuro");
    logo.classList.toggle("invertir");
    formulario.classList.toggle("form-oscuro");
}

modo.addEventListener("click", cambiarModo);

/* Navegacion */
var inicio = document.getElementById("volver-inicio");
var menu = document.getElementById("menu");
var detalle = document.getElementById("detalle");
var contacto = document.getElementById("contacto");

inicio.addEventListener('click', function(){
    window.location.href = 'index.html'
});
menu.addEventListener('click', function(){
    window.location.href = 'menu.html'
});
detalle.addEventListener('click', function(){
    window.location.href = 'detalle.html'
});
contacto.addEventListener('click', function(){
    window.location.href = 'contacto.html'
});

/* Formulario - Validacion de datos */
var nombre = document.getElementById("name");
var mail = document.getElementById("email")
var comentario = document.getElementById("comments");
var enviar = document.getElementById("enviar");

enviar.addEventListener('click', function(infoEvento){
  if( nombre.value.length == 0 ){
    alert("Debe ingresar su nombre completo");
  }
  else if( mail.value.length == 0 ){
    alert("Por favor ingrese un mail de contacto");
  }
  else if( comentario.value.length == 0 ){
    alert("Su consulta esta vacia, ingrese un comentario");
  }
  else{
    infoEvento.preventDefault()
    alert("Muchas gracias por mensaje, en breve será respondido");
  } 
});


