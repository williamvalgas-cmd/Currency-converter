const convertButton = document.querySelector("#convert-button")
const currencySelectTo = document.querySelector("#currency-selector-to")
const currencySelectFrom = document.querySelector("#currency-selector-from")


function convertValuesFirstSelect(){
    const inputCurrencyValue = document.querySelector("#input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert", Number)
    // const currencyValueConverted = document.querySelector(".currency-value", Number)


    if(currencySelectFrom.value == "real-convert") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
    } 

    if(currencySelectFrom.value == "dolar-convert") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
    }
    if(currencySelectFrom.value == "euro-convert") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("ed-ED", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
    }

    if(currencySelectFrom.value == "libra-convert") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
    }

    if(currencySelectFrom.value == "bitcoin-convert") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BTC",
            minimumFractionDigits: 2,
            maximumFractionDigits: 8
        }).format(inputCurrencyValue)
    }

}


function convertValues() {
    const inputCurrencyValue = document.querySelector("#input-currency").value
    const currencyValueConverted = document.querySelector(".currency-value", Number)

    const dolarToday = 5.2
    const euroToday = 6.2
    const libraToday = 5.9
    const bitcoinToday = 120.5
    const realToday = 1.5


    if (currencySelectTo.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    } else if (currencySelectFrom.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(dolarToday * inputCurrencyValue)
    }

    if (currencySelectTo.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("ed-ED", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelectTo.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    if (currencySelectTo.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BTC",
            minimumFractionDigits: 2,
            maximumFractionDigits: 8
        }).format(inputCurrencyValue / bitcoinToday)
    }

    if(currencySelectTo.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
        }).format(inputCurrencyValue / realToday)
    } else if (currencySelectFrom.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
        }).format(realToday * inputCurrencyValue)
    }

convertValuesFirstSelect()
}


function changeCurrency() {
    const currencyName = document.getElementById("currency-name-converted")
    const currencyFlag = document.querySelector("#currency-flag-converted")

    if (currencySelectTo.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyFlag.src = "./assets/dolar.png"
    }

    if (currencySelectTo.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyFlag.src = "./assets/euro.png"
    }

    if (currencySelectTo.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyFlag.src = "./assets/libra.png"
    }

    if (currencySelectTo.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyFlag.src = "./assets/bitcoin.png"
    }

    if(currencySelectTo.value == "real") {
        currencyName.innerHTML = "Real"
        currencyFlag.src = "./assets/real.png"
    }

    convertValues()
}

function selectedCurrency() {
    const currencyName = document.getElementById("currency-name-convert")
    const currencyFlag = document.querySelector("#currency-flag-convert")
    const inputCurrency = document.querySelector("#input-currency")

    if (currencySelectFrom.value == "dolar-convert") {
        currencyName.innerHTML = "Dólar americano"
        currencyFlag.src = "./assets/dolar.png"
        inputCurrency.placeholder = "$10,000.00"
    }

    if (currencySelectFrom.value == "euro-convert") {
        currencyName.innerHTML = "Euro"
        currencyFlag.src = "./assets/euro.png"
        inputCurrency.placeholder = "€10,000.00"
    }

    if (currencySelectFrom.value == "libra-convert") {
        currencyName.innerHTML = "Libra"
        currencyFlag.src = "./assets/libra.png"
        inputCurrency.placeholder = "£10,000.00"
    }

    if (currencySelectFrom.value == "bitcoin-convert") {
        currencyName.innerHTML = "Bitcoin"
        currencyFlag.src = "./assets/bitcoin.png"
        inputCurrency.placeholder = "BTC 100,00"
    }

    if (currencySelectFrom.value == "real-convert"){
        currencyName.innerHTML = "Real"
        currencyFlag.src = "./assets/real.png"
        inputCurrency.placeholder = "R$ 10,000.00"
    }

convertValuesFirstSelect()
}


currencySelectFrom.addEventListener("change", selectedCurrency)
currencySelectTo.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", "touchend", convertValues, convertValuesFirstSelect)