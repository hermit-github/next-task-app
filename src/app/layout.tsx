import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import SideBar from '@/Components/TaskApp/SideBar'



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Taskify',
  description: 'An app to create and track tasks',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className,'min-h-screen w-full text-white/70 flex')}>
        <SideBar/>

        <div className="p-8 w-full">
          {children}
        </div>
        
      </body>
    </html>
  )
}
