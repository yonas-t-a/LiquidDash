'use client'

import { Bell, Search, User } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import ThemeToggle from '@/components/ui/ThemeToggle' 

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex h-16 items-center gap-4 border-b bg-background px-6">
      <div className="flex flex-1 items-center gap-4">
        <div className="relative flex-1 md:grow-0">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search stocks, symbols, or news..."
            className="w-full rounded-lg bg-background pl-8 md:w-[300px] lg:w-[400px]"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <ThemeToggle />
        
        <Button variant="outline" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <Badge className="absolute -right-1 -top-1 h-5 w-5 p-0 flex items-center justify-center">
            3
          </Badge>
        </Button>
        
        <Button variant="outline" size="icon">
          <User className="h-5 w-5" />
        </Button>
        
        <div className="hidden md:block">
          <div className="text-sm font-medium">John Doe</div>
          <div className="text-xs text-muted-foreground">Premium Account</div>
        </div>
      </div>
    </header>
  )
}