/* 

    >Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

    >Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
            il prezzo del biglietto è definito in base ai km (0.21 € al km)
            va applicato uno sconto del 20% per i minorenni
            va applicato uno sconto del 40% per gli over 65.
    
    >L'output del prezzo finale va visualizzato con massimo due decimali, per indicare centesimi sul prezzo.
*/

/* chiedo all'utente quanti chilometri vuole fare */


const totalKm = parseInt(prompt("quanti chilometri devi percorrere?"));
console.log(totalKm);

const age = parseInt(prompt("Quanti anni hai?"));
console.log(age);

if (age < 18) {
    ticketPrice = 100 * 0.80; 
    console.log(ticketPrice);
} else if  (age >=65) {
    ticketPrice = 100 * 0.60;
    console.log(ticketPrice);
} else {
    ticketPrice = 100;
    console.log(ticketPrice);
};