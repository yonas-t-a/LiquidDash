'use client'

import { useState } from 'react'
import Header from '@/components/dashboard/Header'
import Sidebar from '@/components/dashboard/Sidebar'
import StatsCards from '@/components/dashboard/StatsCards'
import MarketOverview from '@/components/dashboard/MarketOverview'
import PortfolioChart from '@/components/dashboard/PortfolioChart'
import Watchlist from '@/components/dashboard/Watchlist'
import RecentTransactions from '@/components/dashboard/RecentTransactions'
import NewsFeed from '@/components/dashboard/NewsFeed'
import { Button } from '@/components/ui/button'
import { RefreshCw } from 'lucide-react'

export default function DashboardPage() {
  const [lastUpdated, setLastUpdated] = useState<string>('Just now')
  const [isLoading, setIsLoading] = useState(false)

  const handleRefresh = () => {
    setIsLoading(true)
    // Simulate API refresh
    setTimeout(() => {
      setLastUpdated(new Date().toLocaleTimeString([], { 
        hour: '2-digit', 
        minute: '2-digit',
        second: '2-digit'
      }))
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <div className="flex-1 flex flex-col">
        <Header />
        
        <main className="flex-1 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
              <p className="text-muted-foreground">
                Real-time market data and portfolio analytics
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">
                Updated: {lastUpdated}
              </span>
              <Button 
                variant="outline" 
                size="sm"
                onClick={handleRefresh}
                disabled={isLoading}
              >
                <RefreshCw className={`mr-2 h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
                Refresh
              </Button>
            </div>
          </div>
          
          <div className="space-y-6">
            <StatsCards />
            
            <div className="grid gap-6 md:grid-cols-3">
              <div className="md:col-span-2 space-y-6">
                <PortfolioChart />
                <MarketOverview />
                <NewsFeed />
              </div>
              
              <div className="space-y-6">
                <Watchlist />
                <RecentTransactions />
                
                <div className="rounded-lg border bg-card p-4">
                  <h3 className="font-semibold mb-2">Quick Actions</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <Button size="sm">Buy</Button>
                    <Button size="sm" variant="outline">Sell</Button>
                    <Button size="sm" variant="outline">Deposit</Button>
                    <Button size="sm" variant="outline">Withdraw</Button>
                  </div>
                </div>
                
                <div className="rounded-lg border bg-card p-4">
                  <h3 className="font-semibold mb-2">Market Status</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">US Market</span>
                      <span className="text-sm font-medium text-green-600">Open</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">London</span>
                      <span className="text-sm font-medium text-red-600">Closed</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Tokyo</span>
                      <span className="text-sm font-medium text-red-600">Closed</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Hong Kong</span>
                      <span className="text-sm font-medium text-red-600">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        
        <footer className="border-t py-4 px-6">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div>
              © 2024 Financial Dashboard. Data provided by Finnhub.
            </div>
            <div className="flex items-center gap-4">
              <span>Risk Level: Medium</span>
              <span>•</span>
              <span>Data Delay: 15m</span>
              <span>•</span>
              <span>Version: 1.0.0</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}