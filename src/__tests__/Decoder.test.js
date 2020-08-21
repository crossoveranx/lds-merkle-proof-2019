const Decoder = require('../Decoder')
const proofValue = require('./proofValue.json')

const resultBase58 = 'z2LuLBVSfnVzaQtxsawmSLTGUmX6ed7LDe11WDNkT1t5j7jaSvcPVD3fzEsz5ZqLrFdqTJmfLZnUVs4XD44vEANvyKej1agGiwERjCdonZ1vWW3XXubdpmmpxXjn4PmZJd47dVXdysoJesT1NRozsMrRw6vLXDnCoEXg1AU5B2PpLqmDoPRzScTVKwT7KkjMhVGz6yQ3RZfNmzyKqZGVoT4auYog4akSy6MgLr3PR12cNQKqWiKSxttMYGJqHCfm8N5jAZ35wWQLLi5HakHXQk9Uj4M3fQoiLB6FRgfb7XgmruVgcjsgLB4BDuU4TDEAvSwwZPQ7phM7UBpMyuZETbeuBR3phaTGCsUPsTxwaQExiCCF5rSP5tCo4oZjUAL9bDwiS7fnBw5zNvNgQ44poN'

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
