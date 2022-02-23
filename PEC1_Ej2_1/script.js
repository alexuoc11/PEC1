const form = document.getElementById('form');
const username = document.getElementById('usuario');
const email = document.getElementById('email');
const edad = document.getElementById('edad');
const url = document.getElementById('url');
const password = document.getElementById('contraseña');
const password2 = document.getElementById('contraseña2');
const btn = document.getElementById('btn');

// Mostrar error en un input
function showError(element, msg){
    const formControl = element.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = msg; 
}

// Mostrar input correcto
function showSuccess(element){
    const formControl = element.parentElement;
    formControl.className = 'form-control success';
    const small = formControl.querySelector('small');
}

// Mirar si los inputs estan o no vacios
function notEmpty(inputArr){
    inputArr.forEach(element => {
        if (element.value.trim() === ''){
            showError(element, "Campo "+element.id+" vacío");
        }else{
            showSuccess(element);
        }
    });
}

// Verificar que un input tiene un rango de caracteres correcto
function checkLength(element, min, max){
    if (element.value.length < min){
        showError(element, "Tiene que tener como minimo "+min+" caracteres");
    }else if (element.value.length > max){
        showError(element, "Como maximo puede tener "+max+" caracteres");
    }else{
        showSuccess(element);
    }
}

// Mirar si el email tiene el formato valido
function checkEmail(email){
    const regext_email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regext_email.test(email.value.trim())){
        showError(email, "Incorrect email");
    }else{
        showSuccess(email);
    }
}

// Confirmar que las dos passwords coincideen
function confirmPasswords(pass1, pass2){
    if (pass1.value !== pass2.value){
        showError(pass2, "Las contraseñas no coinciden")
    }
}

// Confirmar que la edad esta entre un rango
function checkEdad(edad, min, max){
    if (edad.value<min || edad.value>max){
        showError(edad, "La edad tiene que estar dentro del rango "+min+"-"+max);
    }
}

// Validar que el formato sea valido: esquema://dominio/directorio/archivo
function checkValidUrl(url){
    const regext_url = /^(?:([A-Za-z]+):)+(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;
    if (!regext_url.test(url.value.trim())){
        showError(url, "Incorrect URL format");
    }else{
        showSuccess(url);
    }
}

btn.addEventListener("click", function(e) {
    e.preventDefault();

    notEmpty([username, email, edad, url, password, password2]);
    checkLength(username, 5, 15);
    checkLength(password, 6, 15);
    checkEmail(email);
    confirmPasswords(password, password2);
    checkEdad(edad, 1, 999);
    checkValidUrl(url);

});