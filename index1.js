const conversionRates = {
    USD: 1,
    EUR: 0.81,
    GBP: 0.72,
    JPY: 110.44,
    AUD: 1.30,
    CAD: 1.26,
    CHF: 0.90,
    CNY: 6.46,
};
function currencyConverter(amount, fromCurrency, toCurrency) {
    if (fromCurrency === toCurrency) {
        return amount;
    }
    const rate = conversionRates[toCurrency] / conversionRates[fromCurrency];
    return amount * rate;
}
// Example usage
const amount = 100;
const fromCurrency = 'USD';
const toCurrency = 'EUR';
const convertedAmount = currencyConverter(amount, fromCurrency, toCurrency);
console.log(`${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`);
export {};
