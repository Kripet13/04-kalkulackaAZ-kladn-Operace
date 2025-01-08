// kalkulačka výběr operace
function calculate(a, b, operation) {
    switch(operation) {
        case 'plus':
            return a + b;
        case 'minus':
            return a - b;
        case 'times':
            return a * b;
        case 'divide':
            if (b === 0) {
                return "Dělení nulou není možné!";
            } else {
                return a / b;
            }
    }
}
//kalkulačka tlačítko pro výpočet operace
function startCalculate() {
    const numberOne = parseFloat(document.getElementById("numberOne").value);
    const numberTwo = parseFloat(document.getElementById("numberTwo").value);
    const operation = document.getElementById("operation").value;
    const result = calculate(numberOne,numberTwo, operation);
    document.getElementById("result").value = result;
}
//kalkulačka tlačítko pro vynulování
function annul() {
    document.getElementById("numberOne").value = "";
    document.getElementById("numberTwo").value = "";
    document.getElementById("result").value = "";
    document.getElementById("operation").value = "none";
}
// mini hra generátor
function generateRandomNumber(min, max) {
    let guess = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(guess);
    return guess;
}
//mini hra tlačítko pro zahájení
let generatedNumber;
let attempts;

function startButton() {
    generatedNumber = generateRandomNumber(1, 100);
    attempts = 0;

    document.getElementById("containerTwo").hidden = false;
    document.getElementById("generator").textContent = "Hra zahájena! Hádejte číslo mezi 1 a 100.";
    document.getElementById("hint").textContent = "";
    document.getElementById("guess").value = "";
    document.querySelector("button[onclick='restartGame()']").hidden = true;
}
//mini hra tlačítko pro kontrolu odhadu
function check() {
    const guess = parseInt(document.getElementById("guess").value, 10);

    if (isNaN(guess)) {
        document.getElementById("hint").textContent = "Prosím, zadejte platné číslo.";
        return;
    }

    attempts++;

    if (guess < generatedNumber) {
        document.getElementById("hint").textContent = "Zkuste větší číslo.";
    } else if (guess > generatedNumber) {
        document.getElementById("hint").textContent = "Zkuste menší číslo.";
    } else {
        document.getElementById("hint").textContent = `Gratuluji! Uhodl jsi číslo ${generatedNumber} po ${attempts} pokusech.`;
        document.querySelector("button[onclick='restartGame()']").hidden = false;
    }
    document.querySelector("button[onclick='startButton()']").hidden = true;
}
//mini hra tlačítko pro restart hry
function restartGame() {
    
    document.getElementById("containerTwo").hidden = true;
    document.getElementById("generator").textContent = '';
    document.getElementById("hint").textContent = '';
    document.getElementById("guess").value = '';
    document.querySelector("button[onclick='restartGame()']").hidden = true;
    document.querySelector("button[onclick='startButton()']").hidden = false;
}
//převodník měn tlačítko - převede částku dle výběru měny
function convertCurrency() { 
    const amount = parseFloat(document.getElementById("cur").value, 10);
    const currency = document.getElementById("currency").value;
    let result = 0;

    if (currency === 'euro') { 
        result = amount / 25.2;
    } else if (currency === 'dolar') {
        result = amount / 24.4;
    } else if (currency === 'libra') {
        result = amount / 30.3;
    } else {
        document.getElementById("currencyConvert").textContent = "Vyberte platnou měnu!";
        return;
    }
// dodá k vypočítané částce příslušný ISO kód 
    const currencySymbol = currency === 'euro' ? 'EUR' :
                           currency === 'dolar' ? 'USD' : 'GBP' ;
    document.getElementById("currencyConvert").textContent = `${result.toFixed(2)} ${currencySymbol}`;

}