'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { TrendingUp, TrendingDown, MoreVertical } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'

const marketData = [
  { symbol: 'AAPL', name: 'Apple Inc.', price: 175.34, change: 2.34, changePercent: 1.35, volume: '45.2M' },
  { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 138.45, change: -0.45, changePercent: -0.32, volume: '32.1M' },
  { symbol: 'MSFT', name: 'Microsoft', price: 378.91, change: 5.67, changePercent: 1.52, volume: '28.7M' },
  { symbol: 'TSLA', name: 'Tesla Inc.', price: 245.23, change: -3.45, changePercent: -1.39, volume: '98.5M' },
  { symbol: 'AMZN', name: 'Amazon.com', price: 147.89, change: 1.23, changePercent: 0.84, volume: '56.3M' },
  { symbol: 'META', name: 'Meta Platforms', price: 332.56, change: 4.56, changePercent: 1.39, volume: '23.4M' },
  { symbol: 'NVDA', name: 'NVIDIA Corp.', price: 489.67, change: 12.34, changePercent: 2.59, volume: '67.8M' },
  { symbol: 'JPM', name: 'JPMorgan Chase', price: 158.34, change: -0.89, changePercent: -0.56, volume: '15.6M' },
]

export default function MarketOverview() {
  return (
    <Card className="col-span-1 md:col-span-2">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Market Overview</CardTitle>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">Stocks</Button>
          <Button variant="ghost" size="sm">Crypto</Button>
          <Button variant="ghost" size="sm">Forex</Button>
          <Button variant="ghost" size="icon">
            <MoreVertical className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Symbol</TableHead>
              <TableHead>Name</TableHead>
              <TableHead className="text-right">Price</TableHead>
              <TableHead className="text-right">Change</TableHead>
              <TableHead className="text-right">Change %</TableHead>
              <TableHead className="text-right">Volume</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {marketData.map((item) => (
              <TableRow key={item.symbol} className="cursor-pointer hover:bg-muted/50">
                <TableCell className="font-medium">{item.symbol}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell className="text-right font-medium">
                  ${item.price.toFixed(2)}
                </TableCell>
                <TableCell className="text-right">
                  <Badge
                    variant={item.change >= 0 ? 'default' : 'destructive'}
                    className="gap-1"
                  >
                    {item.change >= 0 ? (
                      <TrendingUp className="h-3 w-3" />
                    ) : (
                      <TrendingDown className="h-3 w-3" />
                    )}
                    {item.change >= 0 ? '+' : ''}{item.change.toFixed(2)}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <span className={item.changePercent >= 0 ? 'text-green-600' : 'text-red-600'}>
                    {item.changePercent >= 0 ? '+' : ''}{item.changePercent.toFixed(2)}%
                  </span>
                </TableCell>
                <TableCell className="text-right text-muted-foreground">
                  {item.volume}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}