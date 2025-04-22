/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function area(l1, l2) {
  return l1 * l2;
}
console.log(area(5, 10));
/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazySum(l1, l2) {
  const risultato = l1 + l2;
  if (l1 === l2) {
    return risultato * 3;
  } else {
    return risultato;
  }
}
console.log(crazySum(1, 5));
/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazyDiff(a) {
  const fisso = Math.abs(a - 19);
  if (a > 19) {
    return fisso * 3;
  } else {
    return fisso;
  }
}
console.log(crazyDiff(5));
/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function boundary(n) {
  const risultato = (n >= 20 && n <= 100) || n === 400;
  return risultato;
}
console.log(boundary(400));
console.log(boundary(200));
console.log(boundary(10));
/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function epify(nome) {
  const parola = nome.split(" ");
  if (parola[0].toLowerCase() === "epicode") {
    return parola;
  } else {
    return "EPICODE" + " " + nome;
  }
}
console.log(epify("ciao"));
/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function check3and7(a) {
  return console.log(a % 3 === 0 || a % 7 === 0);
}
check3and7(21);
/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function reverseString(parola) {
  const stringa = parola.split("");
  const inverti = stringa.reverse();
  const risultato = inverti.join("");
  console.log(risultato);
}
reverseString("ciao");
/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function upperFirst(parola) {
  const separa = parola.split(" ");
  const arrayNuova = [];

  for (let i = 0; i < parola.lenght; i++) {
    const separ = separa[i];
    const primoC = separa.charAt(0);
    const primoCupper = primoC.toUppercase();
    const ilResto = separ.slice(1);
    const risultato = primoCupper + ilResto;
    arrayNuova.push(risultato);
  }
  return arrayNuova.join(" ");
}
console.log(upperFirst("ciao paolo a casa"));
/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function cutString(str) {
  if (str.lenght <= 2) {
    return console.log("è troppo corta");
  }
  return str.slice(1, -1);
}
cutString("Ciao");
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function giveMeRandom(n) {
  const arrayR = [];
  for (let i = 0; i < n; i++) {
    arrayR.push(Math.floor(Math.random() * 11));
  }
}
giveMeRandom(5);
