fetch(
  "https://api.currencyfreaks.com/latest?apikey=4dbd7d63b275406681f865e8a4a5dcaf"
)
  .then((result) => {
    let myData = result.json();
    // console.log(myData);
    return myData;
  })
  .then((currencyValues) => {
    let usdAmount = document.querySelector(".usd-amount #usd");
    let amount = document.querySelector(".amount #amount");
    let currency = document.querySelector(".amount #currency");
    usdAmount.addEventListener("input", function () {
      amount.value = (
        usdAmount.value * currencyValues.rates[currency.value]
      ).toFixed(2);
    });
    amount.addEventListener("input", function () {
      usdAmount.value = (
        amount.value / currencyValues.rates[currency.value]
      ).toFixed(2);
    });
    currency.addEventListener("input", function () {
      amount.value = (
        usdAmount.value * currencyValues.rates[currency.value]
      ).toFixed(2);
    });
    // console.log(currencyValues.rates);
  });
