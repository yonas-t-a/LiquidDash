'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { TrendingUp, TrendingDown, Star, EyeOff } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const watchlistItems = [
  { symbol: 'AAPL', name: 'Apple Inc.', price: 175.34, change: 2.34, changePercent: 1.35, marketCap: '2.7T', favorite: true },
  { symbol: 'TSLA', name: 'Tesla Inc.', price: 245.23, change: -3.45, changePercent: -1.39, marketCap: '780B', favorite: true },
  { symbol: 'NVDA', name: 'NVIDIA Corp.', price: 489.67, change: 12.34, changePercent: 2.59, marketCap: '1.2T', favorite: false },
  { symbol: 'AMD', name: 'Advanced Micro', price: 123.45, change: 3.21, changePercent: 2.67, marketCap: '198B', favorite: true },
  { symbol: 'COIN', name: 'Coinbase', price: 145.67, change: -2.34, changePercent: -1.58, marketCap: '34B', favorite: false },
]

export default function Watchlist() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Watchlist</CardTitle>
        <Button variant="ghost" size="sm">Manage</Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {watchlistItems.map((item) => (
            <div key={item.symbol} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Star className={`h-4 w-4 ${item.favorite ? 'fill-yellow-500 text-yellow-500' : ''}`} />
                </Button>
                <div>
                  <div className="font-medium">{item.symbol}</div>
                  <div className="text-sm text-muted-foreground">{item.name}</div>
                </div>
              </div>
              
              <div className="text-right">
                <div className="font-medium">${item.price.toFixed(2)}</div>
                <div className="flex items-center justify-end gap-1">
                  {item.change >= 0 ? (
                    <TrendingUp className="h-3 w-3 text-green-600" />
                  ) : (
                    <TrendingDown className="h-3 w-3 text-red-600" />
                  )}
                  <span className={`text-sm ${item.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {item.change >= 0 ? '+' : ''}{item.changePercent.toFixed(2)}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6">
          <Button variant="outline" className="w-full" size="sm">
            <EyeOff className="mr-2 h-4 w-4" />
            Hide Watchlist
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}