'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Calendar, ExternalLink, TrendingUp } from 'lucide-react'

const newsItems = [
  { 
    title: 'Fed Announces Interest Rate Decision', 
    source: 'Bloomberg',
    time: '2 hours ago',
    sentiment: 'positive',
    tags: ['FED', 'ECONOMY']
  },
  { 
    title: 'Tech Stocks Rally on AI Optimism', 
    source: 'CNBC',
    time: '4 hours ago',
    sentiment: 'positive',
    tags: ['TECH', 'AI']
  },
  { 
    title: 'Oil Prices Fall Amid Demand Concerns', 
    source: 'Reuters',
    time: '6 hours ago',
    sentiment: 'negative',
    tags: ['ENERGY', 'OIL']
  },
  { 
    title: 'New Fintech Regulations Proposed', 
    source: 'Financial Times',
    time: '1 day ago',
    sentiment: 'neutral',
    tags: ['REGULATION', 'FINTECH']
  },
]

export default function NewsFeed() {
  return (
    <Card className="col-span-1 md:col-span-2">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Financial News</CardTitle>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Calendar className="mr-2 h-4 w-4" />
            Last 24h
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {newsItems.map((news, index) => (
            <div key={index} className="flex items-start justify-between border-b pb-4 last:border-0">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <h4 className="font-medium leading-none">{news.title}</h4>
                  <Badge 
                    variant={
                      news.sentiment === 'positive' ? 'default' :
                      news.sentiment === 'negative' ? 'destructive' : 'secondary'
                    }
                    className="gap-1"
                  >
                    {news.sentiment === 'positive' && <TrendingUp className="h-3 w-3" />}
                    {news.sentiment}
                  </Badge>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>{news.source}</span>
                  <span>•</span>
                  <span>{news.time}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {news.tags.map((tag) => (
                    <Badge key={tag} variant="outline">{tag}</Badge>
                  ))}
                </div>
              </div>
              <Button variant="ghost" size="icon">
                <ExternalLink className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}