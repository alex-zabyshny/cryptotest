const renderCurrenciesList = (currencies) => {
  const renderArea = $('#root')
  currencies.forEach(currency => renderArea.append(`
    <a class="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true" href="/currencies/${currency}/rates">
      <div class="d-flex gap-2 w-100 justify-content-between">
        <div>
          <h6 class="mb-0">
            ${currency}
          </h6>
          <p class="mb-0 opacity-75">
            Check exchange rates and history
          </p>
        </div>
      </div>
    </a>
  `))
}

const fetchCurrenciesList = () => {
  fetch('/api/currencies').then(async response => {
    const data = await response.json()
    if (Array.isArray(data)) {
      const availibleCurrencies = data.filter(({ availible }) => availible).map(({ alias }) => alias)
      renderCurrenciesList(availibleCurrencies)
    }
  }).catch(err => console.error(err))
}

fetchCurrenciesList()
