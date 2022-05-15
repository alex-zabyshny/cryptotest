const payload = JSON.parse($('#payload').text())

const renderRates = (rates) => {
  const renderArea = $('#root')
  rates.forEach(rate => renderArea.prepend(`
    <div class="list-group-item rounded-3 py-3">
      ${rate.cryptoCurrencyKey}
      <span style="color:green">${rate.rate}</span>
      <span class="d-block small opacity-50">
        ${new Date(rate.time).toLocaleString()}
      </span>
    </div>
  `))
}

const fetchHistory = () => {
  const { currency } = payload
  fetch(`/api/currencies/${currency}/rates`).then(async response => {
    const data = await response.json()
    if (Array.isArray(data)) {
      renderRates(data)
    }
  }).catch(err => console.error(err))
}

fetchHistory()

const socket = io({ query: `currency=${payload.currency}` })
socket.on('rates', (data) => renderRates(JSON.parse(data)))
