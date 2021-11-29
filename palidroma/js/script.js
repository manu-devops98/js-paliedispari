/* Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
(prima senza funzione e poi con funzione)
 */

// chiedo all'utente di inserire parola tramite prompt

const userWord = prompt('Inserisci parola');

// let userSplit = userWord.split("");
// console.log(userSplit);

// let userReverse = userSplit.reverse();
// console.log(userReverse);

// let userJoin = userReverse.join('');
// console.log(userJoin);

// if (userWord == userJoin) {
//     console.log('Parola palindroma');
// } else {
//     console.log('Non palindroma');
// }

function paliWord(word) {
    let message = '';
    let string = word;
    let stringSplit = string.split('');
    let stringReverse = stringSplit.reverse();
    let stringJoin = stringReverse.join('');

    if (string == stringJoin) {
        message = 'Parola Palindroma';
    } else {
       message = 'Parola non palindroma';
    }
    return message;
}

console.log(paliWord(userWord));
