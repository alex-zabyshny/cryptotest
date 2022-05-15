const renderCurrenciesList = (currencies) => {
  const renderArea = $('#root ul')
  currencies.forEach(currency => renderArea.append(`<li>${currency}<br><a href="/currencies/${currency}/rates">Check exchange rates and history</a></li>`))
}

const fetchCurrenciesList = () => {
  fetch('/api/currencies').then(async response => {
    const data = await response.json()
    if (Array.isArray(data)) {
      const availibleCurrencies = data.filter(el => el.availible).map(el => el.alias)
      renderCurrenciesList(availibleCurrencies)
    }
  }).catch(err => console.error(err))
}

fetchCurrenciesList()
