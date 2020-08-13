const Decoder = require('../Decoder')
const proofValue = require('./proofValue.json')

const resultBase58 = 'z65N6GBZByDiB7gLEoeUugVq4yyHARNdri8J9zNzUMpaSAW1WQg7wVLQjEwVWn6jgLjJjEgqNaapzty73k922PVp82VpC7w9fkVhwHzrcohsj1akZ5V3RLfJgsdoz7ZvdpnPQYd2yb6BuzbrZHo9YBgR7CdBKJp6ZQP6sQdhpEmGPnzweNvxXSP672xBXZo3fZzbhcNBKJQZeGuJBqbdnbn5xQgevnxhE37LyTKomxQnpMZS3fDLYpMqazGhdLkTqzaUujMBoCwy6ZFnpxT5HMLMSUegZKC39KBSHHF5GWVuNhTSGVdRN7cvVan46vmNW9rChv5YaWsbK8RD3a2G8HSLHc7BZ1DANyzdJFRDHj4wVRWLgy9hscCZKmRvENY7rcqZyaTHfC6zAZQV7R5oikr4QpFMc9uVatkhHGYJNCF1Jwg6D3QuE56tQkubLFKqgmhQsM32FfmXRd54RhC5FVYVFLeTFcAuMNCcWt3PuqvZEoCoCjvkUkmd'

describe('Decoder', () => {
  test('should create instance from valid props', () => {
    const decoder = new Decoder(resultBase58)
    expect(decoder).toBeDefined()
  })

  test('should throw error with invalid props', () => {
    try {
      new Decoder('')
    }
    catch (err) {
      expect(err).toBeDefined()
      expect(err.message).toBe('Base58 string is invalid. Cannot construct Decoder.')
    }
  })

  test('should decode a valid proofValue', () => {
    const decoder = new Decoder(resultBase58)
    const result = decoder.decode()
    
    expect(result).toEqual(proofValue)
  })
})
