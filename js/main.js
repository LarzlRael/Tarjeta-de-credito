const tarjeta  = document.querySelector('#tarjeta'),
      btnAbrirFormulario = document.querySelector('.btn-abrir-formulario'),
      formulario = document.querySelector('#formulario-tarjeta');

tarjeta.addEventListener('click',()=>{
    // togle es si tiene esta clase la pone y si no la quita
    tarjeta.classList.toggle('active');
});

btnAbrirFormulario.addEventListener('click',()=>{
    btnAbrirFormulario.classList.toggle('active');
    formulario.classList.toggle('active');

})