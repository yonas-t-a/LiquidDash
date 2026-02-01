'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { TrendingUp } from 'lucide-react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from 'recharts'

const chartData = [
  { month: 'Jan', value: 4000, benchmark: 3800 },
  { month: 'Feb', value: 3000, benchmark: 4000 },
  { month: 'Mar', value: 5000, benchmark: 4200 },
  { month: 'Apr', value: 2780, benchmark: 3900 },
  { month: 'May', value: 3890, benchmark: 4100 },
  { month: 'Jun', value: 4390, benchmark: 4300 },
  { month: 'Jul', value: 5490, benchmark: 4500 },
  { month: 'Aug', value: 3490, benchmark: 4000 },
  { month: 'Sep', value: 4490, benchmark: 4200 },
  { month: 'Oct', value: 6490, benchmark: 4700 },
  { month: 'Nov', value: 7490, benchmark: 5000 },
  { month: 'Dec', value: 8490, benchmark: 5500 },
]

export default function PortfolioChart() {
  return (
    <Card className="col-span-1 md:col-span-2">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Portfolio Performance</CardTitle>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 text-sm">
              <div className="h-2 w-2 rounded-full bg-primary"></div>
              <span className="text-muted-foreground">Your Portfolio</span>
            </div>
            <div className="flex items-center gap-1 text-sm">
              <div className="h-2 w-2 rounded-full bg-muted-foreground"></div>
              <span className="text-muted-foreground">S&P 500</span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={chartData}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--muted))" />
              <XAxis 
                dataKey="month" 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
              />
              <YAxis 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                tickFormatter={(value) => `$${value}`}
              />
              <Tooltip 
                formatter={(value) => [`$${value}`, 'Value']}
                labelFormatter={(label) => `Month: ${label}`}
                contentStyle={{
                  backgroundColor: 'hsl(var(--background))',
                  borderColor: 'hsl(var(--border))',
                }}
              />
              <Area
                type="monotone"
                dataKey="benchmark"
                stroke="hsl(var(--muted-foreground))"
                fill="hsl(var(--muted))"
                strokeWidth={2}
                fillOpacity={0.2}
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke="hsl(var(--primary))"
                fill="hsl(var(--primary))"
                strokeWidth={3}
                fillOpacity={0.2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        
        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="space-y-1">
            <div className="text-sm text-muted-foreground">YTD Return</div>
            <div className="text-2xl font-bold text-green-600">+24.5%</div>
          </div>
          <div className="space-y-1">
            <div className="text-sm text-muted-foreground">Sharpe Ratio</div>
            <div className="text-2xl font-bold">1.8</div>
          </div>
          <div className="space-y-1">
            <div className="text-sm text-muted-foreground">Max Drawdown</div>
            <div className="text-2xl font-bold text-red-600">-8.2%</div>
          </div>
          <div className="space-y-1">
            <div className="text-sm text-muted-foreground">Volatility</div>
            <div className="text-2xl font-bold">12.4%</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}