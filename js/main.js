/* 

    >Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

    >Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
            il prezzo del biglietto è definito in base ai km (0.21 € al km)
            va applicato uno sconto del 20% per i minorenni
            va applicato uno sconto del 40% per gli over 65.
    
    >L'output del prezzo finale va visualizzato con massimo due decimali, per indicare centesimi sul prezzo.
*/


//#definisco le costanti

const priceKm = 0.21;
const discountUnderage = (0.80); //che posi scrivere la cifra direttamente dentro l'if o 20/100 è uguale
const discountOverage = (0.60);

//#variabili da utente

const totalKm = parseFloat(prompt("Quanti chilometri devi percorrere?"));
console.log(totalKm);

const age = parseInt(prompt("Quanti anni hai?"));
console.log(age);

//# processo di calcolo 

let ticketPrice;

if (age < 18) {
    ticketPrice = ( (priceKm * totalKm) * discountUnderage); 
    console.log(ticketPrice);
} else if  (age > 65) {
    ticketPrice = ( (priceKm * totalKm) * discountOverage);
    console.log(ticketPrice);
} else {
    ticketPrice = ( priceKm * totalKm);
    console.log(ticketPrice);
};

let outPutPrice = (ticketPrice).toFixed(2);
console.log(outPutPrice);
document.getElementById('i-like-train').innerHTML = `Il tuo biglietto del treno ti verrà a costare  ${ outPutPrice } &euro;` ;

if (isNaN(totalKm) || isNaN(age)) {
    document.getElementById('i-like-train').innerHTML = `Hai inserito un valore non valido, ricarica la pagina e riprova`;
};

