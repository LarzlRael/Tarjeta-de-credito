const tarjeta = document.querySelector('#tarjeta'),
    btnAbrirFormulario = document.querySelector('.btn-abrir-formulario'),
    formulario = document.querySelector('#formulario-tarjeta'),
    numeroTarjeta = document.querySelector('#tarjeta .numero'),
    nombreTarjeta = document.querySelector('#tarjeta .nombre'),
    logoMarca = document.querySelector('#logo-marca'),
    firma = document.querySelector('#tarjeta .firma p'),
    mesExpiracion = document.querySelector('#tarjeta .mes'),
    yearExpiracion = document.querySelector('#tarjeta .year'),
    ccv = document.querySelector('#tarjeta .ccv');

// volteamos la tarjeta para mostrar al frente

const mostrarFrente = () => {
    if (tarjeta.classList.contains('active')) {
        tarjeta.classList.remove('active');
    }
}
const volteo = false;

// * rotacion de la tarjeta
tarjeta.addEventListener('click', () => {
    // togle es si tiene esta clase la pone y si no la quita
    tarjeta.classList.toggle('active');
    console.log('volteando')
});

// Boton de abrir formulario
btnAbrirFormulario.addEventListener('click', () => {
    btnAbrirFormulario.classList.toggle('active');
    formulario.classList.toggle('active');

})
// select del mes generado dinamicamente
for (let i = 1; i <= 12; i++) {
    /*==>*/let option = document.createElement('option')
    option.value = i;
    option.innerText = i;
    // identificando desde el id
    /*==>*/formulario.selectMes.appendChild(option);
}

// select del mes generado dinamicamente

const yearActual = new Date().getFullYear();
for (let i = yearActual; i <= yearActual + 8; i++) {
/*==>*/let option = document.createElement('option')
    option.value = i;
    option.innerText = i;
// identificando desde el id
/*==>*/formulario.selectYear.appendChild(option);
}

// input numero de tarjeta
formulario.inputNumero.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;
    console.log(valorInput);
    /*==>*/
    formulario.inputNumero.value = valorInput
        //eliminamos espacios en blanco y reemplaza por algo
        .replace(/\s/g, '')
        //elinamos las letras
        .replace(/\D/g, '')
        //ponemos espacio para cada 4 numeros
        .replace(/([0-9]{4})/g, '$1 ')
        // elimna el ultimo espaciado   
        .trim();
    //para tener el contenido del texto
    numeroTarjeta.textContent = valorInput;

    if (valorInput === '') {
        numeroTarjeta.textContent = '#### #### #### ####';
        logoMarca.innerHTML = '';
    }
    if (valorInput[0] == 4) {
        // tenemmos que limpiar el texto por que se acumula
        logoMarca.innerHTML = '';
        const imagen = document.createElement('img');
        imagen.src = 'img/logos/visa.png';
        logoMarca.appendChild(imagen);
    } else if (valorInput[0] == 5) {
        logoMarca.innerHTML = '';
        const imagen = document.createElement('img');
        imagen.src = 'img/logos/mastercard.png';
        logoMarca.appendChild(imagen);
    }
    // Volteamos la tarjeta para que el usuario vea el frente
    mostrarFrente();
});

// input nombre de tarjeta

formulario.inputNombre.addEventListener('keyup', (e) => {
    let valorInput = e.target.value.replace(/[0-9]/g, '');
    nombreTarjeta.textContent = valorInput;
    // agregando la firma
    firma.textContent = valorInput;

    if (valorInput == '') {
        nombreTarjeta.textContent = 'Jhon Doe';
    }
    mostrarFrente();
});
// select mes
formulario.selectMes.addEventListener('change', (e) => {
    mesExpiracion.textContent = e.target.value;
    mostrarFrente();
});
// select Año
formulario.selectYear.addEventListener('change', (e) => {
    yearExpiracion.textContent = e.target.value.slice(2);
    mostrarFrente();

});

// * CCV
formulario.inputCCV.addEventListener('keyup', () => {
    if (!tarjeta.classList.contains('active')) {
        tarjeta.classList.toggle('active');
    }

    formulario.inputCCV.value = formulario.inputCCV.value
        // Eliminar los espacios
        .replace(/\s/g, '')
        // Eliminar las letras
        .replace(/\D/g, '');

    ccv.textContent = formulario.inputCCV.value;
});