import axios from 'axios'

const FINNHUB_API_KEY = process.env.NEXT_PUBLIC_FINNHUB_API_KEY
const BASE_URL = 'https://finnhub.io/api/v1'

const finnhub = axios.create({
  baseURL: BASE_URL,
  params: {
    token: FINNHUB_API_KEY
  }
})

export const finnhubApi = {
  // Stock quotes
  getQuote: async (symbol: string) => {
    const response = await finnhub.get('/quote', {
      params: { symbol }
    })
    return response.data
  },
  
  // Company profile
  getCompanyProfile: async (symbol: string) => {
    const response = await finnhub.get('/stock/profile2', {
      params: { symbol }
    })
    return response.data
  },
  
  // Market news
  getMarketNews: async (category: string = 'general') => {
    const response = await finnhub.get('/news', {
      params: { category }
    })
    return response.data
  },
  
  // Stock candles (historical data)
  getStockCandles: async (symbol: string, resolution: string, from: number, to: number) => {
    const response = await finnhub.get('/stock/candle', {
      params: { symbol, resolution, from, to }
    })
    return response.data
  },
  
  // Forex rates
  getForexRates: async (base: string = 'USD') => {
    const response = await finnhub.get('/forex/rates', {
      params: { base }
    })
    return response.data
  },
  
  // Crypto prices
  getCryptoPrices: async (symbol: string = 'BINANCE:BTCUSDT') => {
    const response = await finnhub.get('/quote', {
      params: { symbol }
    })
    return response.data
  }
}