/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari
Dichiariamo chi ha vinto
(corrispondenza tra scelta pari e dispari e somma pari o dispari)
In un secondo momento creiamo delle funzioni per i numeri random e per il check pari dispari */
function numberRandom(num) {
    let number = Math.floor(Math.random() * num) + 1;
    return number;
}

function isEven(num) {
    let message = '';
    if (num % 2 == 0) {
        message = 'pari';
    } else {
        message = 'dispari';
    }
    return message;
}

const evenUser = prompt('Scegli pari o dispari').toLowerCase();
const numberUser = parseInt(prompt('Scegli numero da 1 a 5'));

const numbRandom = numberRandom(5);

const result = numberUser + numbRandom;
console.log(result);

if (evenUser == 'pari' && isEven(result) == 'pari') {
    console.log('Hai vinto!');
} else if (evenUser == 'dispari' && isEven(result) == 'dispari') {
    console.log('Hai vinto!');
} else {
    console.log('Hai perso');
}


