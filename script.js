const currencyEl_one = document.getElementById("currency-one");
const currencyEl_two = document.getElementById("currency-two");
const amountEl_one = document.getElementById("amount-one");
const amountEl_two = document.getElementById("amount-two");
const swap = document.getElementById("swap");
const rateEl = document.getElementById("rate");

function calculate() {
  const currency_one = currencyEl_one.value;
  let currency_two = currencyEl_two.value;

  fetch(
    `https://v6.exchangerate-api.com/v6/5e69d2fa7cfba0815bcddeae/latest/${currency_one}`
  )
    .then((res) => res.json())
    .then((data) => {
      const rate = data.conversion_rates[currency_two];
      rateEl.innerHTML = `یک ${currency_one} برابر   ${rate}${currency_two}  است`;
      amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
    });
}

swap.addEventListener("click", () => {
  const temp = currencyEl_one.value;
  currencyEl_one.value = currencyEl_two.value;
  currencyEl_two.value = temp;
  calculate();
});

currencyEl_one.addEventListener("change", calculate);
currencyEl_two.addEventListener("change", calculate);
amountEl_one.addEventListener("input", calculate);
amountEl_two.addEventListener("input", calculate);
