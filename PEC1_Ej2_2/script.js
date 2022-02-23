const moneda1 = document.getElementById('moneda-1');
const moneda2 = document.getElementById('moneda-2');
const cantidad1 = document.getElementById('cantidad-1');
const cantidad2 = document.getElementById('cantidad-2');
const rate = document.getElementById('rate');
const swap = document.getElementById('swap');
const load = document.getElementById('load');

// Mostrar error en un input
function showError(input, msg){
    const div = input.parentElement;
    div.className = 'moneda error';
    const small = div.querySelector('small');
    small.innerText = msg; 
}

// Mostrar cuando se realiza todo correctamente
function showSuccess(input){
    const div = input.parentElement;
    div.className = 'moneda';
    const small = div.querySelector('small');
    small.innerText = ""; 
}

// Fetch exchange rate and update the DOM
function calculate(){
    const moneda_1 = moneda1.value;
    const moneda_2 = moneda2.value;

    if (cantidad1.value < 0){
        showError(moneda1, "El número debe ser mayor a 0");
    }else{
        showSuccess(moneda1);
        fetch(`https://open.exchangerate-api.com/v6/latest/${moneda_1}`)
        .then(res => res.json())
        .then(data => {
            load.style.visibility = "visible";
            const rates = data.rates[moneda_2];
            rate.innerText = `1 ${moneda_1} = ${rates} ${moneda_2}`
            cantidad2.value = (cantidad1.value * rates).toFixed(2);
            load.style.visibility = "hidden";
        })
        .catch(error => {
            alert("Error llamando a la API.");
            load.style.visibility = "hidden";
        });
    }
}

// Event Listeners
moneda1.addEventListener('change', calculate);
cantidad1.addEventListener('input', calculate);
moneda1.addEventListener('change', calculate);
cantidad2.addEventListener('input', calculate);

swap.addEventListener('click', () => {
    const temp = cantidad1.value;
    cantidad1.value = cantidad2.value;
    cantidad2.value = temp;

    const temp2 = moneda1.value;
    moneda1.value = moneda2.value;
    moneda2.value = temp2;
    
    calculate();
})

calculate();