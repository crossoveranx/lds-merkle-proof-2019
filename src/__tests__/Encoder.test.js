const Encoder = require('../Encoder')
const proofValue = require('./proofValue.json')

const resultBase58 = 'z2LuLBVSfnVzaQtxsawmSLTGUmX6ed7LDe11WDNkT1t5j7jaSvcPVD3fzEsz5ZqLrFdqTJmfLZnUVs4XD44vEANvyKej1agGiwERjCdonZ1vWW3XXubdpmmpxXjn4PmZJd47dVXdysoJesT1NRozsMrRw6vLXDnCoEXg1AU5B2PpLqmDoPRzScTVKwT7KkjMhVGz6yQ3RZfNmzyKqZGVoT4auYog4akSy6MgLr3PR12cNQKqWiKSxttMYGJqHCfm8N5jAZ35wWQLLi5HakHXQk9Uj4M3fQoiLB6FRgfb7XgmruVgcjsgLB4BDuU4TDEAvSwwZPQ7phM7UBpMyuZETbeuBR3phaTGCsUPsTxwaQExiCCF5rSP5tCo4oZjUAL9bDwiS7fnBw5zNvNgQ44poN'

describe('Encoder', () => {
  test('should create instance from valid props', () => {
    const encoder = new Encoder(proofValue)
    expect(encoder).toBeDefined()
  })

  test('should throw error with invalid props', () => {
    try {
      new Encoder({})
    }
    catch (err) {
      expect(err).toBeDefined()
      expect(err.message).toBe('JSON is invalid. Cannot construct Encoder.')
    }
  })

  test('should encode a valid proofValue', () => {
    const encoder = new Encoder(proofValue)
    const result = encoder.encode()

    expect(result.toString()).toEqual(resultBase58)
  })
})
