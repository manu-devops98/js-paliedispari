/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari
Dichiariamo chi ha vinto
(corrispondenza tra scelta pari e dispari e somma pari o dispari)
In un secondo momento creiamo delle funzioni per i numeri random e per il check pari dispari */

const evenUser = prompt('Scegli pari o dispari');
const numberUser = parseInt(prompt('Scegli numero da 1 a 5'));

const numbRandom = Math.floor(Math.random() * 5) + 1;

const result = numberUser + numbRandom;
console.log(result);

if (evenUser =='pari' && result % 2 == 0) {
    console.log('Hai vinto!');
} else if (evenUser == 'dispari' && result % 2 == 1) {
    console.log('Hai vinto!');
} else {
    console.log('Hai perso');
}