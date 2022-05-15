const mongoose = require('mongoose')
const { Schema, SchemaTypes } = mongoose

const ratesSchema = new Schema({
  cryptoCurrencyKey: {
    type: SchemaTypes.String,
    required: true,
  },
  currencyKey: {
    type: SchemaTypes.String,
    required: true,
  },
  time: {
    type: SchemaTypes.Date,
    required: true,
  },
  rate: {
    type: SchemaTypes.Number,
    required: true,
  },
})

const Rates = mongoose.model('rates', ratesSchema)

module.exports = {
  Rates,
}
