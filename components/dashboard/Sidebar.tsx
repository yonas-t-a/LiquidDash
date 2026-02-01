'use client'

import { 
  Home, 
  TrendingUp, 
  Wallet, 
  BarChart3, 
  Newspaper, 
  Settings,
  Globe,
  PieChart,
  Clock
} from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navItems = [
  { icon: Home, label: 'Dashboard', id: 'dashboard' },
  { icon: TrendingUp, label: 'Markets', id: 'markets' },
  { icon: Wallet, label: 'Portfolio', id: 'portfolio' },
  { icon: BarChart3, label: 'Analytics', id: 'analytics' },
  { icon: Globe, label: 'Global', id: 'global' },
  { icon: PieChart, label: 'Holdings', id: 'holdings' },
  { icon: Newspaper, label: 'News', id: 'news' },
  { icon: Clock, label: 'History', id: 'history' },
  { icon: Settings, label: 'Settings', id: 'settings' },
]

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState('dashboard')

  const handleItemClick = (id: string) => {
    setActiveItem(id)
    // You can add additional logic here, like:
    // - Changing the main content
    // - Making API calls
    // - Updating the URL
    console.log(`Clicked on: ${id}`)
    
    // Example: Show an alert or update state somewhere else
    if (id === 'upgrade') {
      alert('Upgrade feature coming soon!')
    }
  }

  return (
    <aside className="hidden border-r bg-card md:block md:w-64">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-6">
          <div 
            className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => handleItemClick('dashboard')}
          >
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <TrendingUp className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">FinDash</span>
          </div>
        </div>
        
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid items-start px-4 text-sm font-medium">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={activeItem === item.id ? "secondary" : "ghost"}
                className={cn(
                  "w-full justify-start gap-3",
                  activeItem === item.id && "bg-secondary"
                )}
                onClick={() => handleItemClick(item.id)}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Button>
            ))}
          </nav>
        </div>
        
        <div className="mt-auto p-4">
          <div className="rounded-lg bg-primary/10 p-4">
            <div className="text-sm font-medium">Upgrade to Pro</div>
            <p className="text-xs text-muted-foreground mt-1">
              Get real-time data and advanced analytics
            </p>
            <Button 
              size="sm" 
              className="w-full mt-3" 
              onClick={() => handleItemClick('upgrade')}
            >
              Upgrade Now
            </Button>
          </div>
        </div>
      </div>
    </aside>
  )
}