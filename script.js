const convertButton = document.querySelector("#convert-button")
const currencySelect = document.querySelector("#currency-selector")


function convertValues(){
    const inputCurrencyValue = document.querySelector("#input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value", Number) 

    const dolarToday = 5.2
    const euroToday = 6.2
    const libraToday = 5.9
    const bitcoinToday = 120.5


    if(currencySelect.value == "dolar"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(inputCurrencyValue / dolarToday)
    }

    if(currencySelect.value == "euro"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("ed-ED", {
        style: "currency",
        currency: "EUR"
    }).format(inputCurrencyValue / euroToday)
    }

    if(currencySelect.value == "libra"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP"
    }).format(inputCurrencyValue / libraToday)
    }

    if(currencySelect.value == "bitcoin"){
         currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BTC",
        minimumFractionDigits: 2,
        maximumFractionDigits: 8
    }).format(inputCurrencyValue / bitcoinToday)
    }   


    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

}

convertButton.addEventListener("click", convertValues)