const Encoder = require('../Encoder')
const proofValue = require('./proofValue.json')

const resultBase58 = 'z2LuLBVSfnVzaQtvzuA7EaPQsGEgYWeaMTH1p3uqAG3ESx9HYyFzFFrYsyPkZSbn1Ji5LN76jw6HBr3oiaa8KsQenCPqKk7dJvxEXsDnYvhuDHtsDaQdmCyvpTR9oH46UZcCZ1UY7uZrgHmzf3J8Mzpp5Nnzd4SWiVN4RDWfxSkKmcoXywZ1pTm5bhbKAx1Xeydjwf7T7gcSSkUxQJmfJrWKdyiBjU1vt4oZxwbeTRQ9TfojiDRKJ6RPNsVPpkcDqGvPoaF58SQJG9xr8ACAAH9ZhYXJhRwW2zLpHGdRgyFGdxrcNiBVJ1o1TLcwLsfXTdRZLV2gW5yPLbEui6yBsmHtw9pQkWtfMxGBLzHk5ZRVLMdgUKatiV2QS4oE9N2GyiVnmQomApdS8R2cDSbQdn'

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
