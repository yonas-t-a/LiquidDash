'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowUpRight, ArrowDownRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const transactions = [
  { type: 'buy', symbol: 'AAPL', shares: 10, price: 175.34, total: 1753.4, time: '10:30 AM', status: 'completed' },
  { type: 'sell', symbol: 'TSLA', shares: 5, price: 245.23, total: 1226.15, time: '09:15 AM', status: 'completed' },
  { type: 'buy', symbol: 'NVDA', shares: 3, price: 489.67, total: 1469.01, time: 'Yesterday', status: 'pending' },
  { type: 'buy', symbol: 'GOOGL', shares: 8, price: 138.45, total: 1107.6, time: 'Jan 12', status: 'completed' },
  { type: 'sell', symbol: 'MSFT', shares: 4, price: 378.91, total: 1515.64, time: 'Jan 10', status: 'completed' },
]

export default function RecentTransactions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {transactions.map((transaction, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${
                  transaction.type === 'buy' 
                    ? 'bg-green-500/10 text-green-600' 
                    : 'bg-red-500/10 text-red-600'
                }`}>
                  {transaction.type === 'buy' ? (
                    <ArrowUpRight className="h-4 w-4" />
                  ) : (
                    <ArrowDownRight className="h-4 w-4" />
                  )}
                </div>
                <div>
                  <div className="font-medium">
                    {transaction.type === 'buy' ? 'Buy' : 'Sell'} {transaction.symbol}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {transaction.shares} shares @ ${transaction.price.toFixed(2)}
                  </div>
                </div>
              </div>
              
              <div className="text-right">
                <div className={`font-medium ${
                  transaction.type === 'buy' ? 'text-red-600' : 'text-green-600'
                }`}>
                  {transaction.type === 'buy' ? '-' : '+'}${transaction.total.toFixed(2)}
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={transaction.status === 'completed' ? 'default' : 'secondary'}>
                    {transaction.status}
                  </Badge>
                  <span className="text-sm text-muted-foreground">{transaction.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 text-center">
          <Button variant="ghost" size="sm">View All Transactions</Button>
        </div>
      </CardContent>
    </Card>
  )
}