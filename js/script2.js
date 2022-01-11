const firstWord = prompt('Inserisci la prima parola').trim();
console.log('Prima Parola:', firstWord);
const secondWord = prompt('Inserisci la seconda parola').trim();
console.log('Seconda Parola:', secondWord);

if (firstWord.length > secondWord.length) {
  console.log(`'ordine è il seguente: ${secondWord} e ${firstWord} `)
} else if (firstWord.length < secondWord.length) {
    console.log(`L'ordine è il seguente: ${firstWord} e ${secondWord} `)
} else {
    console.log('Hanno pari lunghezza')
}