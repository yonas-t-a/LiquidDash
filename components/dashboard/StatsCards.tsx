'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { TrendingUp, TrendingDown, DollarSign, Users, Activity, Target } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

const stats = [
  {
    title: "Total Portfolio",
    value: "$124,568.42",
    change: "+2.34%",
    trend: "up",
    icon: DollarSign,
    description: "Today's gain"
  },
  {
    title: "S&P 500",
    value: "4,567.89",
    change: "-0.45%",
    trend: "down",
    icon: TrendingUp,
    description: "Index value"
  },
  {
    title: "Active Users",
    value: "1,234",
    change: "+12.5%",
    trend: "up",
    icon: Users,
    description: "Live traders"
  },
  {
    title: "Market Volatility",
    value: "24.3",
    change: "-3.2%",
    trend: "down",
    icon: Activity,
    description: "VIX Index"
  }
]

export default function StatsCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {stat.title}
            </CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <div className="flex items-center gap-2 pt-1">
              <Badge 
                variant={stat.trend === 'up' ? 'default' : 'destructive'}
                className="gap-1"
              >
                {stat.trend === 'up' ? (
                  <TrendingUp className="h-3 w-3" />
                ) : (
                  <TrendingDown className="h-3 w-3" />
                )}
                {stat.change}
              </Badge>
              <span className="text-xs text-muted-foreground">
                {stat.description}
              </span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}