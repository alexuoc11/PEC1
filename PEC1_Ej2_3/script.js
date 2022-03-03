const container = document.querySelector('.container');
const seats = document.querySelectorAll('.seat');
const movieSelect = document.getElementById('pickMovie');
const moneda = document.getElementById('selectMoneda');
const nuevaMoneda = document.getElementById('nuevaMoneda');
const monedaSmall = document.getElementById('small');

const totalSeats = document.getElementById('totalSeats');
const totalPrice = document.getElementById('totalPrice');
let rate = 1;

//Siempre que volvamos a recargar la pagina 
populateUI();

let ticketPrice = +movieSelect.value; 
let moneda1 = 'EUR';

// Cambiar la cantidad de asientos seleccionados y el precio total
function updateTotals(){
    const selectedSeats = document.querySelectorAll('.seat.selected');

    const finalSeats = [...selectedSeats].map(s =>  [...seats].indexOf(s));

    localStorage.setItem('localSelectedSeats', JSON.stringify(finalSeats));

    totalSeats.innerText = selectedSeats.length;
    totalPrice.innerText = (ticketPrice) * selectedSeats.length * rate; 
    
    localStorage.setItem('movieSelectedIndex', JSON.stringify(movieSelect.selectedIndex));

    localStorage.setItem('movieSelectedPrice', JSON.stringify(movieSelect.value));
}

// Rellenamos con lo que nos hemos guardado en el almacenamiento del navegador
function populateUI(){
    const selectedSeatsLocal = JSON.parse(localStorage.getItem('localSelectedSeats'));
    const movieSelectedIndex = JSON.parse(localStorage.getItem('movieSelectedIndex'));
    const movieSelectedPrice = JSON.parse(localStorage.getItem('movieSelectedPrice'));
    const monedaSelectedLocal = JSON.parse(localStorage.getItem('monedaSelected'));
    const rateLocal = JSON.parse(localStorage.getItem('rate'));

    if(selectedSeatsLocal !== null){
        seats.forEach((s, i) => {
            if (selectedSeatsLocal.indexOf(i) > -1){
                s.classList.add('selected');
            }
        });
    }

    if(monedaSelectedLocal !== null){
        moneda.value = monedaSelectedLocal;
        rate = +rateLocal;
    }


    if(movieSelectedIndex!== null){
        movieSelect.selectedIndex = movieSelectedIndex;

        if(movieSelectedPrice !== null){
            ticketPriceLocal = +movieSelectedPrice;
            totalSeats.innerText = selectedSeatsLocal.length;
            totalPrice.innerText = ticketPriceLocal * selectedSeatsLocal.length*rate; 
        }
    }

}

// Event Listeners
movieSelect.addEventListener('change', (e) => {
    ticketPrice = +e.target.value;

    const localMovie = e.target.selectedIndex;
    localStorage.setItem('movieSelectedIndex', JSON.stringify(localMovie));

    const localMoviePrice = e.target.value;
    localStorage.setItem('movieSelectedPrice', JSON.stringify(localMoviePrice));

    updateTotals();
});

moneda.addEventListener('change', (e) => {

    const monedaLocal = e.target.selectedIndex;

    let moneda2 = e.target.value;

    fetch(`https://open.exchangerate-api.com/v6/latest/${moneda1}`)
    .then(res => res.json())
    .then(data => {
        console.log(data.rates);
        rate = data.rates[moneda2];
        nuevaMoneda.innerText = rate + moneda2;
        monedaSmall.style.display = 'inline';
        localStorage.setItem('monedaSelected', JSON.stringify(moneda2));
        localStorage.setItem('rate', JSON.stringify(rate));
        updateTotals();
    });
    
});

container.addEventListener('click', e => {
    if(e.target.classList.contains('seat') && !e.target.classList.contains('ocupado')) {
        e.target.classList.toggle('selected');
        updateTotals();
    }
});