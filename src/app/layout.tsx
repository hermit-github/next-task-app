import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import SideBar from '@/Components/TaskApp/SideBar'



const jetbrains = JetBrains_Mono({ subsets: ['latin'] })

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
      <body className={cn(jetbrains.className,'min-h-screen w-full text-white/70 flex')}>
        <SideBar/>

        <div className="px-6 py-3 w-full">
          {children}
        </div>
        
      </body>
    </html>
  )
}
