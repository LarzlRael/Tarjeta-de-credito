const tarjeta  = document.querySelector('#tarjeta'),
      btnAbrirFormulario = document.querySelector('.btn-abrir-formulario');

tarjeta.addEventListener('click',()=>{
    // togle es si tiene esta clase la pone y si no la quita
    tarjeta.classList.toggle('active');
});

btnAbrirFormulario.addEventListener('click',()=>{
    btnAbrirFormulario.classList.toggle('active'); 
})