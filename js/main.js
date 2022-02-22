/* 

    >Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

    >Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
            il prezzo del biglietto è definito in base ai km (0.21 € al km)
            va applicato uno sconto del 20% per i minorenni
            va applicato uno sconto del 40% per gli over 65.
    
    >L'output del prezzo finale va visualizzato con massimo due decimali, per indicare centesimi sul prezzo.
*/

/* chiedo all'utente quanti chilometri vuole fare */

const priceKm = 0.21;

const discountUnderage = (0.80); //che posi scrivere la cifra direttamente dentro l'if o 20/100 è uguale

const discountOverage = (0.60);

const totalKm = parseInt(prompt("quanti chilometri devi percorrere?"));
console.log(totalKm);

const age = parseInt(prompt("Quanti anni hai?"));
console.log(age);

if (age < 18) {
    ticketPrice = ( (priceKm * totalKm) * discountUnderage); 
    console.log(ticketPrice);
} else if  (age >=65) {
    ticketPrice = ( (priceKm * totalKm) * discountOverage);
    console.log(ticketPrice);
} else {
    ticketPrice = ( priceKm * totalKm);
    console.log(ticketPrice);
};

let outPutPrice = parseFloat(ticketPrice).toFixed(2);
console.log(outPutPrice)