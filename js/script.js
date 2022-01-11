console.log('JS OK')

const firstNumber = parseInt(prompt('Inserisci il primo numero'));
console.log('Primo Numero:', firstNumber);
const secondNumber = parseInt(prompt('Inserisci il secondo numero'));
console.log('Secondo Numero:', secondNumber);

if (secondNumber > firstNumber) {
    resultPage.innerHTML = `${secondNumber}`
    console.log(secondNumber)
} else if (firstNumber > secondNumber) {
    console.log(firstNumber)
    resultPage.innerHTML = `${firstNumber}`
} else {
    console.log('Ritenta')
    resultPage.innerHTML = `Ritenta`
}