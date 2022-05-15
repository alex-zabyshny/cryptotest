const payload = JSON.parse($('#payload').text())

const renderRates = (rates) => {
  const renderArea = $('#root ul')
  rates.forEach(rate => renderArea.prepend(`
    <li>
      <span>${rate.cryptoCurrencyKey}</span>
      <br>
      <span>${rate.rate}</span>
      <br>
      <span>${new Date(rate.time)}</span>
    </li>
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
